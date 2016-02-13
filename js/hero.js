var heros = [];
var HEROS_NUMBER = 3;


function Hero(){
    this.x=random(10, canvas.width - HERO_WIDTH/2 - 10);
    this.y=0 + HERO_HEIGHT/2;
    this.angle=0;
    this.speed=2;
}

Hero.prototype.draw = function(ctx){
      // layer1/Group
      ctx.save();
      ctx.save();
      ctx.shadowColor = "rgba(91, 67, 30, 0.35)";
      ctx.shadowOffsetX = 3.0;
      ctx.shadowOffsetY = 3.0;
      ctx.shadowBlur = 6.0;

      // layer1/Group/Group
      ctx.save();

      // layer1/Group/Group/Compound Path
      ctx.save();
      ctx.beginPath();

      var x = this.x
      var y = this.y

      // layer1/Group/Group/Compound Path/Path
      ctx.moveTo(x+34.6, y+25.6);
      ctx.bezierCurveTo(x+28.6, y+25.7, x+19.0, y+27.7, x+16.7, y+20.7);
      ctx.bezierCurveTo(x+16.7, y+20.7, x+17.5, y+15.6, x+15.7, y+13.1);
      ctx.bezierCurveTo(x+15.0, y+12.2, x+14.0, y+11.6, x+13.0, y+11.4);
      ctx.bezierCurveTo(x+13.1, y+10.7, x+13.4, y+9.8,  x+13.8, y+9.1);
      ctx.bezierCurveTo(x+14.5, y+9.3,  x+15.1, y+9.1,  x+15.5, y+8.6);
      ctx.bezierCurveTo(x+16.1, y+7.9,  x+16.0, y+6.9,  x+15.3, y+6.3);
      ctx.bezierCurveTo(x+14.6, y+5.8,  x+13.6, y+5.9,  x+13.0, y+6.6);
      ctx.bezierCurveTo(x+12.5, y+7.3,  x+12.6, y+8.3,  x+13.3, y+8.8);
      ctx.bezierCurveTo(x+13.3, y+8.8,  x+13.3, y+8.8,  x+13.3, y+8.8);
      ctx.bezierCurveTo(x+12.9, y+9.5,  x+12.6, y+10.3, x+12.4, y+11.3);
      ctx.bezierCurveTo(x+11.5, y+11.2, x+10.7, y+11.3, x+9.9,  y+11.6);
      ctx.bezierCurveTo(x+9.7,  y+10.4, x+9.3,  y+9.4,  x+8.8,  y+8.7);
      ctx.bezierCurveTo(x+8.8,  y+8.7,  x+8.8,  y+8.7,  x+8.8,  y+8.7);
      ctx.bezierCurveTo(x+9.4,  y+8.0,  x+9.3,  y+7.0,  x+8.6,  y+6.5);
      ctx.bezierCurveTo(x+7.9,  y+5.9,  x+6.9,  y+6.0,  x+6.3,  y+6.7);
      ctx.bezierCurveTo(x+5.8,  y+7.4,  x+5.9,  y+8.4,  x+6.6,  y+9.0);
      ctx.bezierCurveTo(x+7.1,  y+9.4,  x+7.8,  y+9.4,  x+8.4,  y+9.1);
      ctx.bezierCurveTo(x+8.9,  y+10.0, x+9.2,  y+11.0, x+9.4,  y+11.8);
      ctx.bezierCurveTo(x+8.9,  y+12.0, x+8.5,  y+12.2, x+8.2,  y+12.5);
      ctx.bezierCurveTo(x+6.4,  y+14.2, x+7.0,  y+17.6, x+8.9,  y+19.3);
      ctx.bezierCurveTo(x+10.8, y+21.0, x+10.8, y+24.0, x+10.8, y+26.1);
      ctx.bezierCurveTo(x+10.8, y+28.2, x+11.8, y+31.6, x+15.1, y+31.7);
      ctx.bezierCurveTo(x+18.5, y+31.9, x+20.0, y+30.8, x+21.3, y+30.7);
      ctx.bezierCurveTo(x+22.5, y+30.7, x+23.8, y+32.2, x+25.4, y+32.2);
      ctx.bezierCurveTo(x+26.9, y+32.2, x+27.8, y+31.2, x+29.1, y+31.0);
      ctx.bezierCurveTo(x+30.3, y+30.7, x+31.9, y+31.4, x+33.0, y+31.2);
      ctx.bezierCurveTo(x+34.2, y+31.1, x+34.4, y+29.3, x+35.2, y+28.9);
      ctx.bezierCurveTo(x+36.4, y+28.1, x+39.7, y+25.5, x+34.6, y+25.6);
      ctx.closePath();

      // layer1/Group/Group/Compound Path/Path
      ctx.moveTo(x+13.5,y+ 8.5);
      ctx.bezierCurveTo(x+13.1, y+8.2, x+13.0, y+7.6, x+13.3, y+7.1);
      ctx.bezierCurveTo(x+13.7, y+6.7, x+14.3, y+6.6, x+14.7, y+6.9);
      ctx.bezierCurveTo(x+15.2, y+7.3, x+15.3, y+7.9, x+14.9, y+8.4);
      ctx.bezierCurveTo(x+14.6, y+8.8, x+13.9, y+8.9, x+13.5, y+8.5);
      ctx.closePath();

      // layer1/Group/Group/Compound Path/Path
      ctx.moveTo(x+6.8, y+8.7);
      ctx.bezierCurveTo(x+6.4, y+8.3, x+6.3, y+7.7, x+6.6, y+7.2);
      ctx.bezierCurveTo(x+7.0, y+6.8, x+7.6, y+6.7, x+8.0, y+7.1);
      ctx.bezierCurveTo(x+8.5, y+7.4, x+8.6, y+8.0, x+8.2, y+8.5);
      ctx.bezierCurveTo(x+7.9, y+8.9, x+7.2, y+9.0, x+6.8, y+8.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(253, 186, 28)";
      ctx.fill();

      // layer1/Group/Group/Compound Path
      ctx.beginPath();

      // layer1/Group/Group/Compound Path/Path
      ctx.moveTo(x+8.2, y+8.5);
      ctx.bezierCurveTo(x+8.6, y+8.0, x+8.5, y+7.4, x+8.0, y+7.1);
      ctx.bezierCurveTo(x+7.6, y+6.7, x+7.0, y+6.8, x+6.6, y+7.2);
      ctx.bezierCurveTo(x+6.3, y+7.7, x+6.4, y+8.3, x+6.8, y+8.7);
      ctx.bezierCurveTo(x+7.2, y+9.0, x+7.9, y+8.9, x+8.2, y+8.5);
      ctx.closePath();

      // layer1/Group/Group/Compound Path/Path
      ctx.moveTo(x+7.0, y+8.3);
      ctx.bezierCurveTo(x+6.8, y+8.1, x+6.7, y+7.8, x+6.9, y+7.5);
      ctx.bezierCurveTo(x+7.1, y+7.3, x+7.5, y+7.2, x+7.7, y+7.4);
      ctx.bezierCurveTo(x+8.0, y+7.6, x+8.0, y+8.0, x+7.8, y+8.2);
      ctx.bezierCurveTo(x+7.6, y+8.5, x+7.3, y+8.5, x+7.0, y+8.3);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(x+7.8, y+8.2);
      ctx.bezierCurveTo(x+8.0, y+8.0, x+8.0, y+7.6, x+7.7, y+7.4);
      ctx.bezierCurveTo(x+7.5, y+7.2, x+7.1, y+7.3, x+6.9, y+7.5);
      ctx.bezierCurveTo(x+6.7, y+7.8, x+6.8, y+8.1, x+7.0, y+8.3);
      ctx.bezierCurveTo(x+7.3, y+8.5, x+7.6, y+8.5, x+7.8, y+8.2);
      ctx.closePath();
      ctx.fillStyle = "rgb(59, 41, 35)";
      ctx.fill();

      // layer1/Group/Group/Compound Path
      ctx.beginPath();

      // layer1/Group/Group/Compound Path/Path
      ctx.moveTo(x+14.9,y+ 8.4);
      ctx.bezierCurveTo(x+15.3, y+7.9, x+15.2, y+7.3, x+14.7, y+6.9);
      ctx.bezierCurveTo(x+14.3, y+6.6, x+13.7, y+6.7, x+13.3, y+7.1);
      ctx.bezierCurveTo(x+13.0, y+7.6, x+13.1, y+8.2, x+13.5, y+8.5);
      ctx.bezierCurveTo(x+13.9, y+8.9, x+14.6, y+8.8, x+14.9, y+8.4);
      ctx.closePath();

      // layer1/Group/Group/Compound Path/Path
      ctx.moveTo(x+13.7,y+ 7.5);
      ctx.bezierCurveTo(x+13.9, y+7.2, x+14.3, y+7.2, x+14.6, y+7.4);
      ctx.bezierCurveTo(x+14.9, y+7.6, x+14.9, y+8.0, x+14.7, y+8.3);
      ctx.bezierCurveTo(x+14.5, y+8.6, x+14.1, y+8.6, x+13.8, y+8.4);
      ctx.bezierCurveTo(x+13.5, y+8.2, x+13.5, y+7.8, x+13.7, y+7.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(x+14.7,y+ 8.3);
      ctx.bezierCurveTo(x+14.9, y+8.0, x+14.9, y+7.6, x+14.6, y+7.4);
      ctx.bezierCurveTo(x+14.3, y+7.2, x+13.9, y+7.2, x+13.7, y+7.5);
      ctx.bezierCurveTo(x+13.5, y+7.8, x+13.5, y+8.2, x+13.8, y+8.4);
      ctx.bezierCurveTo(x+14.1, y+8.6, x+14.5, y+8.6, x+14.7, y+8.3);
      ctx.closePath();
      ctx.fillStyle = "rgb(59, 41, 35)";
      ctx.fill();

      // layer1/Group/Path
      ctx.restore();
      ctx.beginPath();
      ctx.moveTo(x+29.2,y+ 21.7);
      ctx.bezierCurveTo(x+29.1, y+20.8, x+28.3, y+20.1, x+27.4, y+20.2);
      ctx.bezierCurveTo(x+26.3, y+20.3, x+25.5, y+21.3, x+25.6, y+22.4);
      ctx.bezierCurveTo(x+25.7, y+23.8, x+26.9, y+24.8, x+28.3, y+24.7);
      ctx.bezierCurveTo(x+30.1, y+24.5, x+31.4, y+23.0, x+31.2, y+21.2);
      ctx.bezierCurveTo(x+31.0, y+19.1, x+29.0, y+17.5, x+26.9, y+17.7);
      ctx.bezierCurveTo(x+24.2, y+17.9, x+22.2, y+20.4, x+22.4, y+23.1);
      ctx.bezierCurveTo(x+22.8, y+26.5, x+25.8, y+29.0, x+29.2, y+28.6);
      ctx.bezierCurveTo(x+33.4, y+28.2, x+36.5, y+24.5, x+36.1, y+20.2);
      ctx.bezierCurveTo(x+35.6, y+14.9, x+30.9, y+11.0, x+25.6, y+11.5);
      ctx.bezierCurveTo(x+18.9, y+12.2, x+14.4, y+18.0, x+14.7, y+24.7);
      ctx.bezierCurveTo(x+14.9, y+27.6, x+20.2, y+28.0, x+25.8, y+28.0);
      ctx.fillStyle = "rgb(239, 74, 56)";
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(x+14.7,y+ 24.7);
      ctx.bezierCurveTo(x+14.9, y+27.6, x+20.2, y+28.0, x+25.8, y+28.0);
      ctx.lineWidth = 5.1;
      ctx.strokeStyle = "rgb(188, 56, 38)";
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(x+29.2,y+ 21.7);
      ctx.bezierCurveTo(x+29.1, y+20.8, x+28.3, y+20.1, x+27.4, y+20.2);
      ctx.bezierCurveTo(x+26.3, y+20.3, x+25.5, y+21.3, x+25.6, y+22.4);
      ctx.bezierCurveTo(x+25.7, y+23.8, x+26.9, y+24.8, x+28.3, y+24.7);
      ctx.bezierCurveTo(x+30.1, y+24.5, x+31.4, y+23.0, x+31.2, y+21.2);
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(x+26.7,y+ 17.7);
      ctx.bezierCurveTo(x+24.0, y+17.9, x+22.0, y+20.4, x+22.3, y+23.1);
      ctx.bezierCurveTo(x+22.6, y+26.5, x+25.6, y+29.0, x+29.0, y+28.6);
      ctx.stroke();

      // layer1/Group/Group

      // layer1/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x+12.3,y+ 17.9);
      ctx.bezierCurveTo(x+11.7, y+17.9, x+11.3, y+17.6, x+11.0, y+17.3);
      ctx.bezierCurveTo(x+10.9, y+17.1, x+10.8, y+17.0, x+10.7, y+17.0);
      ctx.bezierCurveTo(x+10.6, y+17.0, x+10.5, y+17.1, x+10.3, y+17.3);
      ctx.bezierCurveTo(x+10.1, y+17.6, x+9.8,  y+18.1, x+9.0,  y+17.9);
      ctx.bezierCurveTo(x+8.6,  y+17.8, x+8.4,  y+17.6, x+8.2,  y+17.4);
      ctx.bezierCurveTo(x+8.0,  y+16.9, x+8.2,  y+16.3, x+8.3,  y+16.2);
      ctx.bezierCurveTo(x+8.3,  y+16.1, x+8.4,  y+16.1, x+8.5,  y+16.1);
      ctx.bezierCurveTo(x+8.6,  y+16.2, x+8.7,  y+16.3, x+8.6,  y+16.4);
      ctx.bezierCurveTo(x+8.6,  y+16.4, x+8.4,  y+16.9, x+8.6,  y+17.2);
      ctx.bezierCurveTo(x+8.7,  y+17.3, x+8.8,  y+17.4, x+9.1,  y+17.5);
      ctx.bezierCurveTo(x+9.6,  y+17.6, x+9.8,  y+17.4, x+10.0, y+17.1);
      ctx.bezierCurveTo(x+10.2, y+16.9, x+10.3, y+16.6, x+10.6, y+16.6);
      ctx.bezierCurveTo(x+10.9, y+16.6, x+11.1, y+16.8, x+11.3, y+17.0);
      ctx.bezierCurveTo(x+11.6, y+17.3, x+11.9, y+17.6, x+12.5, y+17.5);
      ctx.bezierCurveTo(x+12.7, y+17.5, x+12.9, y+17.4, x+13.0, y+17.3);
      ctx.bezierCurveTo(x+13.3, y+16.9, x+13.2, y+16.4, x+13.2, y+16.2);
      ctx.bezierCurveTo(x+13.2, y+16.1, x+13.3, y+16.0, x+13.4, y+16.0);
      ctx.bezierCurveTo(x+13.5, y+15.9, x+13.6, y+16.0, x+13.6, y+16.1);
      ctx.bezierCurveTo(x+13.6, y+16.2, x+13.7, y+17.0, x+13.3, y+17.5);
      ctx.bezierCurveTo(x+13.1, y+17.7, x+12.9, y+17.9, x+12.5, y+17.9);
      ctx.bezierCurveTo(x+12.5, y+17.9, x+12.4, y+17.9, x+12.3, y+17.9);
      ctx.closePath();
      ctx.fillStyle = "rgb(226, 165, 36)";
      ctx.fill();
      ctx.restore();
      ctx.restore();
      ctx.restore();
      ctx.restore();
    //    context.beginPath()
	// context.arc(this.x,this.y,5,0,Math.PI*2, false); // outer (filled)
	// context.arc(this.x,this.y,2,0,Math.PI*2, true); // outer (unfills it)
	// context.fill();
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






