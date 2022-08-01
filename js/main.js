$(function(){
    // メニューボタンをクリックした場合
    $('.menu-button').on('click', function() {
        hamburger();
    });

    // クローズボタンをクリックした場合
    $('.close-button').on('click', function() {
        hamburger();
    });

    // ナビメニューのリンクをクリックした場合
    $('nav a').on('click', function() {
        hamburger();
    });
});


function hamburger() {
    // opacity: 0; にしているnav部分の表示
    $('.close-button').toggleClass('active');
    $('.nav-list-open').toggleClass('active');

    if ($('.close-button').hasClass('active')) {
        // クローズボタンがアクティブのとき
        // 背景に隠れているメニューボタンを非表示
        $('.menu-button').addClass('hidden');
    } else {
        // クローズボタンが非アクティブのとき
        // メニューボタンを表示
        $('.menu-button').removeClass('hidden');
    }
}