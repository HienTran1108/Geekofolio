import './index.less'
import { swiper } from './swiper'
swiper()
import { mousewheelSwiper } from './mousewheelswiper'
mousewheelSwiper()


// handlebars
const temp = document.getElementById("template-1");
console.log('temp',temp)
if (temp) {
  const template = Handlebars.compile(temp.innerHTML);
  const data = {
    "datass": JSON.stringify({ "name": "Alan", "hometown": "Somewhere, TX", "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]}), 
    "name": "Alan", 
    "hometown": "Somewhere, TX",
    "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}] };
  document.getElementById('text')!.innerHTML = template(data);
}