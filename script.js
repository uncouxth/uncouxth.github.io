const showBubble = () => {
  document.getElementById("bubble").style.opacity = 1;
  setTimeout(() => {document.getElementById("bubble").style.opacity = 0;}, 3000);
}

const drawWaves = () => {
  anime({
    targets: '.ground-line',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'cubicBezier(0.00, 0.01, 0.350, 1.020)',
    duration: eventTimings.wave.duration,
    delay: eventTimings.wave.delay,
    loop: false
  });
}

const drawDoor = () => {
  anime({
    targets: '.door2',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'cubicBezier(0.00, 0.01, 0.350, 1.020)',
    duration: eventTimings.door.duration,
    delay: eventTimings.door.delay,
    loop: false
  });

  anime({
    targets: '.knob',
    opacity: 1,
    delay: eventTimings.knob.delay,
    duration: 1,
    loop: false
  });

  anime({
    targets: '.knob',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'cubicBezier(0.00, 0.01, 0.350, 1.020)',
    duration: eventTimings.knob.duration,
    delay: eventTimings.knob.delay,
    loop: false
  });

  // anime({
  //   targets: '.sky',
  //   backgroundColor: 'rgb(15 15 15)',
  //   delay: 3250,
  //   duration: 500,
  // });
};

const eventTimings  = {
  sky: {
    delay: 2300,
  },
  wave: {
    duration: 3000,
    delay: 500,
  },
  door: {
    duration: 2150,
    delay: 1350,
  },
  knob: {
    duration: 450,
    delay: 4550,
  }
}

const events = () => {
  drawWaves();
  // drawWind();
  // drawRock();
  drawDoor();
}

events();