// Cross-browser document ready function
// https://www.competa.com/blog/cross-browser-document-ready-with-vanilla-javascript/#targetText=Cross%2Dbrowser%20Document%20Ready%20with%20Vanilla%20JavaScript&targetText=In%20jQuery%2C%20developers%20are%20used,stuff%20is%20on%20your%20page.
var domIsReady = ((domIsReady) => {
	const isBrowserIeOrNot = function () {
		return (!document.attachEvent || typeof document.attachEvent === "undefined" ? 'not-ie' : 'ie');
	}

	domIsReady = (callback) => {
		if (callback && typeof callback === 'function') {
			if (isBrowserIeOrNot() !== 'ie') {
				document.addEventListener("DOMContentLoaded", () => {
					return callback();
				});
			} else {
				document.attachEvent("onreadystatechange", () => {
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

((document, window, domIsReady, undefined) => {
	domIsReady(() => {
		const hashLinks = document.querySelectorAll('a[href*="#"]:not([href="#"])');
		hashLinks.forEach(hash => {
			hash.addEventListener('click', () => {
				if (location.pathname.replace(/^\//, '') === hash.pathname.replace(/^\//, '') && location.pathname === hash.hostname) {
					let target = hash.hash;
					target = target.length ? target : document.querySelector('[name=' + hash.hash.slice(1) + ']');
					if (target.length) {
						window.scroll({ top: target.offsetTop, behavior: 'smooth' });
						return false;
					}
				}
			});
		});

		// Smooth scroll
		const smoothScroll = (target, to) => {
			const targetLink = document.querySelector(target);
			targetLink.addEventListener('click', (e) => {
				e.preventDefault();
				const section = document.querySelector(to);
				window.scroll({ top: section.offsetTop, behavior: 'smooth' });
			});
		};
		smoothScroll('#about-link', '#about');
		smoothScroll('#portfolio-link', '#portfolio');
		smoothScroll('#contact-link', '#contact');
		smoothScroll('.tothetop a', '#top');

		// Mobile menu
		const hiddenMenu = document.querySelector('.hidden-menu');
		const exitMenu = document.querySelector('.exit-menu');
		const navList = document.querySelector('nav ul');
		const navLinks = document.querySelectorAll('.nav-link');
		hiddenMenu.addEventListener('click', () => {
			hiddenMenu.style.opacity = '0';
			navList.style.top = '0px';
			navList.classList.add('bg-overlay');
			exitMenu.style.display = 'block';
			navLinks.forEach(link => {
				link.addEventListener('click', () => {
					navList.style.top = '-100%';
					navList.classList.remove('bg-overlay');
					hiddenMenu.style.opacity = '1';
				});
			});
		});
		exitMenu.addEventListener('click', () => {
			hiddenMenu.style.opacity = '1';
			navList.style.top = '-100%';
			navList.classList.remove('bg-overlay');
			exitMenu.style.display = 'none';
		});

		window.addEventListener('resize', () => {
			if (window.innerWidth < 650) {
				hiddenMenu.style.opacity = '1';
				navList.style.top = '-100%';
			} else {
				hiddenMenu.style.opacity = '0';
				exitMenu.style.display = 'none';
				navList.classList.remove('bg-overlay');
			}
		});

		if (window.innerWidth < 650) {
			hiddenMenu.style.opacity = '1';
		} else {
			hiddenMenu.style.opacity = '0';
		}
	});
})(document, window, domIsReady);
