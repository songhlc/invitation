<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  window.animate = function (id, clazz, removeClazz, timeout = 300) {
    document.getElementById(id).classList.remove('animated')
    document.getElementById(id).classList.remove(removeClazz)
    return new Promise(function(resolve, reject) {
      document.getElementById(id).classList.add('animated')
      document.getElementById(id).classList.add(clazz)
      setTimeout(() => {
        resolve()
      }, timeout)
    })
  }
  window.showhide = function (id, clazz, timeout = 300) {
    return new Promise(function(resolve, reject) {
      document.getElementById(id).classList.add('animated-200')
      document.getElementById(id).classList.add(clazz)
      setTimeout(() => {
        document.getElementById(id).classList.remove('animated-200')
        document.getElementById(id).classList.remove(clazz)
        resolve()
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
  window.twinkling = function (id) {
    return new Promise(function(resolve, reject) {
      document.getElementById(id).classList.add('twinkling')
      setTimeout(() => {
        document.getElementById(id).classList.remove('animate')
        resolve()
      }, 5000)
    })
  }
export default {
  name: 'app',
  mounted () {

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
</style>
