var promoCarousel = function(element, visibleTiles, options) {
	this.promoTiles = jQuery(element).find("ul:eq(0)");
	this.nextArrow = jQuery(element).children(".next-arrow");
	this.prevArrow = jQuery(element).children(".prev-arrow");
	this.visibleTiles = visibleTiles;
	
	this.defaultOptions = {
		lpos				: 'chrysler_homepage_content_tile',
		pagerContainer		: '',
		pagerElements		: '',
		pagerSelectedClass	: '',
		'container-link'	: '',
		stepSize			: 1
	};
	this.options = jQuery.extend(this.defaultOptions, options);
	
	var self = this;
	
	// secondary linked container
	if( self.options['container-link'] ){
		this.promoTiles_linked = jQuery(self.options['container-link']).find("ul:eq(0)");
	}
	
	this.promoTiles.children("li").each(function(){
		jQuery(this).attr('data-instance', jQuery(this).index())
	});
	
	if (this.promoTiles.children("li").length > this.visibleTiles)
	{
		this.promoTiles.width((this.promoTiles.children("li").outerWidth(true)) * this.promoTiles.children("li").length);
		this.nextArrow.unbind().bind("click", function(){self.scrollRight({})});
		this.prevArrow.unbind().bind("click", function(){self.scrollLeft({})});
	}
	else
	{
		jQuery(element).addClass("no-scroll");
	}
	
	this.scrollRight = function(options)
	{
		var myStepSize = options.stepSize || this.options.stepSize;
		
		var maxLeft = (this.promoTiles.children("li").outerWidth(true) * (this.promoTiles.children("li").length - 1) * -1) + (this.promoTiles.children("li").outerWidth(true) * (this.visibleTiles - 1));
		var leftValue = (this.promoTiles.children("li").outerWidth(true) * (myStepSize * -1)) + (this.promoTiles.position()).left;
		
		if (leftValue < maxLeft)
		{
			while (leftValue < maxLeft)
			{
				var firstChild = this.promoTiles.children().eq(0);
				firstChild.remove();
				this.promoTiles.append(firstChild);
				leftValue = leftValue + firstChild.outerWidth(true);
				this.promoTiles.css("left", ((this.promoTiles.position()).left + firstChild.outerWidth(true)) + "px");
				// secondary linked container
				if( self.options['container-link'] ){
					var firstChild_linked = this.promoTiles_linked.children().eq(0);
					firstChild_linked.remove();
					this.promoTiles_linked.append(firstChild_linked);
					this.promoTiles_linked.css("left", ((this.promoTiles_linked.position()).left + firstChild_linked.outerWidth(true)) + "px");
				}
			}
			
			leftValue = maxLeft;
		}
		
		this.promoTiles.find("img[lazysrc]").each
		(
			function()
			{
				if (((jQuery(this).parents("li").offset()).left - (jQuery(this).parents("li").outerWidth(true) * self.options.stepSize)) < (self.promoTiles.parent().offset()).left + self.promoTiles.parent().width())
				{
					chrysler.lazy.showPreloader(this);
					chrysler.lazy.loadContent(this);
					/*
					if ((jQuery(self.promoTiles[0]).parent().parent().hasClass('overview-gallery-container'))==true){
						var imgSrc = jQuery(this).attr('lazysrc');
						jQuery(this).parent().css('background','url('+imgSrc+') no-repeat');
						//jQuery(this).css('display','none');
					}*/
					
				}
			}
		);
		
		// secondary linked container
		if( self.options['container-link'] ){
			this.promoTiles_linked.find("img[lazysrc]").each(function(){
				chrysler.lazy.loadContent(this);
			});
		}
		
		
		//console.log("Left Value 1R : "+leftValue+", MAX LEFT : "+maxLeft);

		//this.promoTiles.css("left",leftValue + "px");

		this.promoTiles.animate({left: leftValue}, 500, '', function(){ self.updatePager() });
		// secondary linked container
		if( self.options['container-link'] ){
			self.promoTiles_linked.animate({left: leftValue}, 500);
		}
		
		(!options.skipTrack) && linkTrack(self.options.lpos, "right_arrow");
	};
	
	this.scrollLeft = function(options)
	{
		var myStepSize = options.stepSize || this.options.stepSize;
		
		var leftValue = (this.promoTiles.position()).left + (this.promoTiles.children("li").outerWidth(true) * myStepSize);
		//console.log("Left Value : "+leftValue);
		if (leftValue > 0)
		{
			while (leftValue > (this.promoTiles.children("li").outerWidth(true) * (myStepSize * -1)))
			{
				var lastChild = this.promoTiles.children().eq(this.promoTiles.children().length - 1);
				lastChild.remove();
				this.promoTiles.prepend(lastChild);
				leftValue = (this.promoTiles.position()).left - lastChild.outerWidth(true);
				this.promoTiles.css("left", leftValue + "px");
				// secondary linked container
				if( self.options['container-link'] ){
					var lastChild_linked = this.promoTiles_linked.children().eq(this.promoTiles_linked.children().length - 1);
					lastChild_linked.remove();
					this.promoTiles_linked.prepend(lastChild_linked);
					this.promoTiles_linked.css("left", leftValue + "px");
				}
			}
			
			leftValue = 0;
		}
		
		this.promoTiles.find("img[lazysrc]").each
		(
			function()
			{
				if ((jQuery(this).parents("li").offset()).left < (self.promoTiles.parent().offset()).left)
				{
					chrysler.lazy.showPreloader(this);
					chrysler.lazy.loadContent(this);
				}
			}
		);
		
		// secondary linked container
		if( self.options['container-link'] ){
			this.promoTiles_linked.find("img[lazysrc]").each(function(){
				chrysler.lazy.loadContent(this);
			});
		}
		
		//console.log("Left Value 1L : "+leftValue);
		//this.promoTiles.css("left",leftValue + "px");
		this.promoTiles.animate({left: leftValue}, 500, '', function(){ self.updatePager() });
		// secondary linked container
		if( self.options['container-link'] ){
			self.promoTiles_linked.animate({left: leftValue}, 500);
		}
		(!options.skipTrack) && linkTrack(self.options.lpos, "left_arrow");
	};
	
	//
	this.scrollTo = function(index){
		var oLocal = {
			step: Math.abs( index - self.options.pagerContainer.find(self.options.pagerElements + '.' + self.options.pagerSelectedClass).index() ),
			direction: ( index > self.options.pagerContainer.find(self.options.pagerElements + '.' + self.options.pagerSelectedClass).index() ) ? 'right' : 'left'
		};
		
		if( oLocal.direction == 'left' ){
			self.scrollLeft({skipTrack: true, stepSize: oLocal.step});
		}
		else{
			self.scrollRight({skipTrack: true, stepSize: oLocal.step});
		}
	};
	
	this.updatePager = function(){
		var oLocal = {
				width: parseInt( this.promoTiles.find('li').outerWidth(true) ),
				left: Math.abs( parseInt( this.promoTiles.css('left') ) )
		};
		
		if( self.options.pagerContainer[0] ){
			oLocal.index	= oLocal.left / oLocal.width;
			oLocal.instance	= this.promoTiles.find('li:eq(' + oLocal.index + ')').attr('data-instance');
			
			self.options.pagerContainer
				.find(self.options.pagerElements).removeClass(self.options.pagerSelectedClass).end()
				.find(self.options.pagerElements + ':eq(' + oLocal.instance + ')').addClass(self.options.pagerSelectedClass);
		}
	};
	
	if( self.options.pagerContainer[0] ){
		self.options.pagerContainer.find(self.options.pagerElements)
			.click(function(e){
				e.preventDefault();
				//
				if( !jQuery(this).hasClass('selected') ){
					self.scrollTo( jQuery(this).index() );
				};
			});
	}
};