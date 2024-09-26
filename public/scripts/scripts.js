// Cross-browser document ready function
// https://www.competa.com/blog/cross-browser-document-ready-with-vanilla-javascript/#targetText=Cross%2Dbrowser%20Document%20Ready%20with%20Vanilla%20JavaScript&targetText=In%20jQuery%2C%20developers%20are%20used,stuff%20is%20on%20your%20page.
var domIsReady = (function (domIsReady) {
	var isBrowserIeOrNot = function () {
		return (!document.attachEvent || typeof document.attachEvent === "undefined" ? 'not-ie' : 'ie');
	}

	domIsReady = function (callback) {
		if (callback && typeof callback === 'function') {
			if (isBrowserIeOrNot() !== 'ie') {
				document.addEventListener("DOMContentLoaded", function () {
					return callback();
				});
			} else {
				document.attachEvent("onreadystatechange", function () {
					if (document.readyState === "complete") {
						return callback();
					}
				});
			}
		} else {
			console.error('The callback is not a function!');
		}
	}

	return domIsReady;
})(domIsReady || {});

(function (document, window, domIsReady, undefined) {
	domIsReady(function () {
		var nav = document.querySelector('nav');
		var navDimensions = nav.getBoundingClientRect();
		document.documentElement.style.setProperty('--main-right-padding', `${navDimensions.width}px`);

		var buttonTop = document.querySelector('#js-scroll-top');
		buttonTop.addEventListener('click', () => {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		});
	});
})(document, window, domIsReady);

// $(function() {
// 	$('a[href*="#"]:not([href="#"])').click(function() {
// 		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
// 		var target = $(this.hash)
// 			target = target.length ? target : $('[name=' + this.hash.slice(1) +']')
// 			if (target.length) {
// 				$('html, body').animate({
// 			 	scrollTop: target.offset().top
// 				}, 800)
// 				return false
// 			}
// 		}
// 	})

// 	$('#about-link').on('click', function() {
// 		$('html, body').animate({
// 		 	scrollTop: $('#about').offset().top
// 		}, 900)
// 	})

// 	$('#portfolio-link').on('click', function() {
// 		$('html, body').animate({
// 		 	scrollTop: $('#portfolio').offset().top
// 		}, 900)
// 	})

// 	$('#contact-link').on('click', function() {
// 		$('html, body').animate({
// 		 	scrollTop: $('#contact').offset().top
// 		}, 900)
// 	})

// 	$('.tothetop a').on('click', function() {
// 		$('html, body').animate({
// 		 	scrollTop: $('#top').offset().top
// 		}, 900)
// 	})

// 	//

// 	$('.hidden-menu i').on('click', function() {
// 		$('nav ul').css('top', '0').addClass('bg-overlay')
// 		$('.hidden-menu').fadeOut()
// 		$('#about-link, #portfolio-link, #contact-link').on('click', function() {
// 			$('nav ul').css('top', '-100%').removeClass('bg-overlay')
// 			$('.hidden-menu').fadeIn()
// 		})
// 		$('.fa-times').fadeIn()
// 	})

// 	$('ul .fa-times').on('click', function() {
// 		$('.hidden-menu').fadeIn()
// 		$('nav ul').css('top', '-100%').removeClass('bg-overlay')
// 		$('.fa-times').fadeOut()
// 	})

// 	$(window).on('resize', function() {
// 		if ($(window).width() < 650) {
// 			$('.hidden-menu').show()
// 			$('nav ul').css('top', '-100%')
// 		} else {
// 			$('.hidden-menu').hide()
// 			$('.fa-times').hide()
// 			$('nav ul').removeClass('bg-overlay')
// 		}
// 	})

// 	if ($(window).width() < 650) {
// 		$('.hidden-menu').fadeIn()
// 	} else {
// 		$('.hidden-menu').fadeOut()
// 	}
// });