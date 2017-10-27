# Follow link highlighter
A animation that follow the mouse then hover over the link

## Get skills
**`Element.getBoundingClientRect()`** : it returns the size of an element and its position relative to the viewport. Then we can use it to get
the element width, height, left and top positions. For the left and top position, we need to consider the offset from window.scrollx and 
window.scollY. Then it should work fine even if we scroll the page. 
```javascript
var left = coords.left+window.scrollX; 
var top = coords.top+window.scrollY;
```

For DOM, a element should be create and add a class to it, then append it to the document.body. Use a mouseenter event to trigger the 
animation.
```javascript
var words = document.querySelectorAll('a');
var spantag = document.createElement('span');
spantag.classList.add('highlight');
document.body.appendChild(spantag);

words.forEach(function(x){
  return x.addEventListener('mouseenter', highlightlink);
});
```
