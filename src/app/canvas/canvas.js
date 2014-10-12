angular.module('canvas', [])

.service('$color', [ function() {
	this.getRandom = function () {
		var color = "hsl(" + Math.random() * 255 + "," + 80 + "%," + 70 + "%)";
		return color;
	};
}])

.service('$canvas', ["$timeout", "$window", function($interval, $window) {
    this.fps = 60;
    this.fpsInterval = 1000 / this.fps;
    this.now = Date.now();
	this.elapsed = 0;
	this.then = Date.now();

	this.isRunning = false;

	this.setFps = function(fps) {
		this.fps = fps;
		this.fpsInterval = 1000 / this.fps;
	};

    this.requestAnimFrame = function()
	{
		return (
			$window.requestAnimationFrame       || 
			$window.webkitRequestAnimationFrame || 
			$window.mozRequestAnimationFrame    || 
			$window.oRequestAnimationFrame      || 
			$window.msRequestAnimationFrame     || 
			function(/* function */ callback){
				$timeout(callback, this.fpsInterval, false);
			}
		);
	};

    this.canvas = document.getElementById('canvas');
    if(!this.canvas)
    {
    	throw "No canvas with id=canvas found.";
    }
    this.ctx = this.canvas.getContext('2d');
	
    this.init = function () {
		var width = window.innerWidth;
	    var height = window.innerHeight ;
	    this.canvas.width = width;
	    this.canvas.height = height;
	    this.width = width;
	    this.height = height;
	    this.scale = 1;
	};

	this.clearScreen = function(color, alpha) {
		this.ctx.fillStyle = color || "#000000";
        this.ctx.globalAlpha = alpha || 1.00;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.globalAlpha  = 1.0;
    };

    this.update = function()
	{
	    var $this = this;
	    this.now = Date.now();
	    this.elapsed = this.now - this.then;

	    if(this.isRunning)
	    {
	    	if (this.elapsed > this.fpsInterval) {
	        	this.then = this.now - (this.elapsed % this.fpsInterval);
	        	this.updateFunc();
	    	}
	    	var requestId = this.requestAnimFrame()(function(){
	    		$this.update();
			});
		}
	};

    this.start = function(updateFunc) {
    	this.isRunning = true;
    	this.updateFunc = updateFunc;
	    this.update();
    };

	this.stop = function() {
		this.isRunning = false;
    };

    var $this = this;
	window.onresize = function() {
	   	$this.init();
   	};

    this.init();
}])
;