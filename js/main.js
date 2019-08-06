$(document).ready(function () {
    'use strict';

    
//    sidebar
    $('header .nav-icon a').click(function () {
        $('header nav ul').toggleClass('active');
    });
    
    
    
// login form
    $('header .login .enter').click(function () {
        $('.login-form').addClass('login-active');
    });
    $('.login-form form .close').click(function () {
        $('.login-form').removeClass('login-active');
    });
    
    
    
// nav button focus
    $('.menu-item').click('.menu-link', function (e) {
        $('.menu-item').removeClass('menu-item-current');
        $(this).addClass('menu-item-current');
    });


    
    
// search clicked 
    $('header .login button.search').click(function () {
        $('header .login .search-box').fadeToggle();
    });

    
// change the news according to clicked link
    $('.blog .blog-btns button').click(function () {
        $(this).addClass('btn-focused').siblings().removeClass('btn-focused');
        $('.blog .blog-content .sub-blog').fadeOut();
        $('.' + $(this).attr('id')).fadeIn();
    });

    
    
// Load More content
    if ($('.blog-page .sub-blog, .course-page .sub-blog').length > 11) {
        $('.blog-page .sub-blog:gt(11)').fadeOut();
        $('.course-page .sub-blog:gt(11)').fadeOut();
    }

    $('.blog-page .show-more, .course-page .show-more').on('click', function () {
        $('.blog-page .sub-blog:gt(11)').fadeToggle();
        $('.course-page .sub-blog:gt(11)').fadeToggle();
        $(this).text() === 'القليل من المدونات' ? $(this).text('المزيد من المدونات') : $(this).text('القليل من المدونات');
    });

    
    
// window.location to redirect to another webpage
    $('.blog-page .blog-content .sub-blog .sub-blog-news button').click(function () {
        window.location.href = "blog-sub.html";
    });
    
    
    $('.course-page.blog .blog-content .blog-news .main-blog-news.sub-blog-news button').click(function () {
        window.location.href = "course-sub.html";
    });
    
    
    $('.volunteer-page .volunteer-table table .table-btn button').click(function () {
        window.location.href = "volunteer-sub.html";
    });
    
    
    
// change content 
    $('.volunteer-sub-page .volunteer-sub-page-content .list li').click(function () {
        var myId = $(this).attr('id');
        $(this).addClass('tab-active').siblings().removeClass('tab-active');
        $('.volunteer-sub-page .volunteer-sub-page-content .text').hide();
        $('#' + myId + '-content').fadeIn(300);
    });

    
    
    
// table slide toggle
    $('.course-sub-page .course-sub-table .table-head').click(function () {
        $(this).toggleClass('slide-active');
        $(this).next('.table-list').slideToggle(500);
    });
    
    
// slick slider
    $('.training .training-content .slides .slider').slick({
        slidesToShow: 4,
        rtl: true,
        nextArrow: '.training .training-content .slider-controllers .next',
        prevArrow: '.training .training-content .slider-controllers .prev',
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 880,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            
        ]

    });
    
    $('.saudi-arabia .right-side .slides').slick({
        slidesToShow: 1,
        rtl: true,
        nextArrow: '.saudi-arabia .slider-controllers .next',
        prevArrow: '.saudi-arabia .slider-controllers .prev',
        autoplay: true,
        autoplaySpeed: 3000
    });
    
    
    $('.websites .websites-content .slides').slick({
        slidesToShow: 3,
        rtl: true,
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    
    $('.course-sub-page .another .another-slides .slider').slick({
        slidesToShow: 4,
        rtl: true,
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 610,
                settings: {
                    slidesToShow: 1
                }
            }
            
        ]
    });
    
    
    
    
});