<template>
  <div id="app">
    <router-view/>
    <audio id="audio" :src="src" ref="audio"></audio>
  </div>
</template>

<script>
  window.animate = function (id, clazz, removeClazz, timeout = 300, animated = 'animated') {
    document.getElementById(id).classList.remove(animated)
    document.getElementById(id).classList.remove(removeClazz)
    return new Promise(function(resolve, reject) {
      document.getElementById(id).classList.add(animated)
      document.getElementById(id).classList.add(clazz)
      setTimeout(() => {
        resolve()
      }, timeout)
    })
  }
  window.showhide = function (id, clazz, timeout = 300, wait = 0) {
    return new Promise(function(resolve, reject) {
      document.getElementById(id).classList.add('animated-200')
      document.getElementById(id).classList.add(clazz)
      setTimeout(() => {
        document.getElementById(id).classList.remove('animated-200')
        document.getElementById(id).classList.remove(clazz)
        setTimeout(() => {
          resolve()
        }, wait)
      }, timeout)
    })
  }
  window.promisefn = function (timeout = 300) {
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        resolve()
      }, timeout)
    })
  }
  window.rotate = function (id, defaultdeg = 0, defualtMaxHeight = 15, timeout = 1442) {
    return new Promise(function(resolve, reject) {
      var deg = defaultdeg
      document.getElementById(id).classList.add('animated')
      document.getElementById(id).classList.add('rotateStyle' + defaultdeg)

//      var t = setInterval(() => {
      document.getElementById(id).style.marginLeft = '-8rem'
      document.getElementById(id).style.marginTop = '-8rem'
      document.getElementById(id).style.width = '16rem'
      document.getElementById(id).style.height = '16rem'
//        var rate = (2 + deg * defualtMaxHeight / 360) / 2
//      document.getElementById(id).style.transform = 'translate(-50%,-50%) rotate(360deg)'
//        deg++
//      }, 100)
      setTimeout(() => {
        clearInterval(t)
        resolve()
      }, timeout)
    })
  }
  window.twinkling = function (id, times = 1000) {
    return new Promise(function(resolve, reject) {
      document.getElementById(id).classList.add('twinkling')
      setTimeout(() => {
        document.getElementById(id).classList.remove('twinkling')
        resolve()
      }, times)
    })
  }
  window.danmu = function (text, times = 70) {
    for (var i = 0; i < times; i++) {
      var top = 0 + i * 30 * Math.random() % 500
      var right = '-20%'
      var id = 'danmu_' + i
      var node = document.createElement('div')
      node.id = id
      if (i % 3 === 0) {
        node.classList.add('danmu-1')
      } else if (i % 3 === 1) {
        node.classList.add('danmu-2')
      } else if (i % 3 === 2) {
        node.classList.add('danmu-3')
      }

      node.style.top = top + 'px'
      node.style.right = right
      node.innerText = text
      document.body.appendChild(node);
      (function (_id, index) {
        setTimeout(() => {
          var el = document.getElementById(_id)
          el.style.right = el.style.right.replace('%', '') - 0 + 400 + '%'
        }, index * 100 % 2000)
      })(id, i)

    }
  }
export default {
  name: 'app',
  data () {
    return {
      src: './static/bgmusic2.m4a',
      percent: '0',
      interval: ''
    }
  },
  mounted () {
      this.audioAutoPlay()
  },
  methods: {
    audioAutoPlay () {
//      var audio = document.getElementById('audio')
//      audio.play()
//      document.addEventListener('WeixinJSBridgeReady', function () {
//        audio.play()
//      }, false)
    }
  }
}
</script>

<style>
  html,body{
    height: 100%;
    padding: 0;
    margin:0;
  }
  #app {
    background-color: #000;
    color: #ff794e;
    height: 100%;
  }
  .page{
    height: 100%;
    overflow: hidden;
  }
  .animated{
    animation-duration: 1s;
    opacity: 1 !important;
  }
  .animated1500{
    animation-duration: 1.5s;
    opacity: 1 !important;
  }
  .animated-200{
    animation-duration: .2s;
    opacity: 1 !important;
  }
  @-webkit-keyframes fadeInDown {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0,-100%,0);
      transform: translate3d(0,-100%,0)
    }

    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none
    }
  }

  @keyframes fadeInDown {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0,-100%,0);
      transform: translate(-50%,-50%) translate3d(0,-100%,0)
    }

    to {
      opacity: 1;
      -webkit-transform: translate(-50%,-50%) ;
      transform: translate(-50%,-50%)
    }
  }
  @-webkit-keyframes zoomIn {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(.3,.3,.3);
      transform: translate(-50%,-50%) scale3d(.3,.3,.3)
    }

    50% {
      opacity: 1
    }
  }

  @keyframes zoomIn {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(.3,.3,.3);
      transform: translate(-50%,-50%) scale3d(.3,.3,.3)
    }

    50% {
      opacity: 1
    }
  }
  @-webkit-keyframes fadeInUp {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0,100%,0);
      transform: translate(-50%,-50%) translate3d(0,100%,0)
    }

    to {
      opacity: 1;
      -webkit-transform: translate(-50%,-50%) ;
      transform: translate(-50%,-50%)
    }
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0,100%,0);
      transform: translate(-50%,-50%) translate3d(0,100%,0)
    }

    to {
      opacity: 1;
      -webkit-transform: translate(-50%,-50%) ;
      transform: translate(-50%,-50%)
    }
  }
  .twinkling{
    -webkit-animation: twinkling .1s infinite ease-in-out
  }
  @-webkit-keyframes twinkling{
    0%{
      opacity: 0.5;
    }
    100%{
      opacity: 1;
    }
  }
  @keyframes twinkling{
    0%{
      opacity: 0.5;
    }
    100%{
      opacity: 1;
    }
  }
  .center{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  .center2{
    position: absolute;
    left: 50%;
    top: 50%;
  }
  .danmu-2{
    color:#42b983;
    right: 0;
    position: fixed;
    font-size: 14px;
    transition: all 10s;
  }
  .danmu-1{
    color:#42b983;
    right: 0;
    position: fixed;
    font-size: 14px;
    transition: all 10s;
  }
  .danmu-3{
    color:#ff794e;
    right: 0;
    position: fixed;
    font-size: 14px;
    transition: all 10s;
  }
  .twinkbg{
    -webkit-animation: twinkling .15s infinite ease-in-out
  }
  @-webkit-keyframes twinkbg{
    0%{
      background-color: #000 !important;
    }
    100%{
      background-color: #e8ebed !important;
    }
  }
  @keyframes twinkbg{
    0%{
      background-color: #000 !important;
    }
    100%{
      background-color: #e8ebed !important;
    }
  }
  .bgwhite{
    background-color: #e8ebed !important;
  }
  .rotateStyle0 {
    transform: rotate(360deg) !important;
    -webkit-transform:rotate(360deg) !important;;
    -moz-transform: rotate(360deg) !important;;
    -o-transform: rotate(360deg) !important;;
    -ms-transform: rotate(360deg) !important;;
  }
</style>
