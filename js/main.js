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


let burger = document.getElementById('burger'),
	  nav    = document.getElementById('mobile-nav'),
	  slowmo = document.getElementById('slowmo');
    body = document.getElementById('body');

$('.nav__link').on('click', function(event){
  $('#body').removeClass('no-scroll');
  $('.mobile-nav').removeClass('is-open');
  $('.open__mobile').removeClass('is-open');
});    

burger.addEventListener('click', function(e){
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});

burger.addEventListener('click', function(e){
	body.classList.toggle('no-scroll');
});

slowmo.addEventListener('click', function(e){
	this.classList.toggle('is-slowmo');
});

burger.addEventListener('click', function(e){
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');
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

