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

	//DRAWER OPEN AND CLOSE FUNCTIONS
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


	//SCROLL FUNCTION TO MAKE HEADER DISAPPEAR
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








	


/*
	SETUP EVENTS 
	- Grabs the children in the events-data class and populates the
	events-container div with the information passed through the
	HTML5 Dataset
	- Helps to keep the index.html code cleaner
*/

//Below is test data and moch code for a event entry

	// data-title="Code For FoCo Openhouse"
	// data-date="5/20/2016"
	// data-startTime="9:00AM"
	// data-endTime="12:00PM"
	// data-desc="Do you need visual outreach for your idea, but don't have the financial well being? Code For Fort Collins is reaching out to the community. Stop by and get to know us. Let us show you how we can help bring your ideas to life."
	// data-info="242 Linden St. Fort Collins, CO | Pizza and beer will be provided."
	// data-img="../assets/slideshow/image-a.jpg"
	// data-link="event.html"

	// <!-- TEST -->
	 //    <a href="eventspage.html">
	 //    <div class="event slide-effect card row">
	 //        <div class="one-third">
	 //            <h4 class="date">5/20/2016</h4>
	 //            <h4 class="time">9:00AM</h4><h4 class="time">-</h4>
	 //            <h4 class="time">12:00PM</h4> 
	 //        </div>
	 //        <div class="two-third">
	 //          <div class="row">
	 //          <h4 class="title">Code For Fort Collins Openhouse</h4>
	 //          </div>
	 //          <div class="row">
	 //            <p>242 Linden St. Fort Collins, CO | Pizza will be served</p>
	 //          </div>
	 //        </div>
	 //    </div>
	 //    </a>	


function setupEvents(){
	var children = $(".events-data").children();
	var myContainer = $('.events-container');

	if(children.length > 0){

		for(var i = 0; i <= children.length-1; i++){
			var data = children[i].dataset;

			//Make new card link
			var newLink = document.createElement('a');
			newLink.href = data.link;
			
			//Make new card
			var newCard = document.createElement('div');
            newCard.className = 'event slide-effect card row';
            
        	//Setup column
        	var column = document.createElement('div');
        	column.className = 'one-third';
            
            //Make Date
            var dateH4 = document.createElement('h4');
            dateH4.className="date";
            dateH4.innerHTML = data.date;
            	//Append to date-time
            	column.appendChild(dateH4);
            
            //Make start time
            var startTimeH4 = document.createElement('h4');
            startTimeH4.innerHTML = data.starttime;
            startTimeH4.className="time";
            	//Append to date-time
            	column.appendChild(startTimeH4);
            
            //Make to
            var toH4 = document.createElement('h4');
            toH4.className="time";
            toH4.innerHTML = "-";
            
            	//Append to date-time
            	column.appendChild(toH4);
            
            //Make end time
            var endTimeH4 = document.createElement('h4');
            endTimeH4.innerHTML = data.endtime;
            endTimeH4.className="time";
            	//Append to date-time
            	column.appendChild(endTimeH4);

            	//Append to card
            	newCard.appendChild(column);

            	//Now do the title, info
            	//Setup column
        		var column = document.createElement('div');
        		column.className = 'two-third row';

        		//Make row
        		var row = document.createElement('div');
        		row.className = 'row';

        		//Make Title
            	var h4 = document.createElement('h4');
            	h4.className="title";
            	h4.innerHTML = data.title;
            		//Append to row
            		row.appendChild(h4);

            		//Append to column
            		column.appendChild(row);

            	//Make row
        		var row = document.createElement('div');
        		row.className = 'row';

        		//Make Title
            	var p = document.createElement('p');
            	p.innerHTML = data.info;
            		//Append to row
            		row.appendChild(p);

            		//Append to column
            		column.appendChild(row);

	            	//Append to card
	            	newCard.appendChild(column);

            	//Append card to link
            	newLink.appendChild(newCard);
	        	//Finally append it to container
	        	myContainer.append(newLink);

		}//End for

		//Call this after we have setup all our cards so methods work
            $(".description").hide();

			var show = function() {
			    $(this).children(".description").slideDown(400);
			};
			var hide = function() {
			    $(this).children(".description").slideUp(400);
			};  

			$(".card").hover(show, hide); 

	}//End if
}//End setup events
setupEvents();
//---------------------------------------------------------------------------





});//END DOCUMENT ON READY






/* END OF FILE */




