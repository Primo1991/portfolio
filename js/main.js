const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const footer = document.querySelector('.icons');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State of Menu

let showMenu = false;



function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        footer.classList.add('showvs2');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        // Set Menu State 
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        footer.classList.remove('showvs2');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        // Set Menu State 
        showMenu = false;
    }
}

menuBtn.addEventListener('click', toggleMenu);