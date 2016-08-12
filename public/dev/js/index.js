/**
 * Created by nalantianyi on 16/6/27.
 */

window.onload = function () {
    new Swiper('.swiper1', {
        pagination: '.swiper1 .swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30
    });
    new Swiper('.swiper2', {
        slidesPerView: 2.5,
        paginationClickable: true,
        spaceBetween: 30,
        freeMode: true
    });
};