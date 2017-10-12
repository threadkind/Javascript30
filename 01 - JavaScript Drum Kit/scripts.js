window.addEventListener('keydown', function(event){
	//when a key is pressed - get it's keycode
	var keyPress = event.keyCode;
	//get the classes for the divs and put them in an array
	var divClass = document.getElementsByTagName('div');
	//get the audio elements on the page
	 var audio = document.getElementsByTagName('audio');
	 console.log();

	//match the key code up to the class
for (var i = 0; i < divClass.length; i++){
	//loop thru the array to get the class name for each
	var classNumber = parseInt((divClass[i].className));
	//if the classNumber matches the keycode then play the corresponding sound 
	if(keyPress === classNumber){
		audio[i-1].currentTime = 0; //rewind to start
		audio[i-1].play(); 	
	//remove 'playing' class from all other elements and add the 'playing' class to the letter on the screen
	divClass[i].classList.add("playing");

	}
};
	function removeTransition(event){
		if(event.propertyName !== 'transform'){
			return;
		};
		this.classList.remove('playing');
	}

	var keys = document.querySelectorAll('.key');
	keys.forEach(key => key.addEventListener('transitionend', removeTransition));
});