# Reduce and Map

## Get到的skills
- 类数组变数组：`Array.from(类数组)`
- `Array.prototype.map()` ：The map() method creates a new array with the results of calling a provided function on every element 
in the calling array. 除对每一个数组中的元素实现一定的操作，还可以把数组中的每一个元素放到innerHTML中。
- Number to time 常用格式
  ```javascript
  var temp = seconds;
  var hours = Math.floor(seconds/3600);
  temp = temp%3600;
  var mins = Math.floor(temp/60);
  temp = temp%60;
  console.log(hours, mins, temp);
  ```
