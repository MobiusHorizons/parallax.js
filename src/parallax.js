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

  view.append = actions.append(view);

  viewport.addEventListener('mousemove', actions.renderer(view));
  return view;
}

exports.init = init;
