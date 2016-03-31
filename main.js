require("./styles.css");
var parallax = require("./src/parallax");

var viewport = document.getElementById('viewport');
var layer1 = document.getElementById('layer1');


console.log(viewport);
var view = parallax.init(viewport);


   view.append(layer1, [
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


   view.append(layer2, [
    {
      pos : [0, 0],
      translate : [-5, -5],
      rotate : [0,-10],
      scale : [1]
    },
    {
      pos : [0, 100],
      translate : [-5, 5],
      rotate : [0, -10],
      scale : [1]
    },
    {
      pos : [100, 0],
      translate : [5, -5],
      rotate : [0, 10],
      scale : [1]
    },
    {
      pos : [100, 100],
      translate : [5, 5],
      rotate : [0,10],
      scale : [1]
    }
  ]);

   view.append(layer3, [
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


