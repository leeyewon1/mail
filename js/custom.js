$(function () {
    $('.visual_slide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
    });


    $('.main_Visual .arrows .left').on('click', function () {
        $('.visual_slide').slick('slickPrev');
    });

    $('.main_Visual .arrows .right').on('click', function () {
        $('.visual_slide').slick('slickNext');
    });

    $('.tab_menu li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index();
        console.log('내가 클릭한 것의 번호:', idx);
        $('.tab_content .content')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on');
        $(this)
            .addClass('on')
            .siblings()
            .removeClass('on');
    });

    $('#promotion').YTPlayer({
        videoURL: 'https://www.youtube.com/embed/_KprytXKoas',
        containment: '.mainPromotion .movie_case',
        showControls: false,
        optimizeDisplay: false,
        playOnlyIfVisible: true,
        autoPlay: false,

    });

    let movie = true;

    $('.mainPromotion .movie_play').on('click', function () {
        if (movie) {
            $('#promotion').YTPPlay();
        }
        else {
            $('#promotion').YTPPause();
        }

        $(this).toggleClass('on');
        movie = !movie;
    });




});