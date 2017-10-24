//------------Variables------------

//Creating variables to store email data
var from,to,subject,text;

//Function for smooth scrolling functions
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
        $('html, body').animate({
          scrollTop: $(hash).offset().top -125
        }, 800, function(){
     
        });
      }; // End if
    });
  });

//add click listener
$("#send_email").click(function() {
	
	//Populating variables from user input
	from=$("#from").val();
	subject=$("#subject").val();
	text=$("#content").val();
	$("#from").val("");
	$("#subject").val("");
	$("#content").val("");
	
	//
	$.get("/send", {from:from,subject:subject,text:text}, function(data) {
		if(data=="sent")
	{
		$('#myModal').modal(options)
	}
	})
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