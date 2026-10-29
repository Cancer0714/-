"use strict"

$(document).ready(function() {
// スライドショーの初期化
$('.slider').slick({
autoplay: true, // 自動再生を有効にする
autoplaySpeed: 3000, // 3秒ごとにスライド
dots: true, // ドットナビゲーションを表示
arrows: false // 左右の矢印を無効化（簡易化）
});
});
