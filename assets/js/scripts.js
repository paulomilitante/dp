$(document).ready(function(){

	$('.links li').hover(function(){
		$(this).toggleClass('animated pulse hovered');
	});

  $('.my-links a').hover(function(){
    $(this).toggleClass('animated tada hovered');
  });

	$('.logo').hover(function(){
		$(this).toggleClass('animated swing')
	});

// CAROUSEL -----------------------------------------------------------

  setTimeout(function(){ 

    $('.tech').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    });

  },3000)
  

// TYPEWRITER - LOADER -----------------------------------------------------------

  var loading = document.getElementById('loading');

  var loadtype = new Typewriter(loading, {
      loop: true
  });

  loadtype.typeString('loading . . .')
    .pauseFor(2500)
    .deleteAll()
    .start();    

// LOADER - ANIMATION -----------------------------------------------------------

  $('#loader img').toggleClass('animated swing infinite slower');

  setTimeout(function(){
    $('.container').css("display","block");
    $('#loader').toggleClass('animated bounceOutRight slow');
    $('.container nav').toggleClass('animated bounceInLeft slow');
    $('.logo').toggleClass('animated swing slower delay-1s');
    $('.container main').toggleClass('animated bounceInRight slow');
    $('.container footer').toggleClass('animated bounceInUp slow');


    // TYPEWRITER - LANDING

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

  },3000);

  setTimeout(function(){
    $('.logo').toggleClass('animated swing slower delay-1s');
  },7500);

});