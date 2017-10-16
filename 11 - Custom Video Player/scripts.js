var player = document.querySelector('.player');
var movie = player.querySelector('.viewer');
var progress = player.querySelector('.progress');
var progressBar = player.querySelector('.progress__filled');

var togglebtn = player.querySelector('.toggle');
var skiped = player.querySelectorAll('[data-skip]');
var range = player.querySelectorAll('.player__slider');
var fullscreen = player.querySelector('.fullscreen__button');

function toggleScreen() {
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

function toggleplay() {
  if (movie.paused) {
    movie.play();
  } else {
    movie.pause();
  }
}

function updatebtn() {
  if (this.paused) {
    togglebtn.textContent = "►";
  } else {
    togglebtn.textContent = '||';
  }
}

function skipme() {
  movie.currentTime += parseFloat(this.dataset.skip);
}

function rangeUpdate() {
  movie[this.name] = this.value;
}

function progressUpdate() {
  var percent = (movie.currentTime / movie.duration) * 100;
  progressBar.style.flexBasis = percent + '%';
}

function scrub(e) {
  var percent = e.offsetX / progress.offsetWidth;
  movie.currentTime = percent * movie.duration;
}
movie.addEventListener('timeupdate', progressUpdate);
movie.addEventListener('click', toggleplay);
movie.addEventListener('play', updatebtn);
movie.addEventListener('pause', updatebtn);
togglebtn.addEventListener('click', toggleplay);
skiped.forEach(function(x) {
  x.addEventListener('click', skipme);
})
range.forEach(function(x) {
  x.addEventListener('change', rangeUpdate);
})
fullscreen.addEventListener('click', toggleScreen);

var mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', function(e) {
  if (mousedown) {
    scrub(e);
  }
});
progress.addEventListener('mousedown', function() {
  mousedown = true;
});
progress.addEventListener('mouseup', function() {
  mousedown = false;
});
