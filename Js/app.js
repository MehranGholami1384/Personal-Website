$(document).ready(function () {
    // menu-burger slide
    $('.menu-burger').click(function () {
        let $navbarLinks = $('.navbar-links');

        if ($navbarLinks.is(':visible')) {
            $navbarLinks.slideUp();
            $(this).html('<svg class="menu-burger-icon pe-none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g clip-path="url(#clip0_429_11066)"><path d="M3 6.00092H21M3 12.0009H21M3 18.0009H21" stroke="#f1f1f1" stroke-width="2.5"stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_429_11066"><rect width="24" height="24" fill="white" transform="translate(0 0.000915527)"></rect></clipPath></defs></g></svg>')
        } else {
            $navbarLinks
                .css('display', 'flex')
                .hide()
                .slideDown();
            $(this).html('<svg width="25" height="25" viewbox="0 0 40 40"><path d="M 10,10 L 30,30 M 30,10 L 10,30" stroke="#f1f1f1" stroke-width="4" /></svg>')
        }
    });
});