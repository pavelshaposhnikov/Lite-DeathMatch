// Import HTML template
$(function(){
  $("#included__header").load("template/header.html");
  $("#included__footer").load("template/footer.html");
});

var c4 = $('.counter');

c4.circleProgress({
  startAngle: -Math.PI / 4 * 3,
  value: 0.8,
  lineCap: 'round',
  fill: {color: '#EC2121'},
  emptyFill: "#FBD3D3",
  size: 84,
  thickness: 10,
  startAngle: 0
});

var c4 = $('.counter-empty');

c4.circleProgress({
  startAngle: -Math.PI / 4 * 3,
  value: 0,
  lineCap: 'round',
  fill: {color: '#EC2121'},
  emptyFill: "#FBD3D3",
  size: 84,
  thickness: 10,
  startAngle: 0
});

$(function() {
    // copy content to clipboard
    function copyToClipboard(element) {
      var $temp = $("<input>");
      $("body").append($temp);
      $temp.val($(element).text()).select();
      document.execCommand("copy");
      $temp.remove();
    }
  
    // copy coupone code to clipboard
    $(".adress-btn").on("click", function() {
      copyToClipboard("#adress-field");
      $(".coupon-alert").fadeIn("slow");
    });
  });

  
/* Smooth Scroll */
$("[data-scroll]").on("click", function(event) {
  event.preventDefault();
      
    let elementId = $(this).data(`scroll`);
    let elementOffset = $(elementId).offset().top;
              
$("html, body").animate({
  scrollTop: elementOffset - -100
  }, 600);
});  

/* Onload demo - dirty timeout */
let clickEvent = new Event('click');

window.addEventListener('load', function(e) {
	slowmo.dispatchEvent(clickEvent);
	burger.dispatchEvent(clickEvent);
	
	setTimeout(function(){
		burger.dispatchEvent(clickEvent);
		
		setTimeout(function(){
			slowmo.dispatchEvent(clickEvent);
		}, 3500);
	}, 5500);
});

