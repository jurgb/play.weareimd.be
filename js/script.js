(function() {

	var gameCanvas = document.getElementById("game");
	var game = gameCanvas.getContext("2d");
	var gameBorder = gameCanvas.getBoundingClientRect();

	var backgroundCanvas = document.getElementById("bg");
	var background = backgroundCanvas.getContext("2d");
	var backgroundBorder = backgroundCanvas.getBoundingClientRect();

	var tile = 5;
	var Xoffset = 0;
	var Yoffset = 0;

	var img = new Image();
	img.src = "./images/Graph_plattegrond_big.jpg";
	img.onload = function() {
		background.drawImage(img, 0, 0, 3075, 1500);
	};

	var char = new Image();
	char.src= "./images/character.png";
	char.onload = function() {
		game.drawImage(char, (window.innerWidth/2)-75, (window.innerHeight/2)-127, 150, 254);
	};

    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
            backgroundCanvas.width = window.innerWidth;
            gameCanvas.width = window.innerWidth;
            backgroundCanvas.height = window.innerHeight;
            gameCanvas.height = window.innerHeight;
            render();
    }
    resizeCanvas();

    function render() {
            console.log('yay');
    }

	document.onkeydown = checkKey;
	document.onkeyup = stopMoving;

	function stopMoving() {
		verticaltile = 0;
		horizontaltile = 0;
		render();
	}

	function checkKey(e){
		e = e || window.event;

		if (e.keyCode == '38') {
			// up arrow
			Yoffset -= 5;
		}
		else if (e.keyCode == '40') {
			// down arrow
			Yoffset += 5;
		}
		else if (e.keyCode == '37') {
		   // left arrow
			Xoffset -= 5;
		}
		else if (e.keyCode == '39') {
		   // right arrow
			Xoffset += 5;
		}

		move();
	};

	function move() {
		background.clearRect ( 0 , 0 , backgroundCanvas.width, backgroundCanvas.height );
		background.drawImage(img, (0 - (Xoffset*tile)), (0 - (Yoffset*tile)), 3075, 1500);
	}
})();
