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
     
        });
      }; // End if
    });
  });

//Functiion for scrolling and fixing the navbar and animation for the header
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    //if user scrolls to the top of the hidden portion of the fixed elements
    if (scroll >= 451) {

    //then fix the navbar
    $(".nav").addClass('navFixed');

    //instantly display fixed nav bar
    $(".bottomBorderHidden").addClass("bottomBorderFixed")

    //1 second animation for smaller portrait
    $(".profilePicMin").switchClass("profilePicMin", "profilePicMinShown", 1000)

    //1 second animation for fixed name
    $(".nameFixedMin").switchClass("nameFixedMin", "nameFixedMinShown", 1000)
    
    //Section to give some margin for the newly displayed fixed divs
    $("#aboutMe").addClass("aboutMeMargin")
    }
    else {
      
        //Otherwise restore to default
        $(".nav").removeClass("navFixed")
        $(".bottomBorderHidden").removeClass("bottomBorderFixed")
        $(".profilePicMinShown").addClass("profilePicMin").removeClass("profilePicMinShown")
        $(".nameFixedMinShown").addClass("nameFixedMin").removeClass("nameFixedMinShown")
        $("#aboutMe").removeClass("aboutMeMargin")
    };
});