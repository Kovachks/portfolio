$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top -125
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          // window.location.hash = hash;
        });
      }; // End if
    });
  });

//Functiion for scrolling and fixing the navbar and animation for the header
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 451) {
    $(".nav").addClass('navFixed');
    $(".bottomBorderHidden").addClass("bottomBorderFixed")
    $(".profilePicMin").switchClass("profilePicMin", "profilePicMinShown", 1000)
    $(".nameFixedMin").switchClass("nameFixedMin", "nameFixedMinShown", 1000)    
    $(".aboutMe").addClass("aboutMeMargin")
    }
    else {
        $(".nav").removeClass("navFixed")
        $(".bottomBorderHidden").removeClass("bottomBorderFixed")
        $(".profilePicMinShown").addClass("profilePicMin").removeClass("profilePicMinShown")
        $(".nameFixedMinShown").addClass("nameFixedMin").removeClass("nameFixedMinShown")
        $(".aboutMe").removeClass("aboutMeMargin")
    };
});