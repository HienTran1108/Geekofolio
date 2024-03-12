import { animationSlide } from "./gsap";
export const mousewheelSwiper = new Swiper(".mousewheelSwiper", {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 0,
    // mousewheel
    mousewheel: true,
    on: {
        init: (el: any) => animationSlide(el.slides[el.activeIndex], 0),
        slideChangeTransitionStart: (el: any) => animationSlide(el.slides[el.activeIndex], 0),
    },
});
mousewheelSwiper.init();
