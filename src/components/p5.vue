<template>
  <div class="page">
    <div id="a" class="center">
      <span class="we">我们</span></div>
    <div id="c" class="center">
      <div id="b">在周六</div>
    </div>
  </div>
</template>
<script>
  export default {
    mounted () {
      window.animate('a', 'rollIn').then(() => {
        window.animate('c', 'zoomIn', 'ttt', 1500, 'animated1500')
        window.animate('b', 'six')
        setTimeout(() => {
          window.animate('app', 'twinkbg').then(() => {
            setTimeout(() => {
              document.getElementById('app').classList.remove('twinkbg')
              window.location.href = "#/p6"
            }, 450)
          })
        }, 1500)
      })
    }
  }
</script>
<style scoped>
  .we {
    position: relative;
    left: -7rem;
    top: -1.35rem;
    font-size: 2rem;
  }
  #a {
    opacity: 0;
  }
  #b{
    font-size: 2rem;
  }
  #c{
    opacity: 0;
    transition: all 2s ease-in-out;
  }
  .six{
    animation: rotate720;
    animation-duration: 1.5s;
  }
  @-webkit-keyframes rotate720 {
    0% {
      transform: rotateY(0deg);
    }
    12.5% {
      transform: rotateY(90deg);
    }
    25% {
      transform: rotateY(0deg);
    }
    37.5% {
      transform: rotateY(-90deg);
    }
    50% {
      transform: rotateY(0deg);
    }
    62.5% {
      transform: rotateY(-90deg);
    }
    75% {
      transform: rotateY(0deg);
    }
    87.5% {
      transform: rotateY(90deg);
    }
    100% {
      transform: rotateY(0deg);
    }

  }

  @keyframes rotate720 {
    0% {
      transform: rotateY(0deg);
    }
    12.5% {
      transform: rotateY(90deg);
    }
    25% {
      transform: rotateY(0deg);
    }
    37.5% {
      transform: rotateY(-90deg);
    }
    50% {
      transform: rotateY(0deg);
    }
    62.5% {
      transform: rotateY(-90deg);
    }
    75% {
      transform: rotateY(0deg);
    }
    87.5% {
      transform: rotateY(90deg);
    }
    100% {
      transform: rotateY(0deg);
    }
  }
</style>
