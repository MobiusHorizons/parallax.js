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

	/* 
	 * export parallax to window
	 */
	
	window.parallax = __webpack_require__(5);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
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
//# sourceMappingURL=parallax.js.map