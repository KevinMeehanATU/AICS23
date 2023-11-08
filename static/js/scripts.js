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
	var toggleButton1 = document.getElementById('toggleBio1');
	var bio1Collapse1 = document.getElementById('bio_1_collapse');

	if (toggleButton1 && bio1Collapse1) {
		// Check the initial state of the collapsible element
		var isCollapsed = !bio1Collapse1.classList.contains('show');
    
		// Set the initial button text based on the initial state
		toggleButton1.textContent = isCollapsed ? 'Show More' : 'Show Less';

		toggleButton1.addEventListener('click', function () {
			if (isCollapsed) {
				bio1Collapse1.classList.add('show');
				toggleButton1.textContent = 'Show Less';
			} else {
				bio1Collapse1.classList.remove('show');
				toggleButton1.textContent = 'Show More';
			}
        
			// Toggle the state
			isCollapsed = !isCollapsed;
		});
	}
	
	var toggleButton2 = document.getElementById('toggleBio2');
	var bio1Collapse2 = document.getElementById('bio_2_collapse');

	if (toggleButton2 && bio1Collapse2) {
		// Check the initial state of the collapsible element
		var isCollapsed2 = !bio1Collapse2.classList.contains('show');
    
		// Set the initial button text based on the initial state
		toggleButton2.textContent = isCollapsed2 ? 'Show More' : 'Show Less';

		toggleButton2.addEventListener('click', function () {
			if (isCollapsed2) {
				bio1Collapse2.classList.add('show');
				toggleButton2.textContent = 'Show Less';
			} else {
				bio1Collapse2.classList.remove('show');
				toggleButton2.textContent = 'Show More';
			}
        
			// Toggle the state
			isCollapsed2 = !isCollapsed2;
						
		});
	}

	var toggleButton3 = document.getElementById('toggleBio3');
	var bio1Collapse3 = document.getElementById('bio_3_collapse');
		
	if (toggleButton3 && bio1Collapse3) {
		// Check the initial state of the collapsible element
		var isCollapsed3 = !bio1Collapse3.classList.contains('show');
    
		// Set the initial button text based on the initial state
		toggleButton3.textContent = isCollapsed3 ? 'Show More' : 'Show Less';
		
		toggleButton3.addEventListener('click', function () {		
			if (isCollapsed3) {
				bio1Collapse3.classList.add('show');
				toggleButton3.textContent = 'Show Less';
			} else {
				bio1Collapse3.classList.remove('show');
				toggleButton3.textContent = 'Show More';
			}
			
			// Toggle the state
			isCollapsed3 = !isCollapsed3;
			
		});
	}


});
