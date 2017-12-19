<template>
  <div class="page">
    <span id="a" class="rotate center"></span>
    <span id="b" class="rotate center"></span>
    <span id="c" class="rotate center"></span>
    <span id="d" class="rotate center"></span>
    <span id="e" class="rotate center"></span>
    <span id="f" class="rotate center"></span>
    <span id="g" class="rotate center"></span>
    <span id="h" class="rotate center"></span>
    <span id="i" class="rotate center"></span>
    <span id="j" class="rotate center"></span>
    <span id="k" class="center" style="margin-left: -3rem;">贰零壹捌</span>
    <span id="l" class="center" style="margin-left: 3rem;">2018</span>
    <span id="m" class="center" style="margin-left: -3rem;">贰零壹捌</span>
    <span id="n" class="center" style="margin-left: 3rem;">2018</span>
    <span id="o" class="center" style="margin-left: -3rem;">壹月拾叄</span>
    <span id="p" class="center" style="margin-left: 3rem;">1月13日</span>
    <span id="q" class="center" style="margin-left: -3rem;">壹月拾叄</span>
    <span id="r" class="center" style="margin-left: 3rem;">1月13日</span>
    <span id="s" class="center" style="margin-left: -3rem;">宋江凌</span>
    <span id="t" class="center" style="margin-left: 3rem;">黄晓夏</span>
    <span id="u" class="center">要结婚啦</span>
  </div>
</template>
<script>
  export default {
    mounted () {
      window.rotate('a', 0, 30)
      window.rotate('b', 15, 30)
      window.rotate('c', 30, 30)
      window.rotate('d', 45, 30)
      window.rotate('e', 60, 30)
      window.rotate('f', 75, 30)
      window.rotate('g', 90, 30)
      window.rotate('h', 105, 30)
      window.rotate('i', 120, 30)
      window.rotate('j', 135, 30).then(() => {
        window.animate('a', 'fadeOut', 'animated')
        window.animate('b', 'fadeOut', 'animated')
        window.animate('c', 'fadeOut', 'animated')
        window.animate('d', 'fadeOut', 'animated')
        window.animate('e', 'fadeOut', 'animated')
        window.animate('f', 'fadeOut', 'animated')
        window.animate('g', 'fadeOut', 'animated')
        window.animate('h', 'fadeOut', 'animated')
        window.animate('i', 'fadeOut', 'animated')
        window.animate('j', 'fadeOut', 'animated').then(() => {
          window.showhide('k', 'fadeIn', 450).then(() => {
            window.showhide('l', 'fadeIn', 450).then(() => {
              window.showhide('m', 'fadeIn', 450).then(() => {
                window.showhide('n', 'fadeIn', 450).then(() => {
                  window.showhide('o', 'fadeIn', 450).then(() => {
                    window.showhide('p', 'fadeIn', 450).then(() => {
                      window.showhide('q', 'fadeIn', 450).then(() => {
                        window.showhide('r', 'fadeIn', 450).then(() => {
                          window.showhide('s', 'fadeIn', 450).then(() => {
                            window.showhide('t', 'fadeIn', 450).then(() => {
                              window.showhide('s', 'fadeIn', 450).then(() => {
                                window.showhide('t', 'fadeIn', 450).then(() => {
                                  window.danmu('要结婚啦', 180)
                                    window.twinkling('u').then(() => {
                                      window.twinkling('u').then(() => {
                                        window.twinkling('u').then(() => {
                                          window.location.href = "#/p4"
                                          window.twinkling('u').then(() => {
                                            window.twinkling('u').then(() => {
                                              window.twinkling('u').then(() => {

                                              })
                                            })
                                          })
                                        })
                                      })
                                    })
                                })
                              })
                            })
                          })
                        })
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
  .page span{
    opacity: 0;
    font-size: 2rem;
  }
  .rotate{
    width: 2rem;
    height: 2rem;
    display: block;
    border:solid 1px #ff794e;
    transform-origin: 50% 50% 0px;
    transform: translate(-50%,-50%) rotate(0deg) rotateY(0deg);
  }
</style>
