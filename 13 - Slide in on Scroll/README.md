# Slide Scroll
鼠标滑动，图片slide in and out

## Get的技能 ：如何计算图片与浏览器的相对位置。
- `window.scrollY`：是文档从顶部开始滚动过的像素值。
- `window.innerHeight`：浏览器窗口的，能显示网页的地方（DOM）的高度。

`window.scrollY+window.innerHeight` ：定位是浏览器的底边。
- `window.outerHeight`：浏览器的高度，包括窗口标题、工具栏、状态栏。
- `slide.offsetTop`: 当前对象到其上级层顶部的距离。
`slide.offsetTop+slide.height`：定位的是图片的底边。 

`slideIn>slide.offsetTop`：保证滑动到要出现的图片的50%. 

`window.scrollY<slideBtm`： 保证滑动没有超过图片的底边


- debounce: 用来减少scroll被触发的次数，因为scroll触发太频繁，很有可能引起performance的问题。
```javascript
window.addEventListener('scroll', debounce(showSlides));

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
```
