// nav and toggle js start
	 function toggleMobileMenu() {
    var mobileMenu = document.querySelector('.nav');
    mobileMenu.classList.toggle('show');

    var toggleButton = document.querySelector('.toggle-menu a');
    toggleButton.classList.toggle('menu-open');
}

// Smooth scroll function
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Add event listener to close the menu when clicking on a navigation link
var navLinks = document.querySelectorAll('.nav li a');
navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
        var mobileMenu = document.querySelector('.nav');
        var toggleButton = document.querySelector('.toggle-menu a');

        // Get the target from the href attribute
        var target = this.getAttribute('href');

        // Check if the mobile menu is open before preventing the default behavior
        if (mobileMenu.classList.contains('show')) {
            mobileMenu.classList.remove('show');
            toggleButton.classList.remove('menu-open');

            // Smooth scroll to the target
            smoothScroll(target);

            event.preventDefault(); // Prevent the default anchor link behavior
        }
    });
});

// Add event listener to close the menu when clicking anywhere on the page
document.addEventListener('click', function (event) {
    var mobileMenu = document.querySelector('.nav');
    var toggleButton = document.querySelector('.toggle-menu a');

    // Check if the clicked element is not part of the mobile menu or toggle button
    if (!mobileMenu.contains(event.target) && !toggleButton.contains(event.target)) {
        mobileMenu.classList.remove('show');
        toggleButton.classList.remove('menu-open');
    }
});
// nav and toggle js end
