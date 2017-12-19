<template>
  <div>
    <span id="a1">闽</span>
    <span id="a2">闽</span>
    <span id="a3">闽</span>
    <span id="a4">闽</span>
    <span id="a5">闽</span>
    <span id="b1">东</span>
    <span id="b2">东</span>
    <span id="b3">东</span>
    <span id="b4">东</span>
    <span id="b5">东</span>

    <span id="c1">宾</span>
    <span id="c2">宾</span>
    <span id="c3">宾</span>
    <span id="c4">宾</span>
    <span id="c5">宾</span>
    <span id="d1">馆</span>
    <span id="d2">馆</span>
    <span id="d3">馆</span>
    <span id="d4">馆</span>
    <span id="d5">馆</span>
    <span id="e1" class="center">闽东宾馆</span>
    <span id="e2" class="center">三层宴会厅</span>
  </div>
</template>
<script>
  export default {
    methods: {
      first () {
        setTimeout(() => {
          document.getElementById('a1').style.left = '100%'
          setTimeout(() => {
            document.getElementById('a2').style.left = '100%'
            setTimeout(() => {
              document.getElementById('a3').style.left = '100%'
              setTimeout(() => {
                document.getElementById('a4').style.left = '100%'
                setTimeout(() => {
                  document.getElementById('a5').style.left = '100%'
                  setTimeout(() => {
                    document.getElementById('b1').style.left = '-50%'
                    setTimeout(() => {
                      document.getElementById('b2').style.left = '-50%'
                      setTimeout(() => {
                        document.getElementById('b3').style.left = '-50%'
                        setTimeout(() => {
                          document.getElementById('b4').style.left = '-50%'
                          setTimeout(() => {
                            document.getElementById('b5').style.left = '-50%'
                            setTimeout(() => {
                              document.getElementById('c1').style.top = '100%'
                              setTimeout(() => {
                                document.getElementById('c2').style.top = '100%'
                                setTimeout(() => {
                                  document.getElementById('c3').style.top = '100%'
                                  setTimeout(() => {
                                    document.getElementById('c4').style.top = '100%'
                                    setTimeout(() => {
                                      document.getElementById('c5').style.top = '100%'
                                      setTimeout(() => {
                                        document.getElementById('d1').style.top = '-50%'
                                        setTimeout(() => {
                                          document.getElementById('d2').style.top = '-50%'
                                          setTimeout(() => {
                                            document.getElementById('d3').style.top = '-50%'
                                            setTimeout(() => {
                                              document.getElementById('d4').style.top = '-50%'
                                              setTimeout(() => {
                                                document.getElementById('d5').style.top = '-50%'
                                                this.second()
                                              }, 100)
                                            }, 100)
                                          }, 100)
                                        }, 100)
                                      }, 400)
                                    }, 100)
                                  }, 100)
                                }, 100)
                              }, 100)
                            }, 400)
                          }, 100)
                        }, 100)
                      }, 100)
                    }, 100)
                  }, 400)
                }, 100)
              }, 100)
            }, 100)
          }, 100)
        }, 100)
      },
      second () {
        setTimeout(() => {
          document.getElementById('a1').style.left = '-50%'
          setTimeout(() => {
            document.getElementById('a2').style.left = '-50%'
            setTimeout(() => {
              document.getElementById('a3').style.left = '-50%'
              setTimeout(() => {
                document.getElementById('a4').style.left = '-50%'
                setTimeout(() => {
                  document.getElementById('a5').style.left = '-50%'
                }, 100)
              }, 100)
            }, 100)
          }, 100)
        }, 100)
        setTimeout(() => {
          document.getElementById('b1').style.left = '100%'
          setTimeout(() => {
            document.getElementById('b2').style.left = '100%'
            setTimeout(() => {
              document.getElementById('b3').style.left = '100%'
              setTimeout(() => {
                document.getElementById('b4').style.left = '100%'
                setTimeout(() => {
                  document.getElementById('b5').style.left = '100%'
                }, 100)
              }, 100)
            }, 100)
          }, 100)
        }, 400)
        setTimeout(() => {
          document.getElementById('c1').style.top = '-50%'
          setTimeout(() => {
            document.getElementById('c2').style.top = '-50%'
            setTimeout(() => {
              document.getElementById('c3').style.top = '-50%'
              setTimeout(() => {
                document.getElementById('c4').style.top = '-50%'
                setTimeout(() => {
                  document.getElementById('c5').style.top = '-50%'
                }, 100)
              }, 100)
            }, 100)
          }, 100)
        }, 400)
        setTimeout(() => {
          document.getElementById('d1').style.top = '100%'
          setTimeout(() => {
            document.getElementById('d2').style.top = '100%'
            setTimeout(() => {
              document.getElementById('d3').style.top = '100%'
              setTimeout(() => {
                document.getElementById('d4').style.top = '100%'
                setTimeout(() => {
                  document.getElementById('d5').style.top = '100%'
                  setTimeout(() => {
                    window.animate('e1', 'zoomIn').then(() => {
                      window.animate('e2', 'zoomIn').then(() => {
                        setTimeout(function () {
                          window.location.href = "#/p8"
                        }, 1000)
                      })
                    })
                  }, 200)
                }, 50)
              }, 50)
            }, 50)
          }, 50)
        }, 400)
      }
    },
    mounted () {
      this.first()
    }
  }
</script>
<style scoped>
  div>span{
    transition: all .2s ease-in-out;
    position: absolute;
  }
  #a1,#a2,#a3,#a4,#a5 {
    top: 5rem;
    font-size: 4rem;
    left: -50%;
  }
  #b1,#b2,#b3,#b4,#b5 {
    top: 10rem;
    font-size: 6rem;
    left: 100%;
  }
  #c1,#c2,#c3,#c4,#c5 {
    transition: all .3s ease-in-out;
    left: 30%;
    margin-left: -3rem;
    font-size: 6rem;
    top: -50%;
  }
  #d1,#d2,#d3,#d4,#d5 {
    transition: all .2s ease-in-out;
    left: 60%;
    margin-left: -2.5rem;
    font-size: 5rem;
    top: 100%;
  }
  #e1{
    font-size: 1.6rem;
    opacity: 0;
    margin-top: -2rem;
  }
  #e2{
    font-size: 2rem;
    opacity: 0;
    margin-bottom: -4rem;
  }
</style>
