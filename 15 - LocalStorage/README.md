# List with localStorage
list with checkboxes and store data to the localStorage. Add 3 extra button to clear/selectAll/unselectAll the list.

## Get的Skills
1. Web Storage : Web applications can store data locally within the user's browser. Web storage is more secure, and larger.
**LocalStorage** : stores the data with no expiration date. The data will not be deleted when the browser is closed.
    - `localStorage.setItem("key", "value")` : to store a value pair, the value is a string type.
    ```javascript
    localStorage.setItem('items', JSON.stringify(items)) //use JSON.stringigy() to turn object items to string.
    ```
    - `localStorage.getItem("key")` : to get a value from the storage
    ```javascript
    JSON.parse(localStorage.getItem('items')) // JSON.pare() to turn string to object.
    ```
    - `localStorage.removeItem("key")` : to remove a value pair

2. To **reset a form** : `.reset()` method resets the values of all elements in a form.

3. To prevent a default event of a form : `e.preventDefault()`

4. `<label for="elem-id">` : It specifies which form element the label is bound to. In this case, it bind the label with the input element.
```javascript
itemsList.innerHTML=items.map(function(item, i){
  return `
    <li>
      <input type="checkbox" data-index=${i} id="item${i}" ${item.done ? 'checked' : ''} />
      <label for="item${i}">${item.text}</label>
    </li>
  `;// label 'for' porperty bind the label with the input element
}).join('');//.join('') remove the comma between the li items in DOM
```

5. `Element.matches()` method returns true if the element would be selected by the specified selector string : `e.target.matches('input')`
6. Event Delegation : Allow to add event listener to a parent, it can find the child element of it. 

    In this case, we have to add event listener to ul(the parent of li) `itemsList`, because it always exist on the DOM, the li elements are
    dynamicly add to the DOM. Then we can avoid to add event listener to each of the li element.

    We have to check if the target matches the thing we clicked, because we add the event to the parent, not the specific li element. When 
    we click, it could be any child inside that parent tag. We listen for a click on ul(parent), inside of it we need to check if it is the 
    thing we want
    ```javascript
    itemsList.addEventListener('click', toggleIcon);//this is the event Delegation.
    function toggleIcon(e){    
        if(!e.target.matches('input')){//skip it if it is not a input
          return;
        }
        var elemIndex = e.target.dataset.index;
        items[elemIndex].done = !items[elemIndex].done;
        localStorage.setItem('items', JSON.stringify(items));
      }
     ```
## Three extra button
- CheckAll : find all the input checkbox which checked is false, then assign it to true and change the localstorage as well
```javascript
function checkAll(e){
    e.preventDefault();
    var boxUnchecked = document.querySelectorAll('input[type=checkbox]:not(:checked)');
    boxUnchecked.forEach(function(x){
      x.checked=true;
      items[x.dataset.index].done = true;
      localStorage.setItem('items', JSON.stringify(items));
    });
  }
```
- Un-CheckAll: Change all the checkBox to checked false, also update the localStorage as well
```javascript
function unCheckAll(e){
    e.preventDefault();
    var uncheckbox = document.querySelectorAll('input[type=checkbox]');
    uncheckbox.forEach(function(x){
      x.checked=false;
      items[x.dataset.index].done = false;
      localStorage.setItem('items', JSON.stringify(items));
    })
  }
```
- Clear all: clear the DOM list and localStorage, also change the items to an empty array.
```javascript
function clearAll(e){
    e.preventDefault();
    while(itemsList.hasChildNodes()){
      itemsList.removeChild(itemsList.childNodes[0]);
    }
    var loadnode = document.createElement('li');
    var nodeText = document.createTextNode('Loading Tapas...');
    loadnode.appendChild(nodeText);
    itemsList.appendChild(loadnode);
    items=[];
    localStorage.removeItem('items');
  }
```
