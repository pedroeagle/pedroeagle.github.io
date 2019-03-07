/**
*   Glitche (HTML)
*   Copyright © Glitche by beshleyua. All Rights Reserved.
**/

$(function () {
	'use strict';
	
	$(window).unload(function() {});
	
	/* Set full height in blocks */
	var width = $(window).width();
	var height = $(window).height();
	$('.section.started').css({'height': height-60});
	
	/* Typed preload text */
	$('.typed-load').typed({
		stringsElement: $('.typing-load'),
		loop: true
	});
	
	/* Preloader */
	$(window).load(function() {
		$(".preloader .pre-inner").fadeOut(800, function(){
			/* Preload hide */
			$('.preloader').fadeOut();
			$('body').addClass('loaded');
			
			/* Typed subtitle */
			$('.typed-subtitle').typed({
				stringsElement: $('.typing-subtitle'),
				loop: true
			});

			/* Typed subtitle2 */
			$('.typed-subtitle2').typed({
				stringsElement: $('.typing-subtitle2'),
				loop: true
			});

			/* Typed subtitle3 */
			$('.typed-subtitle3').typed({
				stringsElement: $('.typing-subtitle3'),
				loop: true
			});

			/* Typed subtitle4 */
			$('.typed-subtitle4').typed({
				stringsElement: $('.typing-subtitle4'),
				loop: true
			});

			/* Typed subtitle5 */
			$('.typed-subtitle5').typed({
				stringsElement: $('.typing-subtitle5'),
				loop: true
			});

			/* Typed subtitle6 */
			$('.typed-subtitle6').typed({
				stringsElement: $('.typing-subtitle6'),
				loop: true
			});

			/* Typed subtitle7 */
			$('.typed-subtitle7').typed({
				stringsElement: $('.typing-subtitle7'),
				loop: true
			});

			/* Typed subtitle8 */
			$('.typed-subtitle8').typed({
				stringsElement: $('.typing-subtitle8'),
				loop: true
			});

			/* Typed subtitle9 */
			$('.typed-subtitle9').typed({
				stringsElement: $('.typing-subtitle9'),
				loop: true
			});

			/* Typed subtitle10 */
			$('.typed-subtitle10').typed({
				stringsElement: $('.typing-subtitle10'),
				loop: true
			});

			/* Typed subtitle11 */
			$('.typed-subtitle11').typed({
				stringsElement: $('.typing-subtitle11'),
				loop: true
			});

			/* Typed subtitle12 */
			$('.typed-subtitle12').typed({
				stringsElement: $('.typing-subtitle12'),
				loop: true
			});

			/* Typed subtitle13 */
			$('.typed-subtitle13').typed({
				stringsElement: $('.typing-subtitle13'),
				loop: true
			});

			/* Typed subtitle14 */
			$('.typed-subtitle14').typed({
				stringsElement: $('.typing-subtitle14'),
				loop: true
			});

			/* Typed subtitle15 */
			$('.typed-subtitle15').typed({
				stringsElement: $('.typing-subtitle15'),
				loop: true
			});

			/* Typed subtitle16 */
			$('.typed-subtitle16').typed({
				stringsElement: $('.typing-subtitle16'),
				loop: true
			});

			/* Typed subtitle17 */
			$('.typed-subtitle17').typed({
				stringsElement: $('.typing-subtitle17'),
				loop: true
			});

			/* Typed subtitle18 */
			$('.typed-subtitle18').typed({
				stringsElement: $('.typing-subtitle18'),
				loop: true
			});

			/* Typed subtitle19 */
			$('.typed-subtitle19').typed({
				stringsElement: $('.typing-subtitle19'),
				loop: true
			});

			/* Typed subtitle20 */
			$('.typed-subtitle20').typed({
				stringsElement: $('.typing-subtitle20'),
				loop: true
			});

			/* Typed subtitle21 */
			$('.typed-subtitle21').typed({
				stringsElement: $('.typing-subtitle21'),
				loop: true
			});

			/* Typed subtitle22 */
			$('.typed-subtitle22').typed({
				stringsElement: $('.typing-subtitle22'),
				loop: true
			});
			
			/* Typed breadcrumbs */
			$('.typed-bread').typed({
				stringsElement: $('.typing-bread'),
				showCursor: false
			});

		});
	});
	
	/*Fade-out animation between load pages*/
	$('header, .typed-bread').on('click', 'a', function(){
		var link = $(this).attr('href');
		
		$('body').removeClass('loaded');
		setTimeout(function() {
			location.href = "" + link;
		}, 500);
		
		return false;
	});
	
	/*Menu mobile*/
	$('header').on('click', '.menu-btn', function(){
		if($('header').hasClass('active')){
			$('header').removeClass('active');
			$('body').addClass('loaded');
		} else {
			$('header').addClass('active');
			$('body').removeClass('loaded');
		}
		
		return false;
	});
	
	/* Hide mouse button on scroll */
	$(window).scroll(function(){
		if ($(this).scrollTop() >= 1 /*$('#blue_bor').offset().top*/) {
			$('.mouse_btn').fadeOut();
		}
		else {
			$('.mouse_btn').fadeIn();
		}
	});
	
	/* On click mouse button, page scroll down */
	$('.section').on('click', '.mouse_btn', function(){
		$('body,html').animate({
			scrollTop: height - 150
		}, 800);
	});
	
	$('body').on({
		mouseenter: function () {
			$(this).addClass('glitch-effect-white');
		},
		mouseleave: function () {
			$(this).removeClass('glitch-effect-white');
			$('.top-menu ul li.active a.btn').addClass('glitch-effect-white');
		}
	}, 'a.btn, .btn');
	
	/* Validate contact form */
	$("#cform").validate({
		rules: {
			name: {
				required: true
			},
			message: {
				required: true
			},
			email: {
				required: true,
				email: true
			}
		},
		success: "valid",
		submitHandler: function() {
			$.ajax({
				url: 'mailer/feedback.php',
				type: 'post',
				dataType: 'json',
				data: 'name='+ $("#cform").find('input[name="name"]').val() + '&email='+ $("#cform").find('input[name="email"]').val() + '&message=' + $("#cform").find('textarea[name="message"]').val(),
				beforeSend: function() {
				
				},
				complete: function() {
				
				},
				success: function(data) {
					$('#cform').fadeOut();
					$('.alert-success').delay(1000).fadeIn();
				}
			});
		}
	});
	
	/* Validate commect form */
	$("#comment_form").validate({
		rules: {
			name: {
				required: true
			},
			message: {
				required: true
			},
			email: {
				required: true,
				email: true
			}
		},
		success: "valid",
		submitHandler: function() {
		}
	});
	
	/* Initialize masonry items */
	var $container = $('.box-items');
	
	$container.imagesLoaded(function(){
		$container.multipleFilterMasonry({
			itemSelector: '.box-item',
			filtersGroupSelector: '.filters',
			percentPosition: true,
			gutter: 0
		});
	});
	
	/* Initialize masonry filter */
	$('.filters label').on('change', 'input[type="checkbox"]', function() {
		if ($(this).is(':checked')) {
			$(this).parent().addClass('glitch-effect');
		}
		else {
			$(this).parent().removeClass('glitch-effect');
		}
		/* Refresh Portfolio magnific popup */
		$('.has-popup').magnificPopup({
			type: 'inline',
			overflowY: 'auto',
			closeBtnInside: true,
			mainClass: 'mfp-fade'
		});
	});
	
	/* Portfolio magnific popup */
	$('.has-popup').magnificPopup({
		type: 'inline',
			overflowY: 'auto',
			closeBtnInside: true,
			mainClass: 'mfp-fade'
	});
	
	/* Resize function */
	$(window).resize(function() {
		var width = $(window).width();
		var height = $(window).height();
		
		$('.section.started').css({'height': height-60});
	});
	
	if(width < 840) {
		$('.section.started').css({'height': height-30});
	}
});