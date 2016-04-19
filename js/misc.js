$( document ).ready(function() {


	$('#drawer-button').click(function(){
		
		this.classList.toggle( "active" );
		$('#drawer').slideToggle('slow');

	});

	$('.screen-side').click(function(){
		$('#drawer-button').removeClass( "active" );
		$('#drawer').slideToggle('slow');
	});

  //   $('.drawer-side').children().click(function(){
		// $('#drawer-button').removeClass( "active" );
		// $('#drawer').slideToggle('fast');    	
  //   });



// $(window).on("scroll", function() {
//     if($(window).scrollTop() > 50) {
//         $("#drawer-button").css("outline",'5px solid #8E24AA');
//         $("#drawer-button").css("background",'#8E24AA');
        
//     } else {
//         $("#drawer-button").css("outline",'none');
        
        
//     }
// });


});