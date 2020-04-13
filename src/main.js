import string from "./css.js";

const player = {
  id: undefined,
  n: 1,
  speed: 100,
  ui: {
    demo: document.querySelector("#demo"),
    demo2: document.querySelector("#demo2"),
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast",
  },
  init: () => {
    // 初始化
    player.ui.demo.innerText = string.substr(0, player.n);
    player.ui.demo2.innerHTML = string.substr(0, player.n);
    player.bindEvents();
    player.play();
  },

  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: () => {
    player.n += 1;
    if (player.n > string.length) {
      window.clearInterval(player.id);
      return;
    }
    player.ui.demo.innerText = string.substr(0, player.n);
    player.ui.demo2.innerHTML = string.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: () => {
    player.pause();
    player.id = setInterval(player.run, player.speed);
  },
  pause: () => {
    window.clearInterval(player.id);
  },
  slow: () => {
    player.speed = 100;
    player.pause();
    player.play();
  },
  normal: () => {
    player.speed = 50;
    player.pause();
    player.play();
  },
  fast: () => {
    player.speed = 0;
    player.pause();
    player.play();
  },
};

player.init();
