const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');
      function setDate()
      {
        const now =new Date();
        const seconds = now.getSeconds();
        const secondsDegrees = ((seconds/60)*360)+90;
        const minutes = now.getMinutes();
        const minutesDegrees = ((minutes/60)*360)+90;
        const hours = now.getHours();
        const HoursDegrees = ((hours/12)*360)+90;
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
        minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
        hourHand.style.transform = `rotate(${HoursDegrees}deg)`;
      }
      setInterval(setDate,1000);





window.addEventListener('keydown',function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  });

  function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend',removeTransition));