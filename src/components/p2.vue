<template>
  <div class="page">
    <div id="a">
      <span id="b" class="center" style="margin-left: -3rem;">接下来</span>
      <span id="c" class="center" style="margin-left: 3rem;">60秒</span>
      <span id="d" class="center">重磅消息</span>
      <span id="e" class="center"></span>
    </div>
  </div>
</template>
<script>
  export default {
    mounted () {
      window.showhide('b', 'fadeIn', 300).then(() => {
        window.showhide('c', 'fadeIn', 300).then(() => {
          window.twinkling('b')
          window.twinkling('c')
          setTimeout(() => {
            window.rotate('e')
            window.animate('d', 'fadeIn', 'animated', 1440).then(() => {
              window.twinkling('e').then(() => {
                document.getElementById('e').classList.remove('animated')
              })
              window.twinkling('d').then(() => {
                window.animate('d', 'fadeOut', 'animated').then(() => {
                  window.location.href = "#/p3"
                })
              })
            })
          }, 1000)
        })
      })
    }
  }
</script>
<style scoped>
  .page div span{
    opacity: 0;
    font-size: 2rem;
  }
  #b{

  }
  #e{
    width: 2rem;
    height: 2rem;
    display: block;
    border:solid 1px #ff794e;
    transform-origin: 50% 50% 0px;
    transform: translate(-50%,-50%) rotate(360deg) rotateY(0deg);
  }
</style>
