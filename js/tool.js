function random( min, max ) {
    return Math.random() * ( max - min ) + min;
}

function distance(obj1, obj2){
	var a = obj1.x - obj2.x;
	var b = obj1.y - obj2.y;
	return Math.sqrt(a*a + b*b); 
}

function triangle(diagonal, leg){
	return Math.sqrt(diagonal*diagonal - leg*leg);
}

var throttle= function(fn, interval){
	var _self=fn,
		timer,
		firstTime=true;
	return function(){
		var _me=this,
			args=arguments;
		if(firstTime){
			_self.apply(_me, args);
			return firstTime=false;
		}
		if(timer){
			return false;
		}
		timer=setTimeout(function(){
			clearTimeout(timer);
			timer=null;
			_self.apply(_me, args);
		},interval||500);
	}
}