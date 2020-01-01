var express = require('express');
var Matter = require('matter-js');
var ws281x = require('rpi-ws281x-native');

const app = express();
const port = 8080;

var NUM_LEDS = parseInt(240);
pixelData = new Uint32Array(NUM_LEDS);

ws281x.init(NUM_LEDS);

var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies;

app.get('/', function(req, res) {
  res.send('hello world');
});

app.get('/punch', function(req, res) {
  res.send('PUNCH');

  punch([203711, 707211, 735741, 281559, 37639]);
});


process.on('SIGINT', function () {
  ws281x.reset();
  process.nextTick(function () { process.exit(0); });
});

app.listen(port, err => {
   if (err) throw err
   console.log(`> Ready on http://localhost:${port}`)
  initMatterPhysic();
  startPhysicLoop();
});


function scale(num, in_min, in_max, out_min, out_max) {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}


function initMatterPhysic() {

  this.engine = Engine.create();

  engine.timing.timeScale = 0.5;

  // var render = Render.create({
  //     element: document.body,
  //     engine: engine
  // });

  this.range = 580;
  this.highestPoint = 1000;
  this.highestPointArrived = true;

  this.frosch = Bodies.rectangle(400, 600, 20, 20, { restitution: 0.9, inertia: 100 });


  this.end = Bodies.rectangle(400, -25, 100, 50, { label: "bell", isStatic: true});


  var ground = Bodies.rectangle(400, 630, 810, 60, { isStatic: true });

  World.add(this.engine.world, [this.frosch, this.end, ground]);

      // run the engine
  //Engine.run(engine);

  // run the renderer
//  Render.run(render);

  Events.on(this.engine, 'afterUpdate', (event) => {
      var engine = event.source;

      if (this.highestPointArrived === false && this.frosch.position.y > this.highestPoint){
        this.highestPointArrived = true;


        let m = Math.round(this.highestPoint - 10);
        console.log("HIGHET POINT", m);
        let cm = this.range - m;
        console.log("CM", cm);

        let led = Math.round(scale(cm, 0, this.range, 0, 240));

        console.log("HIGHEST LED", led);

        Matter.World.addBody(engine.world, Bodies.rectangle(400, m, 200, 2, { isStatic: true, isSensor: true }));



      }else{
        this.highestPoint = this.frosch.position.y;
      }

      renderLeds();


      //console.log(this.frosch.position);
  });
  Events.on(engine, 'collisionStart', (event) => {
    console.log("coll");
    var pairs = event.pairs;

    // change object colours to show those in an active collision (e.g. resting contact)
    // for (var i = 0; i < pairs.length; i++) {
    //     var pair = pairs[i];
    //     console.log(pair);
    // }
  });

}



function punch(integral){
  this.highestPoint = 1000;
  this.highestPointArrived = false;
  Matter.Body.setMass(this.frosch, 1)
  console.log(integral, integral.length);
  let input = integral.reduce((a, b) => a + b, 0) / integral.length;

  console.log(input);

  let b = scale(input, 10000, 500000, 0, 0.4) * -1;
  //console.log("force", b);

  Matter.Body.applyForce(this.frosch, this.frosch.position, { x: 0, y: b });
}

function startPhysicLoop() {
  setInterval(() => {
                Engine.update(this.engine, 1000 / 200);

    }, 1000 / 200);
}

function rgb(r, g, b) {
  return ((r & 0xff) << 16) + ((g & 0xff) << 8) + (b & 0xff);
}

function renderLeds() {
  let m = Math.round(this.frosch.position.y - 10);

  let cm = this.range - m;

  for (var i = 0; i < NUM_LEDS; i++) {
    pixelData[i] = 0;
  }

  let led = Math.round(scale(cm, 0, this.range, 0, NUM_LEDS));

  console.log(`LED ${led} -  ${cm} cm`);

  for (var i = 0; i < led; i++) {
    pixelData[i] = rgb(255,0,0);
  }

  ws281x.render(pixelData);
}
