
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




  // $( window ).ready(function() {
  
  //   var wHeight = $(window).height();

  //   $('.slide')
  //     .height(wHeight)
  //     .scrollie({
  //       scrollOffset : -50,
  //       scrollingInView : function(elem) {
                   
  //         var bgColor = elem.data('background');
          
  //         $('body').css('background-color', bgColor);
          
  //       }
  //     });

  // });