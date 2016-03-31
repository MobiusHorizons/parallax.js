/* create parallaxed views.
 *
 */

var actions = require("./actions");

var init = function(viewport){
  console.log(viewport);
  var view = {
    layers : [],
    viewport : viewport
  };

  view.add = actions.add(view);

  viewport.addEventListener('mousemove', actions.renderer(view));
  return view;
}

exports.init = init;
