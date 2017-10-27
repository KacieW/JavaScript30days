# Event capture, propagation, bubbing and once.

`element.addEventListener('event', callbackfunction, capture?)` : if capture is true, it will cap the dom from top to bottom. 
If it is false, which is default, will bubble the event from bottom to top.

We can use `event.stopPropagation` to stop the capture or bubbling.

**once** : it will remove the event listener after the event has been fired once. Like checkout button of a online store, we can use the once
to stop people click the checkout button more than once.
```javascript
button.addEventListener('click', () => {
    console.log('Click!!!');
  }, {
    once: true
  })
```
