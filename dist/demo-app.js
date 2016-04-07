/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	var parallax = __webpack_require__(5);
	
	var viewport = document.getElementById('viewport');
	var layer1 = document.getElementById('layer1');
	
	
	var view = parallax.init(viewport);
	
	
	   view.add(layer1, [
	    {
	      pos : [0, 0],
	      translate : [-10, -10],
	      rotate : [0,-45],
	      scale : [1]
	    },
	    {
	      pos : [0, 100],
	      translate : [-10, 10],
	      rotate : [0, -45],
	      scale : [1]
	    },
	    {
	      pos : [100, 0],
	      translate : [10, -10],
	      rotate : [0, 45],
	      scale : [1]
	    },
	    {
	      pos : [100, 100],
	      translate : [10, 10],
	      rotate : [0,45],
	      scale : [1]
	    },
	    {
	      pos: [50, 50],
	      translate: [0,0],
	      rotate:[0,0],
	      scale: [1.5]
	    }
	  ]);
	
	
	   view.add(layer2, parallax.uniform(10));
	
	   view.add(layer3, [
	    {
	      pos : [0, 0],
	      translate : [-15, -5],
	      rotate : [0,-10],
	      scale : [1]
	    },
	    {
	      pos : [0, 100],
	      translate : [-15, 5],
	      rotate : [0, -10],
	      scale : [1]
	    },
	    {
	      pos : [100, 0],
	      translate : [15, -5],
	      rotate : [0, 10],
	      scale : [1]
	    },
	    {
	      pos : [100, 100],
	      translate : [15, 5],
	      rotate : [0,10],
	      scale : [1]
	    }
	  ]);
	
	  view.add(matrix, parallax.uniform(0));
	
	  view.matrix([[m11, m12, m13],
	               [m21, m22, m23],
	               [m31, m32, m33]
	              ],
	              [
	                {
	                  pos : [10,40],
	                  explode: 0,
	                  rotate: 0
	                },
	                {
	                  pos : [50, 40],
	                  explode : 0,
	                  rotate: 0
	                },
	                {
	                  pos : [10, 80],
	                  explode : 0,
	                  rotate: 0
	                },
	                {
	                  pos : [50, 80],
	                  explode : 0,
	                  rotate: 0
	                },
	                {
	                  pos : [30, 60],
	                  explode : 3,
	                  rotate: 45
	                }
	              ], 5);
	              
	
	


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./node_modules/css-loader/index.js!./styles.css", function() {
				var newContent = require("!!./node_modules/css-loader/index.js!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "#viewport {\n  border: 1px solid #ddd;\n  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);\n  margin: 0px auto;\n  width: 100%;\n  max-width: 960px;\n  height: 80vh;\n  position: relative;\n  overflow:hidden;\n}\n\n#layer1, #layer2, #layer3 {\n  position: absolute;\n}\n\n#layer1 {\n  font-family: Georgia;\n  font-weight: bold;\n  color: #668921;\n  border: #668921 3px solid;\n  font-size: 25px;\n  padding: 12px;\n  width: 220px;\n  height: 25px;\n  left: 0px;\n  right: 0px;\n  top: 0px;\n  bottom: 0px;\n  margin: auto;\n\n}\n\n#layer2 {\n  font-family: Helvetica;\n  background-color: rgba(128,128,128, .5);\n  color: #99b844;\n  padding: 20px;\n  top: 50px;\n}\n\n#layer3{\n  border: 10px solid #992222;\n  width: 100px;\n  height: 200px;\n  left: 70%;\n  top: 20%;\n  text-align: center;\n  padding-top: 40px;\n  color: #992222;\n  background: rgba(0,0,0,.7);\n}\n\n#matrix {\n  position: absolute;\n  left: 20%;\n  bottom: 30%;\n}\n\n#matrix .row{\n  font-size: 0px;\n}\n\nimg.fragment{\n  height: 40px;\n  width: 40px;\n}\n", ""]);
	
	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* create parallaxed views.
	 *
	 */
	
	var actions = __webpack_require__(6);
	var utils   = __webpack_require__(7);
	
	var distanceFromCenter = function(x, y, maxX, maxY){
	  return {
	    x : (maxX/2) - x,
	    y : (maxY/2) - y
	  }
	};
	
	var matrix = function(view){
	  return function(m, config){
	    for (var y = 0; y < m.length; y++){ 
	      var row = m[y];
	      for (var x = 0; x < row.length; x++){
	        piece = row[x];
	        var d = distanceFromCenter(x, y, row.length, m.length);
	        var setpoints = [];
	
	        for (var i = 0; i < config.length; i++){
	          var pos = config[i].pos;
	          var e = config[i].explode;
	          var r = config[i].rotate;
	          setpoints.push({
	            pos : pos,
	            translate : [-1 * e * d.x, -1 * e * d.y],
	            rotate :    [r * d.x, r * d.y],
	            scale : [1]
	          });
	        }
	        view.add(piece, setpoints, 10);
	      }
	    }
	  }
	};
	
	var init = function(viewport){
	  var view = {
	    layers : [],
	    viewport : viewport
	  };
	
	  view.add = actions.add(view);
	  view.matrix = matrix(view);
	
	  viewport.addEventListener('mousemove', actions.renderer(view));
	  viewport.addEventListener('touchstart', actions.renderer(view));
	  viewport.addEventListener('touchmove', actions.renderer(view));
	  return view;
	}
	
	  
	exports.init = init;
	exports.uniform = utils.uniform;
	
	


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* 
	 * Actions
	 */
	
	var utils = __webpack_require__(7);
	
	var renderer = function(view){
	  return function(e){
	    var offset = utils.getOffset(view.viewport);
	    var pos = {};
	    if (e.type === "mousemove"){
	      pos = {  
	        x : (e.clientX - offset.left) / offset.width,
	        y : (e.clientY - offset.top ) / offset.height,
	      }
	    } else {
	      pos = {
	        x : (e.changedTouches[0].clientX - offset.left) / offset.width,
	        y : (e.changedTouches[0].clientY - offset.top ) / offset.height,
	      }
	    }
	    for (layer of view.layers){
	      var tl = layer.topLeft;
	      var br = layer.bottomRight;
	
	      var css = utils.interpolate(layer.setpoints, pos, layer.exponent);
	      var t = css.translate,
	          r = css.rotate,
	          s = css.scale
	      ;
	      var transform = "translate(" +t.map(function(v){return (v * 0.01 * offset.width) + "px"}).join(',') + ") " +
	                         "rotatex(" + r[0] + "deg)" + "rotateY(" + r[1] + "deg)" +
	                            "scale(" + s[0] +")"; 
	      layer.element.style.transform = transform;
	    }
	  }
	}
	
	var add = function(view){
	  return function(element, setpoints, exponent){
	    exponent = exponent || 1;
	    view.layers.push({ element: element, exponent : exponent, setpoints : setpoints});
	  }
	}
	
	exports.add = add;
	exports.renderer = renderer;


/***/ },
/* 7 */
/***/ function(module, exports) {

	/* 
	 * Utility Functions used in the rest of the library.
	 */
	
	var average_by = function(weights){
	  var total = weights.reduce(function(prev, current){return current + prev});
	  return function(prev, current, idx){
	    if (idx == 1){
	      var w = weights[0] / total;
	      prev = prev.map(function(v, i){
	        return v * w;
	      });
	    }
	    var w = weights[idx] / total;
	
	    return current.map(function(v, i){
	      return (v * w) + (prev[i] || 0);
	    });
	  }
	}
	
	var interpolate = function(setpoints, pos, exponent){
	  exponent = exponent || 1;
	  var positions = [];
	  var translations = [];
	  var rotations = [];
	  var scale = [];
	
	  for (var i = 0; i < setpoints.length; i++){
	    positions.push(setpoints[i].pos)
	    translations.push(setpoints[i].translate)
	    rotations.push(setpoints[i].rotate)
	    scale.push(setpoints[i].scale)
	  }
	  var weights = weight(positions, pos, exponent);
	
	  var out = {};
	  out.translate = translations.reduce(average_by(weights));
	  out.rotate    = rotations.reduce(average_by(weights));
	  out.scale       = scale.reduce(average_by(weights));
	  return out;
	};
	
	var weight = function(positions, pos, exponent){
	  exponent = exponent || 1;
	  var total = positions.length;
	  var out = [];
	  for (p of positions){
	    var x = p[0] / 100;
	    var y = p[1] / 100;
	    var w = Math.sqrt(Math.pow(Math.abs(pos.x - x),2) +   
	                      Math.pow(Math.abs(pos.y - y),2));
	    out.push(Math.pow(1 - w, exponent));
	  }
	  return out;
	};
	
	var getOffset = function(element){
	  var offset = element.getBoundingClientRect();
	
	  if (element.parentElement == null) {// we are at the top
	    return offset; // base case;
	  }
	  // recursive case
	  parentOffset = getOffset(element.parentElement);
	  offset.left += parentOffset.left;
	  offset.top += parentOffset.top;
	  return offset;
	}
	
	
	var uniform = function(p){
	  return [
	    {
	      pos: [0,0],
	      translate : [-1 * p, -1 * p],
	      rotate: [0,0],
	      scale : [1]
	    },
	    {
	      pos: [100,0],
	      translate : [p, -1 * p],
	      rotate: [0,0],
	      scale : [1]
	    },
	    {
	      pos: [0,100],
	      translate : [-1 * p, p],
	      rotate: [0,0],
	      scale : [1]
	    },
	    {
	      pos: [100,100],
	      translate : [p, p],
	      rotate: [0,0],
	      scale : [1]
	    }
	  ];
	};
	
	exports.interpolate = interpolate;
	exports.getOffset = getOffset;
	exports.uniform = uniform;


/***/ }
/******/ ]);
//# sourceMappingURL=demo-app.js.map