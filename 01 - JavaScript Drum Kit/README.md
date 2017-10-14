 # Day1 - 模拟打击乐器的声音
 每按下相应的键, 对应字母变亮并输出对应声音
 
 ## Get到的技能
 - `data-*` : HTML中用于保存用户自定义的数据，可以把自定义的属性放到HTML Element中。 \*可以是任何名字, 例如data-key, data-animal。在JS中，用css selector把动态的keycode赋值给data-key。 
```javascript
  document.querySelector('audio[data-key = " '+e.keyCode+' "]');
```
       querySelector返回的是一个NodeList，跟array类似，但可调用的方法有限。常用的有nodeList.forEach(...)。 如果想像array一样，        `Array.prototype.forEach.call` 转换成array。

- classname的添加和删除
```javascript
   x.classList.add('newName');
   x.classList.remove('newName');
```

- `transitionend` event : 当css结束时，需要立即响应下一个动作时，不能单纯依靠 `toggle('className')` 来实现。 `transitionend` event是当css transition结束后开始。
```javascript 
   mykeys[i].addEventListener('transitionend', removePlaying)
```

- currentTime 属性 ： 用来把视频或者音频回调到特定的时间，然后从这个时间开始重新播放。
```javascript
   audiokey.currentTime = 2 //从第二秒开始播放
```
## 实现鼠标点击
当屏幕上的字母被点击时，找到是哪一个字母被点击，加上一个类 playing，并调用 playS 来播放声音。
```javascript
function playsoundByClick(ev){
    if(ev.target.className=='key'){
      var clickKeyCode = ev.target.getAttribute('data-key');
      var audio = document.querySelector('audio[data-key="'+clickKeyCode+'"]');
      this.classList.add("playing");
      playS(audio);
    }else{
      var parentKeyCode = ev.target.parentNode.getAttribute('data-key');
      //确保点击到字母边缘时也能触发event
      var audio1 = document.querySelector('audio[data-key="'+parentKeyCode+'"]');
      this.classList.add("playing");
      playS(audio1);
    }
  }
  
function playS(x){
    x.currentTime = 0;
    x.play();
}
```
