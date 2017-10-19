# Reference VS Copying
Understand the reference and copying of all the data type. In JS, string, number and boolean are copied by copying. Array and Object are 
copied by reference.

## Get的技能
String, number and boolean, 副本变了，而原本不变。 Array and Object 副本变了，原本也变。

如果要求array，object副本变而原本不变，有以下方法：
- Array
  - arr.slice()
  ```javascript
  var player = ['a', 'b', 'c'];
  var player1 = player.slice();//.slice()把player数组copy了一遍，放到了player1中
  ```
  - [...arr]
  ```javascript
  var player2 =[...player];//...把原来的所有东西从原数组中拿出来，放到...外的container中。
  ```
  - arr.concat()
  ```javascript
  var player3 = [].concat(player);//把原数组粘帖进空数组中
  ```
  - Array.from()
  ```javascript
  var player4 = Array.from(player);
  ```
 
- Object
  - Object.assign(), 对于nested的不管用
  ```javascript
  var obj = {
    name:'dog', 
    age:6, 
    gender:"M",
    social:{
      facebook:'aa',
      twitter:'bb'
    }
  }
  var obj1 = Object.assign({}, obj, {age:77, name:'cat'});
  ```
  - JSON.parse(JSON.stringify())，这个对于nested管用
  ```javascript
  var obj2 = JSON.parse(JSON.stringify(obj));
  obj2.social.facebook = 'cccc';
  console.log(obj, obj2);//obj = { social:{facebook:'aa'}}, obj2 = { social:{facebook:'cccc'}}
  ```
