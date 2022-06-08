$(document).ready(function () {

    let $btns = $('.filter-buttons button');

    $btns.click(function (e) {
        $('.filter-buttons button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.grid').isotope({
            filter: selector
        });


        return false;


    })

    // static nav menu

    let nav_offset_top = $('.page-header').height() + 50;

    function navbarFixed() {
        if ($('.page-header').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.navbar').addClass('navbar_fixed');
                } else {
                    $('.navbar').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();

});