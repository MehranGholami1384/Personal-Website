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

    $('.progress').each(function () {
        let $this = $(this)
        let $progressBar = $this.find('.progress-bar')
        let progressBarWidth = $progressBar.data('width')

        $this.waypoint(
            function () {
                $progressBar.animate({
                    width: `${progressBarWidth}%`
                }, 2000)

                this.destroy()
            }, {
                offset: '100%'
            }
        )
    })

    $('.progress-percent-counter').counterUp({
        delay: 50,
        time: 2200
    })
});