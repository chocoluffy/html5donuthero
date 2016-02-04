(function(){
	var playIcon = document.querySelector(".bt");
	playIcon.classList.add('active');

	// Pause and resume game
	var clicked = false;
	playIcon.addEventListener('click', function(){ // need a single quote!!!!!!!
		if(!clicked){
			playIcon.classList.remove('active');
			gamePause = true;
		}
		else{
			playIcon.classList.add('active');
			gamePause = false;
		}
		clicked = !clicked;
		console.log("clicked!");
		return false;
	});

	//  click Back event
	var backBt = document.querySelector(".back");
	backBt.addEventListener('click', function(){
		gameStart = false;
		var gamestartPlane = document.querySelector(".gamestart");
		gamestartPlane.classList.remove('unseen');
		gamestartPlane.classList.add('seen');
		return false;
	});

	var canvas = document.querySelector(".canvas");
	canvas.addEventListener('click', function(e){
		var blob = document.createElement("div");
		blob.classList.add('blob');
		blob.style.top = e.pageY - BOX_RADIUS + 'px';
		blob.style.left = e.pageX - BOX_RADIUS + 'px';
		document.body.appendChild(blob);
		// console.log("canvas clicked!");
		setTimeout(function(){
			document.body.removeChild(blob);
		}, 3000);
		e.preventDefault();
		return false;
	})

})();








