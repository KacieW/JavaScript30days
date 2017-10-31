
var countdown;
var timerDisplay = document.querySelector('.display__time-left');
var endTime = document.querySelector('.display__end-time');
var buttons = document.querySelectorAll('[data-time]');

function timer(seconds){
  clearInterval(countdown); //clear other countdowns

  var now = Date.now();
  var then = now + seconds*1000;
  displayTimeLeft(seconds);//setInterval is invoked 1 second later, we need to call it first to display the time.
  displayEndTime(then);

  countdown = setInterval(()=>{
    var timeLeft = Math.round((then-Date.now())/1000);
    if(timeLeft<0){
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(timeLeft);
  }, 1000);
}

function displayTimeLeft(seconds){
  var minutes = Math.floor(seconds/60);
  var leftSecond = seconds % 60;
  if(leftSecond<10){
    leftSecond = '0'+leftSecond;
  }
  var displayTime = minutes +":"+leftSecond;
  timerDisplay.textContent = displayTime;
}

function displayEndTime(timestamp){
  var end = new Date(timestamp); //the end time
  var hours = end.getHours();
  var minutes = end.getMinutes();
  console.log(hours, minutes);
  if(hours>12){
    hours = hours-12;
  }
  endTime.textContent = 'Countdown ends at '+hours+":"+minutes;
}

function startTimer(){
  var seconds = this.dataset.time;
  timer(seconds);
}
buttons.forEach(function(x){
    x.addEventListener('click', startTimer);
  }
)

document.customForm.addEventListener('submit', function(e){
  e.preventDefault();
  var mins = parseInt(this.minutes.value);
  if(isNaN(mins)){
    alert('please enter a number');
    return;
  }

  var sec = mins*60;
  timer(sec);
  this.reset();//clear the input area
});
