<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  window.showhide = function (id) {
    return new Promise(function(resolve, reject) {
      document.getElementById(id).classList.add('animate')
      setTimeout(() => {
        document.getElementById(id).classList.remove('animate')
        resolve()
      }, 300)
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
  .animate{
    opacity: 1 !important;
  }
  .twinkling{
    -webkit-animation: twinkling .3s infinite ease-in-out
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
