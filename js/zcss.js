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
		$('#drawer').slideToggle(300);

	});

	$('.screen-side').click(function(){
		$('#drawer-button').removeClass( "active" );
		$('#drawer').slideToggle(300);
	});

    $('.drawer-side a').click(function(){
    	console.log("Hello");
		$('#drawer-button').removeClass( "active" );
		$('#drawer').slideToggle(300);    	
    });



$(window).on("scroll", function() {
    if($(window).scrollTop() > 100) {
        // $("#drawer-button").css("outline",'5px solid #8E24AA');
        // $("#drawer-button").css("background",'#8E24AA');
        $("#header").fadeOut(500);

    } else {
    	$("#header").fadeIn(500);
        // $("#drawer-button").css("outline",'none');
        
        
    }
});

$('.bxslider').bxSlider({
	// infiniteLoop: true,
	// mode: 'horizontal', //mode: 'fade',  
    speed: 500,
    pause: 500,
    auto: true,
    pager: false
});








	


	// data-title="Code For FoCo Openhouse"
	// data-date="5/20/2016"
	// data-startTime="9:00AM"
	// data-endTime="12:00PM"
	// data-desc="Do you need visual outreach for your idea, but don't have the financial well being? Code For Fort Collins is reaching out to the community. Stop by and get to know us. Let us show you how we can help bring your ideas to life."
	// data-img="../assets/slideshow/image-a.jpg"
	// data-link="event.html"


function setupEvents(){
	var children = $(".events-data").children();
	var myContainer = $('.events-container');

	if(children.length > 0){
		



		for(var i = 0; i <= children.length-1; i++){
			var data = children[i].dataset;

			//Make new card
			var newLink = document.createElement('a');
			newLink.href = data.link;
			newLink.className = 'card-link';


			var newCard = document.createElement('div');
            newCard.className = 'card card-big';
            
            //Make image
            var newImg = document.createElement('img');
            newImg.src = data.img;
            newImg.alt = "Event Card";
            	//Append image
            	newCard.appendChild(newImg);


            //Make header
            var newHeader = document.createElement('div');
            newHeader.className = "header";
            var newH4 = document.createElement('h4');
            newH4.innerHTML = data.title;
            	//Append h4 to header
            	newHeader.appendChild(newH4);
            		//Append header to card
            		newCard.appendChild(newHeader);

            //Make Description
            var newDesc = document.createElement('div');
            newDesc.className = 'description';
            var newP = document.createElement('p');
            newP.innerHTML = data.desc;
            	//Append p to description
            	newDesc.appendChild(newP);
            		//Append to card
            		newCard.appendChild(newDesc);

            //Make view event button
            var newViewEvent = document.createElement('div');
            newViewEvent.className = "view-event";
            var newH4 = document.createElement('h4');
            newH4.innerHTML = "Click to View Event";
            	//append h4 to event button
            	newViewEvent.appendChild(newH4);
            		//append to description
            		newDesc.appendChild(newViewEvent);


            //Make date-time
            var dateTime = document.createElement('div');
            dateTime.className = "date-time";
            
            //Make Date
            var dateH4 = document.createElement('h4');
            dateH4.innerHTML = data.date;
            dateH4.class="date";
            	//Append to date-time
            	dateTime.appendChild(dateH4);
            
            //Make start time
            var startTimeH4 = document.createElement('h4');
            startTimeH4.innerHTML = data.starttime;
            startTimeH4.class="time";
            	//Append to date-time
            	dateTime.appendChild(startTimeH4);
            
            //Make to
            var toH4 = document.createElement('h4');
            toH4.innerHTML = "to";
            toH4.class="time";
            	//Append to date-time
            	dateTime.appendChild(toH4);
            
            //Make end time
            var endTimeH4 = document.createElement('h4');
            endTimeH4.innerHTML = data.endtime;
            endTimeH4.class="time";
            	//Append to date-time
            	dateTime.appendChild(endTimeH4);


            	//Append dateTime to card
            	newCard.appendChild(dateTime);

            	//Append card to link
            	newLink.appendChild(newCard);

        	//Finally append it to container
        	myContainer.append(newLink);

		}//End for


		//Call this after we have setup all our cards
            $(".description").hide();

			var show = function() {
			    $(this).children(".description").slideDown(400);
			};
			var hide = function() {
			    $(this).children(".description").slideUp(400);
			};  

			$(".card").hover(show, hide); 


	}//End if
	

}

setupEvents();






});//END DOCUMENT ON READY






/* END OF FILE */




