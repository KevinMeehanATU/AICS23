/*!
* Start Bootstrap - Creative v7.0.4 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

    //Add onclick toggling of arrow icons for dropdown buttons
    const dropdownButtonElements =  [].slice.call(document.body.querySelectorAll('.dropdown_button'));
    dropdownButtonElements.map(function (dropdownButtonElement) {
        dropdownButtonElement.addEventListener('click', () => {
            let dropdownIconElement = dropdownButtonElement.querySelector('.arrow');
            if (dropdownIconElement.classList.contains('arrow_down')) {
                dropdownIconElement.classList.remove('arrow_down');
                dropdownIconElement.classList.add('arrow_up');
            }
            else{
                dropdownIconElement.classList.remove('arrow_up');
                dropdownIconElement.classList.add('arrow_down');
            }
        });
    });

    // Show More/Show Less code
	var toggleButton = document.getElementById('toggleBio');
	var bio1Collapse = document.getElementById('bio_1_collapse');

	if (toggleButton && bio1Collapse) {
		// Check the initial state of the collapsible element
		var isCollapsed = !bio1Collapse.classList.contains('show');
    
		// Set the initial button text based on the initial state
		toggleButton.textContent = isCollapsed ? 'Show More' : 'Show Less';

		toggleButton.addEventListener('click', function () {
			if (isCollapsed) {
				bio1Collapse.classList.add('show');
				toggleButton.textContent = 'Show Less';
			} else {
				bio1Collapse.classList.remove('show');
				toggleButton.textContent = 'Show More';
			}
        
			// Toggle the state
			isCollapsed = !isCollapsed;
		});
	}

});
