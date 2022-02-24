
    $(function(){

    $('#dialog_link, ul#icons li').hover(
     function() { $(this).addClass('ui-state-hover'); }, 
     function() { $(this).removeClass('ui-state-hover'); }
    );

    $('input').change(function() {
      validate();
    });
    $('input').keydown(function() {
      validate();
    });
    $('textarea').change(function() {
      validate();
    });
    $('textarea').keydown(function() {
      validate();
    });
   });

$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);


$(document).ready(function() {
    // all custom jQuery will go here
});

$(document).ready(function() {
    $("#demo").html("Hello, World!");
});

$(document).ready(function() {
    $("#trigger").click();
});

$(document).ready(function() {
    $("#trigger").click(function() {
    $("#demo").html("Hello, World!");
    });
});

$(document).ready(function() {
    $(".trigger").click(function() {
        $(".overlay").toggle();
    });
});

$(function(){
  $("#slides").slidesjs({
    width: 700,
    height: 393
  });
});

$(function(){
  $("#slides").slidesjs({
    start: 3
  });
});

$(function(){
  $("#slides").slidesjs({
    navigation: {
      active: true,
        // [boolean] Generates next and previous buttons.
        // You can set to false and use your own buttons.
        // User defined buttons must have the following:
        // previous button: class="slidesjs-previous slidesjs-navigation"
        // next button: class="slidesjs-next slidesjs-navigation"
      effect: "slide"
        // [string] Can be either "slide" or "fade".
    }
  });
});

$(function(){
  $("#slides").slidesjs({
    pagination: {
      active: true,
        // [boolean] Create pagination items.
        // You cannot use your own pagination. Sorry.
      effect: "slide"
        // [string] Can be either "slide" or "fade".
    }
  });
});

$(function(){
  $("#slides").slidesjs({
    play: {
      active: true,
        // [boolean] Generate the play and stop buttons.
        // You cannot use your own buttons. Sorry.
      effect: "slide",
        // [string] Can be either "slide" or "fade".
      interval: 5000,
        // [number] Time spent on each slide in milliseconds.
      auto: false,
        // [boolean] Start playing the slideshow on load.
      swap: true,
        // [boolean] show/hide stop and play buttons
      pauseOnHover: false,
        // [boolean] pause a playing slideshow on hover
      restartDelay: 2500
        // [number] restart delay on inactive slideshow
    }
  });
});

$(function(){
  $("#slides").slidesjs({
    effect: {
      slide: {
        // Slide effect settings.
        speed: 200
          // [number] Speed in milliseconds of the slide animation.
      },
      fade: {
        speed: 300,
          // [number] Speed in milliseconds of the fade animation.
        crossfade: true
          // [boolean] Cross-fade the transition.
      }
    }
  });
});

$(function(){
  $("#slides").slidesjs({
    callback: {
      loaded: function(number) {
        // Do something awesome!
        // Passes start slide number
      },
      start: function(number) {
        // Do something awesome!
        // Passes slide number at start of animation
      },
      complete: function(number) {
        // Do something awesome!
        // Passes slide number at end of animation
      }
    }
  });
});

