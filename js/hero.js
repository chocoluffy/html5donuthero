var heros = [];
var HEROS_NUMBER = 2;


function Hero(){
    this.x=random(0, canvas.width - HERO_WIDTH/2);
    this.y=0 + HERO_HEIGHT/2;
    this.angle=0;
    this.speed=2;
}

Hero.prototype.draw = function(){
    context.beginPath()
	context.arc(this.x,this.y,5,0,Math.PI*2, false); // outer (filled)
	context.arc(this.x,this.y,2,0,Math.PI*2, true); // outer (unfills it)
	context.fill();
}


Hero.prototype.update = function(index){
	var minindex = 0;
	var min = 1000;
	for(count=0; count<donuts.length; count++){
		if(distance(this, donuts[count])<min){
			min = distance(this, donuts[count]);
			minindex = count;
		}
	}

	if(donuts.length>0){
		this.angle = Math.abs(donuts[minindex].x - this.x)/distance(this, donuts[minindex]);
		var targetX = donuts[minindex].x;
		var targetY = donuts[minindex].y;
		var legX = this.speed * this.angle;
		if(targetX>this.x && targetY>this.y){
			this.y += triangle(this.speed, legX);
			this.x += legX;
		}
		else if(targetX<this.x && targetY>this.y){
			this.y += triangle(this.speed, legX);
			this.x -= legX;
		}
		else if(targetX>this.x && targetY<this.y){
			this.y -= triangle(this.speed, legX);
			this.x += legX;
		}
		else{
			this.y -= triangle(this.speed, legX);
			this.x -= legX;
		}
	}
	else{
		gameOver = true;
	}

}

function createHeros() {
    // increase the particle count for a bigger explosion, beware of the canvas performance hit with the increased particles though
    var heroCount = HEROS_NUMBER;
    var realCounter = 0;
    var distanceFlag = true;
    while( realCounter < heroCount ) {
        var hero = new Hero();
        var distanceFlag = true;
        var heroLength = heros.length;
        for(d=0; d<heroLength; d++){
            if(distance(hero, heros[d])<400){distanceFlag = false;}
        }
        if(distanceFlag){
            heros.push(hero);
            realCounter += 1;
        }
    }
}






