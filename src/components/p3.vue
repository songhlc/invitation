<template>
  <div class="page">
    <span id="a" class="center flg">3</span>
    <span id="b" class="center flg">2</span>
    <span id="c" class="center flg">1</span>
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
      window.showhide('a', 'zoomIn', 1000).then(() => {
        window.showhide('b', 'zoomIn', 1000).then(() => {
          window.showhide('c', 'zoomIn', 1000).then(() => {
            window.promisefn().then(() => {
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
  .page span.flg{
    font-size: 16rem;
    color: rgba(255, 121, 78, .4);
  }
</style>
