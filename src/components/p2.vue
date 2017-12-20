<template>
  <div class="page">
    <div id="a">
      <span id="b" class="center" style="margin-left: -3rem;">接下来</span>
      <span id="c" class="center" style="margin-left: 3rem;">60秒</span>
      <span id="d" class="center">重磅消息</span>
      <span id="e" class="center2"></span>
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
    margin-left:-1rem;
    margin-top:-1rem;
    transition: All 1.44s ease-in-out;
    -webkit-transition: All 1.44s ease-in-out;
    -moz-transition: All 1.44s ease-in-out;
    -o-transition: All 1.44s ease-in-out;
  }
</style>
