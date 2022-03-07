/*
Author       : themes_mountain
Template Name: Appal - App Landing Page HTML Template
Version      : 1.0
*/
(function($) {
	'use strict';
	
	jQuery(document).on('ready', function(){
	
		/*PRELOADER JS*/
		$(window).on('load', function() {  
			$('.spinner').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		}); 
		/*END PRELOADER JS*/		
		
		/*START MENU JS*/		
		function windowScroll() {
			const navbar = document.getElementById("navbar");
			if (
				document.body.scrollTop >= 50 ||
				document.documentElement.scrollTop >= 50
			) {
				navbar.classList.add("nav-sticky");
			} else {
				navbar.classList.remove("nav-sticky");
			}
		}

		window.addEventListener('scroll', (ev) => {
			ev.preventDefault();
			windowScroll();
		})	  	
		/*END MENU JS*/		
				
		/*START PARTNER LOGO*/
		$('.partner').owlCarousel({
		  autoPlay: 3000, //Set AutoPlay to 3 seconds
		  items : 5,
		  itemsDesktop : [1199,3],
		  itemsDesktopSmall : [979,3]
		});
		/*END PARTNER LOGO*/
		
		/*START VIDEO JS*/
		$('.video-play').magnificPopup({
            type: 'iframe'
        });
		/*END VIDEO JS*/
		
		/* START COUNTDOWN JS*/
		$('.counter_feature').on('inview', function(event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).find('.counter-num').each(function () {
					var $this = $(this);
					$({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter));
						}
					});
				});
				$(this).unbind('inview');
			}
		});
		/* END COUNTDOWN JS */				

		/*START SCREENSHOT SLIDER JS*/	
		// $('.center slider').slick({
		// 	dots: true,
		// 	infinite: true,
		// 	centerMode: true,
		// 	slidesToShow: 5,
		// 	slidesToScroll: 3
		// });
		  
		// $('.center').slick({
		//   centerMode: true,
		//   centerPadding: '60px',
		//   slidesToShow: 3,
		//   responsive: [
		// 	{
		// 	  breakpoint: 768,
		// 	  settings: {
		// 		arrows: false,
		// 		centerMode: true,
		// 		centerPadding: '40px',
		// 		slidesToShow: 3
		// 	  }
		// 	},
		// 	{
		// 	  breakpoint: 480,
		// 	  settings: {
		// 		arrows: false,
		// 		centerMode: true,
		// 		centerPadding: '40px',
		// 		slidesToShow: 1
		// 	  }
		// 	}
		//   ]
		// });	
		/*END SCREENSHOT SLIDER JS*/
		
		/*START TESTIMONIAL JS*/	
		$("#testimonial-slider").owlCarousel({
			items:3,
			itemsDesktop:[1000,3],
			itemsDesktopSmall:[979,2],
			itemsTablet:[768,1],
			margin:10,
			pagination:false,
			navigation:true,
			navigationText:["",""],
			autoPlay:false
		});
		/*END TESTIMONIAL JS*/				
		
	}); 	

	/*START WOW ANIMATION JS*/
	  new WOW().init();	
	/*END WOW ANIMATION JS*/	
	
	
})(jQuery);


  

