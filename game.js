function init(){
	var touchzone = document.getElementById("mycanvas");
	touchzone = addEventListener("touchstart", function(e){
		var canvas = document.getElementById("mycanvas");
		console.log("touched!!");
		if(canvas.getContext){
			var ctx = canvas.getContext("2d");
			ctx.fillRect(e.touches[0].clientX, e.touches[0].clientY, 5, 5)
		}
	}, false);
}
