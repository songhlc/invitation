<template>
  <div class="page">
    <div id="a" class="center">
      2018
    </div>
    <div id="b" class="center">大事件</div>
    <div id="e" class="center"></div>
    <div id="c" class="center">
      <div id="d" class="inner"></div>
    </div>
  </div>
</template>
<script>
  export default {
    mounted () {
      var a = document.getElementById('a')
      var b = document.getElementById('b')
      var c = document.getElementById('c')
      var e = document.getElementById('e')
      window.animate('a', 'zoomIn', 200).then(() => {
        window.animate('c', 'zoomIn', 200).then(() => {
          window.animate('d', 'flash')
          window.animate('d', 'infinite').then(() => {
            window.animate('c', 'flash', 'zoomIn')
            window.animate('e', 'fadeInUp')
            window.animate('b', 'fadeInDown', 'animated', 2000).then(() => {
              a.style.top = '200%'
              setTimeout(() => {
                window.animate('c', 'fadeOut', 'flash')
                b.style.left = '-100%'
                e.style.left = '200%'
                setTimeout(() => {
                  window.location.href = "#/p2"
                }, 1000)
              }, 500)
            })
          })
        })
      })
    }
  }
</script>
<style scoped>
  .page > div{
    opacity: 0;
  }

  #a{
    font-size: 12rem;
    text-align: center;
    margin: 0 auto;
    /*height: 210px;*/
    line-height: 420px;
    vertical-align: middle;
    color: rgba(62, 77, 162, 0.8);
    transform: rotate(90deg);
    transform-origin:center top;
    transition: top 1.5s;
  }
  #b{
    font-size: 3rem;
    color: #FFF;
    transition: left 1.5s;
    margin-top:1.8rem;
  }
  #e{
    width: 9rem;
    height: 3rem;
    background-repeat: no-repeat;
    background-image: url(https://h5.qufenqi.com/ipo/181628.hyperesources/P1_e1_5_2x.png);
    background-size: 100% 100%;
    margin-top:-1.8rem;
    transition: left 1.5s;
  }
  #c{
    width: 50%;
    padding-top: 50%;
    border: solid 1px #ff794e;
    border-radius: 50%;
    transition: left 1.5s;
  }
  #c .inner{
    width: 94%;
    height: 94%;
    border: solid 1px rgba(255, 121, 78, .5);
    border-radius: 90%;
    position: absolute;
    top: 3%;
    left: 3%;
  }
  .center{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
</style>
