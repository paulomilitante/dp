$(document).ready(function(){

	$('.links li').hover(function(){
		$(this).toggleClass('animated pulse hovered');
	});

	$('.logo').hover(function(){
		$(this).toggleClass('animated swing')
	});

  $('#loader img').toggleClass('animated swing infinite slow');

  setTimeout(function(){
    $('#loader').toggleClass('animated fadeOutRight')
    $('.container').toggleClass('animated fadeInLeft')
    $('.logo').toggleClass('animated swing slow')

      // TYPEWRITER

  var app = document.getElementById('typewriter');

  var typewriter = new Typewriter(app, {
      loop: true
  });

  typewriter.typeString('I am a Full Stack Web Developer.')
    .pauseFor(2500)
    .deleteChars(25)
    .pauseFor(500)
    .typeString('problem-solver.')
    .pauseFor(2500)
    .deleteChars(15)
    .pauseFor(500)
    .typeString('dreamer.')
    .pauseFor(2500)
    .deleteAll()
    .start();

  },3000)

  var loading = document.getElementById('loading');

  var loadtype = new Typewriter(loading, {
      loop: true
  });

  loadtype.typeString('loading . . .')
    .pauseFor(2500)
    .deleteAll()
    .start();    

});