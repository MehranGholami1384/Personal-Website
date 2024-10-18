$(document).ready(function () {
    AOS.init({
        duration: 1000,
        offset: 200,
        once: true
    });

    function showSideNavbar() {
        $('.side-navbar').addClass('open-side-navbar')
        $('.overlay').addClass('active-overlay');
    }

    function closeSideNavbar() {
        $('.side-navbar').removeClass('open-side-navbar')
        $('.overlay').removeClass('active-overlay');
    }

    $('.menu-burger').click(function () {
        showSideNavbar()
    });

    $('.overlay').click(function () {
        closeSideNavbar()
    })

    $('.close-side-navbar-btn').click(function () {
        closeSideNavbar()
    })
});