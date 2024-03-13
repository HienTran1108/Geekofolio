import './index.less'

import { swiper } from './swiper';
swiper.init();
import { wow } from './wow';
wow.init();

// Add class swiper-wrapper
// const containerSwiper = document.getElementById("container-swiper-wrapper");
// const swiperWrapperElement = document.getElementById('oke');
// // Tạo một hàm để cập nhật giá trị width khi kích thước thay đổi
// function updateWidth() {
//   let width = containerSwiper!.offsetWidth;
//   console.log(width)
//   if (width > 1024) {
//     swiperWrapperElement!.classList.add('swiper-wrapper');
//     containerSwiper?.classList.add('mousewheelSwiper');
//   } else {
//     swiperWrapperElement!.classList.remove('swiper-wrapper');
//     containerSwiper?.classList.remove('mousewheelSwiper');
//   }
// }
// // Gọi hàm updateWidth ban đầu để lấy giá trị width ban đầu
// updateWidth();

// // Thêm sự kiện 'resize' vào cửa sổ để cập nhật giá trị width khi kích thước thay đổi
// window.addEventListener('resize', updateWidth);


// mousewheelSwiper.init();

// gsapjs 3
const time:any = {};
const state:any = {};

document.querySelectorAll('.handle-collapse').forEach((e) => {
  e.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = (event.currentTarget as HTMLElement).id;
    const parentElement = (event.currentTarget as HTMLElement).parentElement;
    const contentElement = parentElement?.querySelector<HTMLElement>(`.handle-content`);

    // Đóng tất cả .handle-content khác trong cùng một thẻ cha
    // Đóng handle-content cùng thẻ cha với handle-collapse
    document.querySelectorAll('.handle-content').forEach((element) => {
      // có một timeline đã được tạo cho element.id không
      if (element !== contentElement && time[element.id]) {
        time[element.id].reverse();
        // Cập nhật trạng thái state[element.id] để đánh dấu rằng phần tử đã được đóng.
        state[element.id] = true;
      }
    });

    if (!time[targetId]) {
      time[targetId] = gsap.timeline({ defaults: { duration: 0.25, ease: 'power1.inOut' } });
    } else {
      // nếu state[targetId] đang mở là true khi click sẽ chạy time[targetId].reverse();
      // nếu state[targetId] đang đóng là false khi click sẽ chạy time[targetId].play();
      time[targetId][state[targetId] ? 'play' : 'reverse']();
      // Cập nhật trạng thái: đang là false khi click sẽ thành true và ngược lại
      state[targetId] = !state[targetId];
      return;
    }

    // Mở contentElement của handle-collapse được click
    if (contentElement) {
      time[targetId].to(contentElement, { height: 'auto' }, '0');
    }
  });
});

// Header
window.addEventListener("scroll", () => {
    // Header scroll
    var header = document.querySelector("#header")
    header!.classList.toggle("sticky", scrollY > 0);
});

// Cursor
const cursor: HTMLElement | null = document.getElementById('cursor'); 
document.addEventListener('mousemove', (e) => {
  let x = e.clientX;
  var y = e.clientY;
  cursor!.style.left = x + "px";
  cursor!.style.top = y + "px";
});
// Khi hover qua thẻ a
document.querySelectorAll('a').forEach((tagA) => {
  tagA.addEventListener('mouseover', () => {
    cursor!.classList.add('cursor-active');
  })
});
document.querySelectorAll('a').forEach((tagA) => {
  tagA.addEventListener('mouseout', () => {
    cursor!.classList.remove('cursor-active');
  })
});

// GLightboxjs 3
const glightbox = GLightbox({
  touchNavigation: false,
  loop: false,
  autoplayVideos: true,  
});
glightbox.init();

// Smoother
// gsap.registerPlugin(ScrollSmoother) 

// const scrollSmoother = ScrollSmoother.create({
//   smooth: 1,
//   effects: true,
// });
// scrollSmoother.init();

// ScrollTrigger
const section_2 = document.getElementById("horizontal");
let box_items = gsap.utils.toArray(".horizontal__item");
// Tạo một hàm để cập nhật giá trị width khi kích thước thay đổi
function updateWidth() {
  let width = section_2!.offsetWidth;
  console.log(width)
  if (width > 1024) {
    gsap.to(box_items, {
    xPercent: -100 * (box_items.length - 1),
    duration: 1,
    scrollTrigger: {
      trigger: section_2,
      pin: true,
      scrub: 1,
      snap: 1 / (box_items.length - 1),
      end: "+=" + section_2!.offsetWidth
    }
  });
  } 
}
// Gọi hàm updateWidth ban đầu để lấy giá trị width ban đầu
updateWidth();

// Thêm sự kiện 'resize' vào cửa sổ để cập nhật giá trị width khi kích thước thay đổi
window.addEventListener('resize', updateWidth);
