$(document).ready(function () {
    'use strict';
//    sidebar
    $('header .nav-icon a').click(function () {
        $('header nav ul').toggleClass('active');
        if ($(window).width() < 1131) {
            $('header .nav-icon').toggleClass('nav-icon-active');
        } else {
            $('header .nav-icon').removeClass('nav-icon-active');
        }
    });
    
});