$(document).ready(function() {


// $('#introFestival').hover(viewMore);

// function viewMore() {
// 	$('#introFestival').css('-webkit-filter','grayscale(100%)')
// 	$('.learnMore #hide').removeClass('hide');

// }

	$('#introFestival').hover(viewFestival);
	$('#arts').hover(viewArts);
	$('#music').hover(viewMusic);
	$('#queen').hover(viewQueen);
	$('#conservation').hover(viewConservation);
	$('#camping').hover(viewCamping);


	function viewFestival() {

		$('#introText').toggleClass('hide');
		}

	function viewArts() {

		$('#artsText').toggleClass('hide');
		}

	function viewMusic() {

		$('#musicText').toggleClass('hide');
		}

	function viewQueen() {

		$('#queenText').toggleClass('hide');
		}


	function viewCamping() {

		$('#campingText').toggleClass('hide');
		}

	function viewConservation() {

		$('#conservationText').toggleClass('hide');
		}






	$('#registrationForm').submit(processForm);

	function processForm(event) {
		event.preventDefault();

		var firstname = $('input[name="firstname"]').val();
		var lastname = $('input[name="lastname"]').val();
		var emailAddress = $('input[name="emailAddress"]').val();
		var zipcode = $('input[name="zipcode"]').val();
		var numberOfReasons = $('input[name="reasons"]:checked').length;

		// 1.
		if (firstname === '') {
			$('#errorMessage')
				.html('Please enter a first name')
				.removeClass('hide');
		// 2. 
		} else if (lastname === '') {
			$('#errorMessage')
				.html('Please enter a last name')
				.removeClass('hide');
		// 3. 
		} else if (emailAddress.indexOf('@') === -1) {
			$('#errorMessage')
				.html('Please provide a valid email address')
				.removeClass('hide');
		// 4.
		} else if (zipcode === '') {
			$('#errorMessage')
				.html('Please enter a zipcode')
				.removeClass('hide');
		// 5. 
		} else if (numberOfReasons < 1) {
			$('#errorMessage')
				.html('Please choose at least one reason')
				.removeClass('hide');
		// 6. 
		} else {
			$('#errorMessage').addClass('hide');

			$('#successMessage')
				.html('Congrats! You\'re in the Caravan!')
				.removeClass('hide');
		}

		$('#registrationForm').val('');
	}


/**
 * cbpFixedScrollLayout.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpFixedScrollLayout = (function() {

	// cache and initialize some values
	var config = {
		// the cbp-fbscroller´s sections
		$sections : $( '#scroller > section' ),
		// the navigation links
		$navlinks : $( '#scroller > nav:first > a' ),
		// index of current link / section
		currentLink : 0,
		// the body element
		$body : $( 'html, body' ),
		// the body animation speed
		animspeed : 650,
		// the body animation easing (jquery easing)
		animeasing : 'easeInOutExpo'
	};

	function init() {

		// click on a navigation link: the body is scrolled to the position of the respective section
		config.$navlinks.on( 'click', function() {
			scrollAnim( config.$sections.eq( $( this ).index() ).offset().top );
			return false;
		} );

		// 2 waypoints defined:
		// First one when we scroll down: the current navigation link gets updated. 
		// A `new section´ is reached when it occupies more than 70% of the viewport
		// Second one when we scroll up: the current navigation link gets updated. 
		// A `new section´ is reached when it occupies more than 70% of the viewport
		config.$sections.waypoint( function( direction ) {
			if( direction === 'down' ) { changeNav( $( this ) ); }
		}, { offset: '30%' } ).waypoint( function( direction ) {
			if( direction === 'up' ) { changeNav( $( this ) ); }
		}, { offset: '-30%' } );

		// on window resize: the body is scrolled to the position of the current section
		$( window ).on( 'debouncedresize', function() {
			scrollAnim( config.$sections.eq( config.currentLink ).offset().top );
		} );
		
	}

	// update the current navigation link
	function changeNav( $section ) {
		config.$navlinks.eq( config.currentLink ).removeClass( 'current' );
		config.currentLink = $section.index( 'section' );
		config.$navlinks.eq( config.currentLink ).addClass( 'current' );
	}

	// function to scroll / animate the body
	function scrollAnim( top ) {
		config.$body.stop().animate( { scrollTop : top }, config.animspeed, config.animeasing );
	}

	return { init : init };

})();


});