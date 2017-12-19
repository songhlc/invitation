<template>
  <div class="page">
    <div class="notday">
      <div class="center">
        <div id="a" >不是</div>
      </div>
      <div class="center">
        <div id="b" >周一</div>
      </div>
      <div class="center">
        <div id="c" >周二</div>
      </div>
      <div class="center">
        <div id="d" >周三</div>
      </div>
      <div class="center">
        <div id="e" >周四</div>
      </div>
      <div class="center">
        <div id="f" >周五</div>
      </div>
      <div class="center top-10">
        <div id="g" >工作日</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    mounted () {
      window.animate('a', 'show').then(() => {
        window.animate('a', 'top10')
        window.animate('b', 'show').then(() => {
          window.animate('a', 'top20')
          window.animate('b', 'top10')
          window.animate('c', 'show').then(() => {
            window.animate('a', 'top30')
            window.animate('b', 'top20')
            window.animate('c', 'top10')
            window.animate('d', 'show').then(() => {
              window.animate('a', 'top40')
              window.animate('b', 'top30')
              window.animate('c', 'top20')
              window.animate('d', 'top10')
              window.animate('e', 'show').then(() => {
                window.animate('a', 'top50')
                window.animate('b', 'top40')
                window.animate('c', 'top30')
                window.animate('d', 'top20')
                window.animate('e', 'top10')
                window.animate('f', 'show').then(() => {
                  window.animate('a', 'big')
                  window.animate('a', 'left10').then(() => {
                    window.animate('app', 'twinkbg')
                    window.animate('g', 'show')
                    window.animate('a', 'right10', 'left10')
                    window.animate('b', 'hidden')
                    window.animate('c', 'hidden')
                    window.animate('d', 'hidden')
                    window.animate('e', 'hidden')
                    window.animate('f', 'hidden').then(() => {
                      window.animate('a', 'left10', 'right10').then(() => {
                        window.animate('a', 'right10', 'left10')
                        setTimeout(() => {
                          document.getElementById('app').classList.remove('twinkbg')
                          window.animate('a', 'fadeOut', 'animated')
                          window.animate('g', 'fadeOut', 'animated').then(() => {
                            window.location.href = "#/p5"
                          })
                        }, 450)
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    }
  }
</script>
<style scoped>
  .notday div div{
    transition: all .3s ease-in-out;
    position: relative;
    text-align: center;
    opacity: 0;
    font-size: 2rem;
    width: 100%;
  }
  .hidden{
    opacity: 0 !important;
  }
  .top10{
    transform: translate(0, -2rem);
  }
  .top-10{
    transform: translate(0, 2rem);
  }
  .top20{
    transform: translate(0, -4rem);
  }
  .top30{
    transform: translate(0, -6rem);
  }
  .top40{
    transform: translate(0, -8rem);
  }
  .top50{
    transform: translate(0, -10rem);
  }
  .top0{
    transform: translate(0, 0);
  }
  .left10{
    transform: translate(-2rem, 0);
  }
  .right10{
    transform: translate(2rem, 0);
  }
  .big{
    font-size: 5rem !important;
  }
</style>
<style>

</style>
