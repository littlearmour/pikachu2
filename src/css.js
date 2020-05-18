const string = `.pika * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
.pika*::before,
  *::after {
    box-sizing: border-box;
  }
  .pika {
    position: relative;
    background: #ffe600;
    min-height: 100vh;
  }
  /* 制作鼻子 */
  .nose {
    border: 10px solid black;
    border-color: black transparent transparent;
    border-bottom: none;
    width: 0px;
    height: 0px;
    position: relative;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    z-index: 10;
  }
  .nose-top {
    background: black;
    width: 20px;
    height: 8px;
    position: absolute;
    top: -18px;
    left: -10px;
    border-radius: 10px 10px 0 0;
  }
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(5deg);
    }
    66% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  .nose:hover {
    transform-origin: center bottom;
    animation: wave 100ms infinite linear;
  }
  .eye {
    position: absolute;
    width: 64px;
    height: 64px;
    border: 2px solid #000;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background: #2e2e2e;
    border-radius: 50%;
  }
  .eye::before {
    content: "";
    display: block;
    width: 30px;
    height: 30px;
    border: 2px solid #000;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    left: 4px;
    top: 2px;
  }
  .eye.left {
    transform: translateX(-100px);
  }
  .eye.right {
    transform: translateX(100px);
  }
  .mouth {
    position: absolute;
    /* border: 1px solid red; */
    width: 200px;
    height: 200px;
    left: 50%;
    top: 170px;
    margin-left: -100px;
  }
  .mouth .up {
    position: relative;
    top: -20px;
  }
  .mouth .up .lip {
    border: 3px solid #000;
    width: 100px;
    height: 30px;
    background: #ffe600;
    border-top-color: transparent;
    position: relative;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    z-index: 1;
  }
  .mouth .up .lip.left {
    border-radius: 0 0 0 50px;
    transform: rotate(-20deg) translateX(-54px);
  }
  .mouth .up .lip.right {
    border-radius: 0 0 50px 0;
    transform: rotate(20deg) translateX(54px);
  }
  .mouth .up .lip::before {
    content: "";
    display: block;
    position: absolute;
    background: #ffe600;
    width: 7px;
    height: 30px;
    bottom: 0;
  }
  .mouth .up .lip.left::before {
    right: -6px;
  }
  .mouth .up .lip.right::before {
    left: -6px;
  }
  .mouth .down {
    height: 180px;
    position: absolute;
    width: 100%;
    top: 5px;
    overflow: hidden;
  }
  .mouth .down .tongue {
    border: 3px solid black;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 30px;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/300px;
    background: #9b000a;
    overflow: hidden;
  }
  .mouth .down .tongue-b {
    /* border: 1px solid green; */
    width: 200px;
    height: 300px;
    position: absolute;
    bottom: -190px;
    left: 50%;
    margin-left: -100px;
    background: #ff485f;
    border-radius: 100px;
  }
  .face {
    border: 3px solid black;
    width: 88px;
    height: 88px;
    position: absolute;
    left: 50%;
    top: 200px;
    margin-left: -44px;
    z-index: 3;
    border-radius: 50%;
  }
  .face img {
    /* border: 1px solid red; */
    position: absolute;
    top: 50%;
    left: 50%;
  }
  .face.left > img {
    transform-origin: 0 0;
    transform: rotateY(180deg);
  }
  .face.left {
    transform: translateX(-180px);
    background: #ff0000;
  }
  .face.right {
    transform: translateX(180px);
    background: #ff0000;
  }
  `;
export default string;
