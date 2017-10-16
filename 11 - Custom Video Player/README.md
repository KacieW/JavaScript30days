# Day11 - Custom HTML5 Video
实现视频的各种功能
## Get的技能
- Video的属性
  - duration : 视频有多少秒
  - currentTime : 已经播放的时间
  - paused : 视频是否暂停
  ```javascript
  function progressupdate(){
    var percent = (movie.currentTime / movie.duration) * 100; //计算出已经播放了百分之多少
    progressBar.style.flexBasis = percent + '%'; //在progressBar上显示出来
  }
  movie.addEventListener('timeupdate', progressUpdate); //在timeupdate有变化时，触发progressupdate
  ``` 
- Video的method
  - play() : 播放视频
  - pause() : 暂停视频
  ```javascript
  function toggleplay() {
    if (this.paused) {
      movie.play();
    } else {
      movie.pause();
    }
  }
  ```
- Video的eventlistener ：play, pause.
  ```javascript
  movie.addEventListener('play', updatebtn);
  movie.addEventListener('pause', updatebtn);
  ```
- Video的快进和倒退
  在html中，快进和后退的秒数是由`data-skip`这个自定义的属性储存的。首先选出`data-skip`的elements，`player.querySelectorAll('[data-skip]');` 当
  鼠标点击快进/后退键的时候，要在此时的`currentTime`上，加上快进/后退（后退的秒数为负数）的秒数。秒数由`dataset`来获取。并对选出的每一个element，
  加一个event。
  ```javascript
  function skipme() {
    movie.currentTime += parseFloat(this.dataset.skip);
  }
  ```
- Video的声音和速度的拖进
 对于声音和速度进条，需要监听的事件是`change`，当其改变是，在对应的名字下付给对应的值即可。
  ```javascript
  function rangeUpdate(){
    movie[this.name] = this.value;
  }
  range.forEach(function(x) {
    x.addEventListener('change', rangeUpdate);
  })
  ```
- Video的进度条
当进度条被点击或者拖拽到某一时刻时，要对应播放此时的内容。当click时，调用scrub方法，根据点击的地方（`e.offsetX`）和进度条自身的长度
（`progress.offsetWidth`），计算出现在进度条的百分比。百分比*视频总长度就是现在播放到的时间（currentTime）。监听mousemove事件的时候，先建立一个
flag，其值分别由监听`mousedown`和`mouseup`事件决定。当flag为true时，在mousemove事件中，调用scrub。
  ```javascript  
  function scrub(e) { //计算进度条的currenttime
    var percent = e.offsetX / progress.offsetWidth;
    movie.currentTime = percent * movie.duration;
  }
  var mousedown = false; //flag
  progress.addEventListener('click', scrub);
  progress.addEventListener('mousemove', function(e) {
    if (mousedown) {//确保在鼠标点下去以后的拖拽有效，而不是鼠标任意移动都有效
      scrub(e);
    }
  });
  progress.addEventListener('mousedown', function() {
    mousedown = true;
  });
  progress.addEventListener('mouseup', function() {
    mousedown = false;
  });
  ```
  
## 实现全屏播放
在html中加入一个fullscreen的button，当click时，通过css的full screen API来实现全屏。`player.requestFullscreen()`实现全屏，
`document.exitFullscreen()`实现退出全屏。
```javascript
function toggleScreen() { //不同浏览器有不同的方法名称
  if (player.requestFullscreen) {
    player.requestFullscreen();
  } else if (player.webkitRequestFullscreen) {
    player.webkitRequestFullscreen();
  } else if (player.mozRequestFullScreen) {
    player.mozRequestFullScreen();
  } else if (player.msRequestFullscreen) {
    player.msRequestFullscreen();
  }
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}
```
