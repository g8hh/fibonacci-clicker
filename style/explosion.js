var canvas;
var context2D;

var explosions = [];

function randomFloat(min, max) {
    return min + Math.random() * (max - min);
}

/*
 * A single explosion explosion
 */
function Particle() {
    this.scale = 1.0;
    this.x = 0;
    this.y = 0;
    this.radius = 20;
    this.color = "#000";
    this.velocityX = 0;
    this.velocityY = 0;
    this.scaleSpeed = 0.5;

    setTimeout(function () {
        explosions.splice(0, 1);
    }, 2000)
    this.update = function (ms) {
        // shrinking
        this.scale -= this.scaleSpeed * ms / 1000.0;

        if (this.scale <= 0) {
            this.scale = 0;
        }

        // moving away from explosion center
        this.x += this.velocityX * ms / 1000.0;
        this.y += this.velocityY * ms / 1000.0;
    };
    this.draw = function (context2D) {
        // translating the 2D context to the particle coordinates
        context2D.save();
        context2D.translate(this.x, this.y);
        context2D.scale(this.scale, this.scale);

        // drawing a filled circle in the particle's local space
        context2D.beginPath();
        context2D.arc(0, 0, this.radius, 0, Math.PI * 2, true);
        context2D.closePath();

        context2D.fillStyle = this.color;
        context2D.fill();

        context2D.restore();
    };
}


/*
 * Advanced Explosion effect
 * Each explosion has a different size, move speed and scale speed.
 *
 * Parameters:
 * 	x, y - explosion center
 * 	color - explosions' color
 */
function createExplosion(x, y, color, p) {
    
    var v = (Math.sqrt(basearea) + 1) * p; //tamanho do lado dum cubo com 1
    var minSize = Math.min(10, v * (1 / 3));
    var maxSize = Math.min(20, v * (2 / 3));
    var count = (Math.floor(Math.random() * 4) + 6);
    var minSpeed = Math.min(50,v * 5);
    var maxSpeed = Math.min(150,v * 10);
    var minScaleSpeed = 1.0;
    var maxScaleSpeed = 4.0;

    var angle = Math.random() * 360,
        times = 0;
    for (angle, times; times < count; times++, angle += Math.round(360 / count)) {
        var explosion = new Particle();

        explosion.x = x;
        explosion.y = y;

        explosion.radius = randomFloat(minSize, maxSize);
        explosion.color = color;

        explosion.scaleSpeed = randomFloat(minScaleSpeed, maxScaleSpeed);

        var speed = randomFloat(minSpeed, maxSpeed);

        explosion.velocityX = speed * Math.cos(angle * Math.PI / 180.0);
        explosion.velocityY = speed * Math.sin(angle * Math.PI / 180.0);

        explosions.push(explosion);
    }
}

function createSmallExplosion(x, y, color) {
    var minSize = 2;
    var maxSize = 6;
    var count = (Math.floor(Math.random() * 3) + 4);
    var minSpeed = 40.0;
    var maxSpeed = 80.0;
    var minScaleSpeed = 1.0;
    var maxScaleSpeed = 4.0;

    var angle = Math.random() * 360,
        times = 0;
    for (angle, times; times < count; times++, angle += Math.round(360 / count)) {
        var explosion = new Particle();

        explosion.x = x;
        explosion.y = y;

        explosion.radius = randomFloat(minSize, maxSize);

        explosion.color = color;

        explosion.scaleSpeed = randomFloat(minScaleSpeed, maxScaleSpeed);

        var speed = randomFloat(minSpeed, maxSpeed);

        explosion.velocityX = speed * Math.cos(angle * Math.PI / 180.0);
        explosion.velocityY = speed * Math.sin(angle * Math.PI / 180.0);

        explosions.push(explosion);
    }
}

function update(frameDelay) {
    // draw a white background to clear canvas
    context2D.fillStyle = backgroundColorCanvas;
    context2D.fillRect(0, 0, context2D.canvas.width, context2D.canvas.height);

    // update and draw explosions
    for (var i = 0; i < explosions.length; i++) {
        var explosion = explosions[i];
        explosion.update(frameDelay);
        explosion.draw(context2D);
    }
}


window.addEvent("load", function () {
    // canvas and 2D context initialization
    canvas = document.getElementById("myCanvas");
    context2D = canvas.getContext("2d");


    // starting the game loop at 60 frames per second
    var frameRate = 60.0;
    var frameDelay = 1000.0 / frameRate;

    setInterval(function () {
        update(frameDelay);

    }, frameDelay);
});
