var donuts = [];
var DONUTS_NUMBER = 5;


function Donut(){
    this.x=random(0, canvas.width - cakeWidth/2);
    this.y=random(0.2 * canvas.height, canvas.height - cakeHeight/2);
    this.type=Math.floor(Math.random() * 5) + 1;
    this.eaten=false;
}



Donut.prototype.draw = function(){

    var cakeImage = new Image();
    cakeImage.src = "images/cake" + this.type + ".png";

    context.beginPath();
    context.drawImage(cakeImage, this.x, this.y, cakeWidth, cakeHeight);
    // context.arc(this.x,this.y,DONUT_OUTER,0,1.2 * Math.PI, false); // outer (filled)
    // context.arc(this.x,this.y,DONUT_INNER,1.2 * Math.PI,Math.PI*2, true); // outer (unfills it)
    // context.fill();
    context.closePath();
}

Donut.prototype.update = function(index){
    if(donuts[index].eaten==true){
        donuts.splice(index, 1);
    }
}

function createDonuts() {
    // increase the particle count for a bigger explosion, beware of the canvas performance hit with the increased particles though
    var donutCount = DONUTS_NUMBER;
    var realCounter = 0;
    while( realCounter < donutCount ) {
        var donut = new Donut();
        var distanceFlag = true;
        for(validDonut in donuts){
            if(distance(donut, validDonut)<10){distanceFlag = false;}
        }
        if(distanceFlag){
            donuts.push(donut);
            realCounter += 1;
        }
        // donuts.push( new Donut() );
    }
}






