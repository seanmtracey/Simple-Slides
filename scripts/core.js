var __quickSlides = (function(){

	var slides = document.getElementsByClassName('slide'),
		position = 0,
		positionDisplay = document.getElementById('position');

	function hackSlideImages(){

		var yy = 0;

		while(yy < slides.length){

			var thisSlide = slides[yy],
				image = thisSlide.getElementsByTagName('img')[0];

			thisSlide.style.backgroundImage = 'url(' + image.getAttribute('src') + ')';

			image.parentNode.removeChild(image);

			yy += 1;

		}

	};

	function triggerSlide(slideNumber){

		var xx = 0;

		while(xx < slides.length){

			if(xx == position){

				slides[xx].style.display = "block";

			} else {

				slides[xx].style.display = "none";

			}

			xx += 1;

		}

		positionDisplay.innerHTML = (position + 1) + " / " + slides.length;

	}

	function addEvents(){

		document.body.addEventListener('click', function(){

			console.log("Click");

			if(position < slides.length - 1){
				position += 1;
			} else {
				position = 0;
			}

			triggerSlide(position);

		});

		window.addEventListener('keydown', function(e){

			console.log(e);

			if(e.keyCode === 70){
				fullScreen();
			}

			switch(e.keyCode){

				case 39:

					if(position < slides.length - 1){
						position += 1;
					} else {
						position = 0;
					}

					triggerSlide(position);

					break;

				case 37:

					if(position > 0){
						position -= 1;
					} else {
						position = slides.length - 1;
					}

					triggerSlide(position);

					break;

			}

		}, false);

	}


	function fullScreen(){

		var fullScreen = document.fullscreen || document.mozFullScreen || document.webkitIsFullScreen;

		console.log(fullScreen);
	
		if(document.body.requestFullscreen) {
			document.body.requestFullscreen();
		} else if(document.body.mozRequestFullScreen) {
			document.body.mozRequestFullScreen();
		} else if(document.body.webkitRequestFullscreen) {
			document.body.webkitRequestFullscreen();
		} else if(document.body.msRequestFullscreen) {
			document.body.msRequestFullscreen();
		}

	}

	function init(){
		

		hackSlideImages();
		addEvents();
		triggerSlide(0);


	}

	return{
		init : init
	};

})();

(function(){
	__quickSlides.init();
})();