import string from "./css.js";

const player = {
  id: undefined,
  time: 100,
  ui: {
    demo: document.querySelector("#demo"),
    demo2: document.querySelector("#demo2"),
  },
  n: 1,
  init: () => {
    //初始化方法,对象需要一个初始化方法  属性
    player.ui.demo.innerText = string.substr(0, player.n);
    player.ui.demo2.innerHTML = string.substr(0, player.n);
    player.play();
    player.bindEvents();
  },
  events: {
    "#btnPause": "pause", //这里不能用player，没有定义完
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast",
  },
  bindEvents: () => {
    //绑定事件
    for (let key in player.events) {
      //遍历哈希
      if (player.events.hasOwnProperty(key)) {
        //判断key是不是player的自身属性，而不是继承来的属性
        const value = player.events[key]; //pause/play/slow字符串  通过字符串拿到对应的方法
        document.querySelector(key).onclick = player[value]; //key就是选择器    用value作为key去取他对应的player.pause方法
      }
    }
  },
  run: () => {
    //方法
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
    console.log("hi");
    player.id = setInterval(player.run, player.time);
  },
  pause: () => {
    window.clearInterval(player.id);
  },
  slow: () => {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: () => {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: () => {
    player.pause();
    player.time = 0;
    player.play();
  },
};

player.init(); //调用player的初始化方法
