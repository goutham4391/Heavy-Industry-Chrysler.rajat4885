var lazyLoader = new function()
{
	this.isWindowLoaded = false;
	this.loaderClass = "image-loader";
	this.blankImage = "//www.chrysler.com/images/blank.gif";
	this.loadQueue = new Array();
	this.offset = 0;
	
	this.init = function()
	{
		//Image.success = false;
		var lazyelements = this.getLazyElements();
		
		for (var i = 0; i < lazyelements.length; i++)
		{
			var trigger = lazyelements[i].getAttribute("trigger");
			
			switch (trigger)
			{
				case "pageload":
					
					this.showPreloader(lazyelements[i]);
					this.loadContent(lazyelements[i]);
					break;
				
				case "inview":
					if (lazyelements[i].tagName == "IMG")
					{
						lazyelements[i].src = this.blankImage;
					}
					
					if (!this._loadInView(lazyelements[i]))
					{
						chrysler.util.addEventListener(window, "scroll", this._loadInView, this, [lazyelements[i]]);
					}
					break;
				
				case "none": case null:
					//do nothing
					break;
				
				default:
					lazyelements[i].removeAttribute("trigger");
					
					if (lazyelements[i].tagName == "IMG")
					{
						lazyelements[i].src = this.blankImage;
					}
					
					if (trigger.substring(0, 2) == "$(" || trigger.substring(0, 7) == "jQuery(")
					{
						eval(trigger.substring(0, trigger.lastIndexOf("."))).one
						(
							trigger.substring(trigger.lastIndexOf(".") + 1),
							{param: lazyelements[i]},
							function(event)
							{
								lazyLoader.showPreloader(event.data.param);
								lazyLoader.loadContent(event.data.param);
							}
						);
					}
					else
					{
						chrysler.util.addEventListener(eval(trigger.substring(0, trigger.lastIndexOf("."))), trigger.substring(trigger.lastIndexOf(".") + 1), this._loadInView, this, [lazyelements[i]]);
					}
			}
		}
	};
		
	this.getLazyElements = function(tagName)
	{
		var dom = document.getElementsByTagName(tagName ? tagName : "*");
		var lazyElements = new Array();
		
		for (var i = 0; i < dom.length; i++)
		{
			if (dom[i].getAttribute("lazysrc"))
			{
				lazyElements.push(dom[i]);
			}
		}
		
		return lazyElements;
	};
	
	this.showPreloader = function(element)
	{
		if (element.tagName == "IMG")
		{
			element.src = this.blankImage;
			element.className = (element.className + " " + this.loaderClass).trim();
			element.setAttribute("data-alt", element.getAttribute("alt"));
			element.removeAttribute("alt");
		}
		else
		{
			element.className = element.className + " content-loader";
		}
	};
	
	this.loadContent = function(lazyElement)
	{
		var functionCall;
		
		if (lazyElement.tagName == "IMG")
		{
			functionCall = function(lazyImage)
			{
				lazyImage.onload = lazyImage.onabort = lazyImage.onerror = function()
				{
					var callback = lazyImage.getAttribute("callback");
					var params = lazyImage.getAttribute("params");
					
					lazyImage.setAttribute("alt", lazyImage.getAttribute("data-alt"));
					lazyImage.removeAttribute("data-alt");
					lazyImage.removeAttribute("lazysrc");
					lazyImage.removeAttribute("trigger");
					lazyImage.removeAttribute("callback");
					lazyImage.removeAttribute("params");
					lazyImage.className = lazyImage.className.replace(new RegExp("(\\s|^)" + lazyLoader.loaderClass + "(\\s|$)"), " ").trim();
					
					if (typeof eval(callback) == "function")
					{
						//eval(callback + "(" + params + (params) + "lazyImage)");
						
						eval(String.format("{0}({1}lazyImage)", callback, (!String.isNullOrWhiteSpace(params)) ? (params + ", ") : ""));
					}
					//console.log('Image Loaded!');
				};
				
				lazyImage.src = lazyImage.getAttribute("lazysrc");
			};
		}
		else
		{
			functionCall = function(lazyElement)
			{
				var callback = lazyElement.getAttribute("callback");
				var params = lazyElement.getAttribute("params");
				
				$.ajax
				(
					{
						url: lazyElement.getAttribute("lazysrc"),
						success: function(response)
						{
							lazyElement.parentNode.replaceChild(response, lazyElement);
							
							if (typeof eval(lazyContent.callback) == "function")
							{
								eval(lazyContent.callback + "(" + lazyContent.params + ", lazyElement)");
							}
						}
					}
				);
			};
		}
		
		if (this.isWindowLoaded)
		{
			functionCall(lazyElement);
		}
		else
		{
			chrysler.util.addEventListener(window, "load", functionCall, this, [lazyElement]);
		}
	};
	
	this.loadImage = function(source, callback)
	{
		var image = new Image();
		var args = arguments;
		
		var _callback = function(flag)
		{
			//image.success = flag;
			
			if (typeof callback == "function")
			{
				if (args.length > 2)
				{
					var strArgs = new Array();
					
					for (var i = 2; i < args.length; i++)
					{
						strArgs.push(args[i]);
					}
					
					strArgs.push(image);
					callback.apply(window, strArgs);
				}
				else
				{
					callback(image);
				}
			}
		}
		
		image.onload = function()
		{
			_callback(true);
		};
		
		image.onabort = image.onerror = function()
		{
			_callback(false);
		};
		
		image.src = source;
	};
	
	this.loadImageCollection = function(source, callback)
	{
		var loadedImages = new Array();
		var args = arguments;
		var numberOfloadedImages = 0;
		
		for (var i = 0; i < source.length; i++)
		{
			this.loadImage
			(
				source[i],
				function(loadedImages, j, img)
				{
					loadedImages[j] = img;
					numberOfloadedImages++;
					
					if (numberOfloadedImages == source.length)
					{
						if (typeof callback == "function")
						{
							if (args.length > 2)
							{
								var strArgs = "";
								
								for (var i = 2; i < args.length; i++)
								{
									strArgs += "args[" + i + "], ";
								}
								
								eval("callback(" + strArgs + "loadedImages);");
							}
							else
							{
								callback(loadedImages);
							}
						}
					}
				},
				loadedImages,
				i
			);
		}
	};
	
	this.loadScript = function(source, type, callback)
	{
		var script = window.parent.document.createElement("script")
		script.type = type;
		script.src = source;
		script.setAttribute("isloading", "true");
		document.getElementsByTagName("head")[0].appendChild(script);
		this._handleCallback(script, callback);
	};
	
	this.loadScriptCollection = function(source, callback)
	{
		var numberOfLoadedScripts = 0;
		
		for (var i = 0; i < source.length; i++)
		{
			this.loadScript
			(
				source[i].src,
				source[i].type,
				function()
				{
					numberOfLoadedScripts++;
					
					if (numberOfLoadedScripts == source.length)
					{
						if (typeof callback == "function")
						{
							callback();
						}
					}
				}
			);
		}
	};
	
	this.requires = function(source, callback)
	{
		var loadedScripts = document.getElementsByTagName("script");
		var scriptsToLoad = new Array();
		var newSource = new Array();
		var regex = new RegExp(/^(https?|ftp|file):\/\/.+$/);
		
		if (!chrysler.util.isArray(source))
		{
			newSource.push({src: source, type: "text/javascript"});
		}
		else
		{
			for (var i = 0; i < source.length; i++)
			{
				newSource.push({src: source[i], type: "text/javascript"});
			}
		}
		
		for (var i = 0; i < loadedScripts.length; i++)
		{
			for (var j = 0; j < newSource.length; j++)
			{
			
				if (!regex.test(newSource[j].src) && newSource[j].src != "REMOVE" && newSource[j].src.indexOf("QUEUE") != 0)
				{
					newSource[j].src = window.location.protocol + "//" + window.location.host + newSource[j].src;
				}
				
				if (newSource[j].src == loadedScripts[i].src)
				{
					if (loadedScripts[i].getAttribute("isloading"))
					{
						newSource[j].src = "QUEUE" + newSource[j].src;
					}
					else
					{
						newSource[j].src = "REMOVE";
					}
					
					break;
				}
			}
		}
		
		source = new Array();
		
		for (var i = 0; i < newSource.length; i++)
		{
			if (newSource[i].src.indexOf("QUEUE") == 0)
			{
				this.loadQueue.push({src: newSource[i].src.substring(5), callback: callback});
			}
			else if (newSource[i].src != "REMOVE")
			{
				source.push(newSource[i]);
			}
		}
		
		if (source.length > 0)
		{
			this.loadScriptCollection(source, callback);
		}
		else if (this.loadQueue.length == 0)
		{
			callback();
		}
	};
	
	this.loadLink = function(href, media, rel, type, callback)
	{
		if (!media)
		{
			media = "screen";
		}
		
		if (!rel)
		{
			rel = "stylesheet";
		}
		
		if (!type)
		{
			type = "text/css";
		}
		
		var link = window.parent.document.createElement("link")
		link.href = href;
		link.media = media;
		link.rel = rel;
		link.type = type;
		document.getElementsByTagName("head")[0].appendChild(link);
		this._handleCallback(link, callback);
	};
	
	this._getOffsetTop = function(element)
	{
		var offsetTop = 0;
		
		while (element)
		{
			offsetTop += element.offsetTop;
			element = element.offsetParent;
		}
		
		return offsetTop;
	};
	
	this._loadInView = function(element, callback)
	{
		if (element.getAttribute("trigger") && this._getOffsetTop(element) - (window.innerHeight ? window.innerHeight : document.documentElement ? document.documentElement.clientHeight : document.body.clientHeight) - (window.pageYOffset ? window.pageYOffset : document.documentElement ? document.documentElement.scrollTop : document.body ? document.body.scrollTop : 0) < this.offset)
		{
			element.removeAttribute("trigger");
			this.showPreloader(element);
			this.loadContent(element);
			
			if (typeof callback == "function")
			{
				callback();
			}
			
			return true;
		}
		
		return false;
	};
	
	this._handleCallback = function(element, callback)
	{
		if (element.readyState)
		{
			element.onreadystatechange = function()
			{
				if (element.readyState == "loaded" || element.readyState == "complete")
				{
					element.onreadystatechange = null;
					element.removeAttribute("isloading");
					callback();
					lazyLoader._releaseQueue(element);
				}
			};
		}
		else
		{
			element.onload = function()
			{
				element.removeAttribute("isloading");
				callback();
				lazyLoader._releaseQueue(element);
			};
			
		}
	};
	
	this._releaseQueue = function(element)
	{
		for (var i = 0; i < this.loadQueue.length; i++)
		{
			if (this.loadQueue[i].src == element.src)
			{
				this.loadQueue[i].callback();
				this.loadQueue.removeAt(i);
				i--;
			}
		}
	};
	
	this.toString = function()
	{
		return "[object lazyLoader]";
	};
};

if (chrysler)
{
	chrysler.lazy = lazyLoader;
}

jQuery(document).ready
(
	function()
	{
		lazyLoader.init();
	}
);

jQuery(window).load
(
	function()
	{
		lazyLoader.isWindowLoaded = true;
	}
);