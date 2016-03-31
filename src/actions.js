/* 
 * Actions
 */

var utils = require('./utils');

var renderer = function(view){
  return function(e){
    var offset = utils.getOffset(view.viewport);
    var pos = {  
      x : (e.clientX - offset.left) / offset.width,
      y : (e.clientY - offset.top ) / offset.height,
    };
    for (layer of view.layers){
      var tl = layer.topLeft;
      var br = layer.bottomRight;

      var css = utils.interpolate(layer.setpoints, pos);
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

var append = function(view){
  return function(element, setpoints){
    view.layers.push({ element: element, setpoints : setpoints});
  }
}

exports.append = append;
exports.renderer = renderer;
