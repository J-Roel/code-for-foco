$(function() {
          $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000);
                return false;
              }
            }
        });
    });

  setTimeout( function(){
    $('#main-menu').attr('checked','true');
       },3000);



$( document ).ready(function() {


	$('#drawer-button').click(function(){
		this.classList.toggle( "active" );
		$('#drawer').slideToggle('fast');

	});

	$('.screen-side').click(function(){
		$('#drawer-button').removeClass( "active" );
		$('#drawer').slideToggle('fast');
	});

    $('.drawer-side a').click(function(){
    	console.log("Hello");
		$('#drawer-button').removeClass( "active" );
		$('#drawer').slideToggle('fast');    	
    });



// $(window).on("scroll", function() {
//     if($(window).scrollTop() > 50) {
//         $("#drawer-button").css("outline",'5px solid #8E24AA');
//         $("#drawer-button").css("background",'#8E24AA');
        
//     } else {
//         $("#drawer-button").css("outline",'none');
        
        
//     }
// });

$('.bxslider').bxSlider({
  auto: true,
  adaptiveHeight: true,
  // mode: fade,
  autoControls: false,

});





});











