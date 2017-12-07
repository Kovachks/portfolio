//------------Variables------------

//Creating variables to store email data
var from,to,subject,text;

//Creating variable to measure the window height
var winHeight = $(window).height();

var winWidth = $(window).width();

//-------------Functions------------


function isTouchDevice() {
  return 'ontouchstart' in document.documentElement;
}

$(document).ready(function() {

  //If the window is touch screen 
  if (isTouchDevice()) {
    
    //Resizing the mobile screen on page load
    resizeDivMobile();
    namePositionMobile();
    removeNav();

    //Resizing the mobile screen on window resize
    window.onresize = function() {
      resizeDivMobile();
      namePositionMobile();
    }
  }
  else {

    //Running functions on page load for desktop
    resizeDivDesktop();
    namePositionDesktop();
    smoothScrolling();
    navFix();
    navDecorate();

    //Runs resizeDiv function on window resize
    window.onresize = function() {
      resizeDivDesktop();
      namePositionDesktop();
    };
  }
});


//------------------------------------Functions----------------------------------------

function removeNav() {
  $(".nav").css({"display": "none"})
  $(".bottomBorderHidden").css({"display": "none"})
  $(".profilePicMax").css({"border-width": "6px"})
}

function namePositionDesktop() {
  var picturePosition = $('.profilePicMax').offset();
  var pictureHeight = $('.profilePicMax').height();
  vph = $(window).height();
  $(".name").css({'top': (picturePosition.top - (vph*.1)) + 'px'})
  $(".jobTitle").css({'top': ((pictureHeight * .2 -150)) + 'px'})
}

function namePositionMobile() {
  var picturePosition = $('.profilePicMax').offset();
  var pictureHeight = $('.profilePicMax').height();
  $(".name").css({'top': (picturePosition.top - (vph*.1)) + 'px'})
  $(".jobTitle").css({'top': ((pictureHeight * .1 -300 )) + 'px'})
}

function resizeDivDesktop() {
  vpw = $(window).width();
  vph = $(window).height();
  $("#headerSection").css({'height': (vph) + 'px'})
  $(".bottomBorder").css({'height': (vph * .4975 - 132)+ 'px'})
  $(".linkDiv").css({'height': 54 + 'px'})
  $(".linkDiv").css({'width': 154 + 'px'})
  $(".nameHeader").css({'height': (vph * .4975 - 30) + 'px'})
}

function resizeDivMobile() {
  vpw = $(window).width();
  vph = $(window).height();
  $("#headerSection").css({'height': (vph) + 'px'})
  $(".bottomBorder").css({'height': (vph * .4275) + 'px'})
  $(".bottomLinkBorder").css({'height': (vph * .07) + 'px'})
  $(".nameHeader").css({'height': (vph * .4975) + 'px'})
  $('.border').css({'height': (vph * .005) + 'px'})
  $('.thumbnailHeader').css({'height': (vph * .07) - 4 + 'px'})
  $('.thumbnailHeader').css({'width': (vph * .07) - 4 + 'px'})
  $('.linkDiv').css({'width': (vph * .21) + 14 + 'px'})
}

function smoothScrolling() {
  //Adding site specific JS for desktop experience
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
        scrollTop: $(hash).offset().top -84
      }, 1500);
    };
  });
}
//Functiion for scrolling and fixing the navbar and animation for the header

function navFix() {
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      //if user scrolls to the top of the hidden portion of the fixed elements
      if (scroll >= ($(window).height() - 25)) {

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
          $("#aboutMe").css({'margin-top': (winHeight * .1 + 130) + 'px'})
          };
  });
}
var currentWindow = $(window).scrollTop()
$(window).scroll(function() {
  console.log($("#skills").offset().top)
console.log(currentWindow)
})
  //Beginning of function to decorate nav links based on current element selection
function navDecorate() {
  $(window).scroll(function() {
    //Storing variable for current scroll position
    var currentWindow = $(window).scrollTop()

    //Beginning of if statement.  If current scroll position + 80px padding is greater than selected element
    //then the switch class will fire and nav links will be styled differently.
    if ((currentWindow + 110) > $("#contact").offset().top) {
      $("#contactLink").switchClass("navLink", "navLinkSelected")
      $("#projectsLink").switchClass("navLinkSelected", "navLink")
    }
    
    else if ((currentWindow + 110) > $("#projects").offset().top) {
        $("#projectsLink").switchClass("navLink","navLinkSelected")
        $("#contactLink").switchClass("navLinkSelected", "navLink")
        $("#skillsLink").switchClass("navLinkSelected", "navLink")  
    }

    else if ((currentWindow + 110) > $("#skills").offset().top) {
      $("#skillsLink").switchClass("navLink","navLinkSelected")
      $("#projectsLink").switchClass("navLinkSelected", "navLink")
      $("#aboutMeLink").switchClass("navLinkSelected", "navLink")
  }
    
    else if ((currentWindow + 110) > $("#aboutMe").offset().top) {
      $("#aboutMeLink").switchClass("navLink", "navLinkSelected")
      $("#homeLink").switchClass("navLinkSelected", "navLink")    
      $("#skillsLink").switchClass("navLinkSelected", "navLink")  
    }
    
    else if (currentWindow < $("#aboutMe").offset().top) {
      $("#homeLink").switchClass("navLink", "navLinkSelected")
      $("#aboutMeLink").switchClass("navLinkSelected", "navLink")
    }
  })
};
console.log(currentWindow)

//-----------------------------------Global Functions---------------------------------------

//add click listener
$("#send_email").click(function() {
	
	//Populating variables from user input
	from=$("#from").val();
	name=$("#name").val();
	text=$("#content").val();

	//Clearing entered values after submission
	$("#from").val("");
	$("#name").val("");
	$("#content").val("");
	
	if (from  !== "") {
		$.get("/send", {from:from,name:name,text:text}, function(data) {
			if(data=="sent")
			{
				//Triggering model after successful submission
				alert("Message has been sent.  I will respond as soon as possible!")
			}
		})
	} else {
		alert("Email is required to send message.  Thanks!")
	}
});