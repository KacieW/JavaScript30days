# Move Shadow
## offset的各种指标的含义
- **offsetWidth/offsetHeight** : 
The offsetWidth property returns the viewable width of an element in pixels, including padding, border and scrollbar, but not the margin.
是指当前元素的高矮胖瘦

  `clientWidth` return the viewable height and width of an element, only including the padding.
  
- **offsetX/offsetY**:
The offsetX of the MouseEvent interface provides the offset in the X coordinate of the mouse pointer between that event and the padding 
edge of the target node. 从鼠标点击的位置，到元素自己的边缘的距离，跟别人没关系

- **offsetLeft/offsetTop** :
It returns the left position (in pixels) relative to the left side the offsetParent element. 当前元素跟他爹之间的距离
