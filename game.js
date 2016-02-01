function init(){
	var touchzone = document.getElementById("#mycanvas");
	touchzone = addEventListener("touchstart", draw, false);
}

function draw(event){
	var canvas = document.getElementById("#mycanvas");
	if(canvas.getContext){
		var ctx = canvas.getContext("2d");
		ctx.fillRect(event.touches[0].clientX, event.touches[0].clientY, 5, 5)

	}
}