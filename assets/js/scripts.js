$(document).ready(function(){

	$('.links li').hover(function(){
		$(this).toggleClass('animated pulse hovered');
	});

	$('.logo').hover(function(){
		$(this).toggleClass('animated swing')
	});


	// TYPEWRITER

	var app = document.getElementById('typewriter');

	var typewriter = new Typewriter(app, {
	    loop: true
	});

	typewriter.typeString('I am a Full Stack Web Developer.')
    .pauseFor(2500)
    .deleteChars(25)
    .typeString('problem-solver.')
    .pauseFor(2500)
    .deleteChars(15)
    .typeString('dreamer.')
    .pauseFor(2500)
    .deleteAll()
    .start();



});