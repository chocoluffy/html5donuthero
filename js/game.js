
var MONSTER_WIDTH=25;
var MONSTER_HEIGHT=25;
// Create the canvas
var canvas = document.createElement("canvas");
canvas.classList.add("canvas");
var context = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 600;
var DONUT_OUTER = 20;
var DONUT_INNER = 5;
var HERO_WIDTH = 5;
var HERO_HEIGHT = 5;
var BOX_RADIUS = 12;
var TAP_RADIUS = 27;

document.getElementById("wrapper").appendChild(canvas);
// document.body.appendChild(canvas);

// Background image
var bgImage = new Image();
bgImage.src = "images/cupcake_bg.png";

var monstersCaught = 0;
var timeRemained = 60;
var timeCount = 0;
var gameOver = false;
var gamePause = false;
var gameStart = false;


// Reset the game when the player catches a monster
var reset = function () {
};

var init= function(){
	// createHeros();
	createDonuts();

	var gamestartPlane = document.querySelector(".gamestart");
	var gamePauseBt = document.querySelector(".pause");
	var gameLevelOne = document.querySelector(".startpage");
	var gameOverDiv = document.querySelector(".gameover");
	gamePauseBt.classList.add('unseen');
	gameLevelOne.addEventListener('click', function(e){
		gamestartPlane.classList.add('unseen');
		gameLevelOne.classList.add('unseen');
		gameOverDiv.classList.add('unseen');
		gamePauseBt.classList.remove('unseen');
		gameStart = true;
		console.log("gameStart");
		e.preventDefault();
		return false;
	})
}



// Update game objects
var update = function (modifier) {


	var hcount = heros.length;
	var donutparticleCount = donuts.length;
	for(h=0; h<hcount; h++){
		for(count=0; count<donutparticleCount; count++){
			if(donuts[count].x <= (heros[h].x + MONSTER_WIDTH) 
				&& donuts[count].y <= (heros[h].y + MONSTER_HEIGHT)
				&& heros[h].x <= (donuts[count].x + MONSTER_WIDTH)
				&& heros[h].y <= (donuts[count].y + MONSTER_HEIGHT)
			){
				donuts[count].eaten = true;
				createParticles(heros[h].x, heros[h].y, true);
				++monstersCaught;
				reset();
			}
		}
	}

	// check if hero is within the range, if so remove them.
	var boxArr = document.querySelectorAll(".blob");
	var boxArrLen = boxArr.length;
	var deleteList = [];

	for(c=0; c<boxArrLen; c++){
		// console.log(boxArr[c].style.top);
		var boxCenterX = parseInt(boxArr[c].style.left) + BOX_RADIUS;
		var boxCenterY = parseInt(boxArr[c].style.top) + BOX_RADIUS;
		var distanceBoxToHero;
		for(h=0; h<hcount; h++){
			var x = boxCenterX - heros[h].x;
			var y = boxCenterY - heros[h].y;
			distanceBoxToHero = Math.sqrt(x*x + y*y);
			if(distanceBoxToHero < TAP_RADIUS){
				// heros.splice(h, 1);
				deleteList.push(h);
				console.log("bug is crushed");
				// console.log(deleteList);
			}
		}
	}

	var sortedList = deleteList.sort(function(a, b){return a-b;});
	for(i=sortedList.length-1; i>=0; i--){
		heros.splice(sortedList[i], 1);
	}

	// if heros array is empty, then gameover.
	if(heros.length==0){
		gameOver = true;
	}

};

// Draw everything
var render = function () {
	context.clearRect(0,0,canvas.width, canvas.height);
	context.drawImage(bgImage, 0, 0);

	var i = particles.length;
	while(i--){
		particles[i].draw();
		particles[i].update(i);
	}

	var h = heros.length;
	while(h--){
		heros[h].draw(context);
		heros[h].update();
	}

	var d = donuts.length;
	while(d--){
		donuts[d].draw();
		donuts[d].update(d);
	}

	// Score
	drawScore();
};

var drawScore = function(){
	context.fillStyle = "rgb(250, 250, 250)";
	context.font = "24px Helvetica";
	context.textAlign = "left";
	context.textBaseline = "top";
	context.fillText("Time remained: " + timeRemained, 32, 10);
	context.fillText("Donut eaten: " + monstersCaught, 32, 42);
}

// The main game loop
var main = function () {
	// console.log(gameStart);
	if(gameStart){
		if(!gameOver){
			if(!gamePause){
				update();
				render();
				hue +=0.5;
				if(timeCount%60==0){
					timeRemained--;
				}
				if(timeRemained<=0){
					gameOver = true;
				}
				timeCount++;
				if(timeCount>=9999){
					timeCount=0;
				}
			}
		}
		else{
			var gameText = document.querySelector(".gameover > div.text");
			if(heros.length==0){
				gameText.innerHTML = "You Win!!";
			}
			else{
				gameText.innerHTML = "Game Over";
			}
			var gamePlane = document.querySelector(".gameover");
			gamePlane.classList.add('seen');
			gamePlane.classList.remove('unseen');
		}
	}

	// normally, clearRect() would be used to clear the canvas
	// we want to create a trailing effect though
	// setting the composite operation to destination-out will allow us to clear the canvas at a specific opacity, rather than wiping it entirely
	// context.globalCompositeOperation = 'source-over';
	// decrease the alpha property to create more prominent trails
	// context.fillStyle = 'rgba(0, 0, 0, 0)';
	// context.fillRect( 0, 0, canvas.width, canvas.height );
	// change the composite operation back to our main mode
	// lighter creates bright highlight points as the fireworks and particles overlap each other
	// context.globalCompositeOperation = 'lighter';

	requestAnimationFrame(main);
};

setInterval(createHeros, 1000);

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
reset();
init();
main();
