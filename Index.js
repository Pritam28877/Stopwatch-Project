// use the strict mode to see the error handle 
'use strict'
//  the varable  and also the id to change the innerHMTL 
      let minutes = 0;
      let seconds = 0;
      let tens = 0;
      let appendMinutes = document.querySelector('#minutes');
      let appendTens = document.querySelector('#tens');
      let appendSeconds = document.querySelector('#seconds');
      let startBtn = document.querySelector('#start');
      let stopBtn = document.querySelector('#stop');
      let resetBtn = document.querySelector('#reset');
      let Interval;
// set timmer to start the timer from  00  or where it was stopped 
      const startTimer = () => {
        tens++;
        if (tens <= 9) {
          appendTens.innerHTML = '0' + tens;
        }
        if (tens > 9) {
          appendTens.innerHTML = tens;
        }

        if (tens > 99) {
          seconds++;
          appendSeconds.innerHTML = '0' + seconds;
          tens = 0;
          appendTens.innerHTML = '0' + 0;
        }

        if (seconds > 9) {
          appendSeconds.innerHTML = seconds;
        }

        if (seconds > 59) {
          minutes++;
          appendMinutes.innerHTML = '0' + minutes;
          seconds = 0;
          appendSeconds.innerHTML = '0' + 0;
        }
      };
//  stop the event of the recurring calling of a function at a fixed delay set by the setInterval() function.
// onclick the statbtn will stat the timer 
      startBtn.onclick = () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
      };
// onclick the statbtn will stop the timer 
      stopBtn.onclick = () => {
        clearInterval(Interval);
      };
// onclick the statbtn will stat the timer 
      resetBtn.onclick = () => {
        clearInterval(Interval);
        tens = '00';
        seconds = '00';
        minutes = '00';
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHMTL = minutes;
      };