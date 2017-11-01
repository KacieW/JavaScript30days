# Countdown Timer
Calculate the time left before a certain time.

## Get the skill
1. Set up a timer. 
    - Get the time for now with `Date.now()`. Then cal the later time by `now + seconds*1000`.
    - a setInterval function to countdown the time by second. 
    ```javascript
    countdown = setInterval(()=>{
      var timeLeft = Math.round((then-Date.now())/1000); //how many time left
      if(timeLeft<0){ //clear the interval when the 0 time left.
        clearInterval(countdown);
        return;
      }
      displayTimeLeft(timeLeft);
    }, 1000);
    ```
2. A function to display the time left, and display the time on the DOM
3. A function to show what time should the countdown ends.
    - Get the end time by `new Date(timestamp)`. It will let us know how many seconds we have from the timestamp. 
    - Calculate the time from the end time and display it in the DOM.
4. A starterTimer function for user to quickly set up a countdown.
```javascript
function startTimer(){  
  var seconds = this.dataset.time;
  timer(seconds);
}
buttons.forEach(function(x){
    x.addEventListener('click', startTimer);
  }
)
```
5. A function to get the user into mins from a form.
```javascript
document.customForm.addEventListener('submit', function(e){
  e.preventDefault(); //prevent page refresh when submit the form.
  var mins = parseInt(this.minutes.value);
  if(isNaN(mins)){//make sure the input is number only.
    alert('please enter a number');
    return;
  }
  var sec = mins*60;
  timer(sec);
  this.reset();//clear the input area
});
```
