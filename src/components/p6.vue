<template>
  <div style="padding: 10px;">
    <div id="text">
      <span id="a1">普天同庆 九州同乐 盛况空前 </span>
      <span id="a2">万人空巷 黄龙痛饮 不能错过 良辰好景 </span>
      <span id="a3">百岁之好 白头相守 比翼齐飞 </span>
      <span id="a4">连枝比翼 并蒂芙蓉 凤凰于飞 宜室宜家 </span>
      <span id="a5">百年好合 普天同庆 盛况空前 鸾交凤友 天凑之缘</span>
      <span id="a6">不能错过 普天同庆 普天同庆 </span>
      <span id="a7">普天同庆 普天同庆 盛况空前 盛况空前 </span>
      <span id="a8">九州同乐 普天同庆 鸾交凤友 不能错过 黄龙痛饮</span>
      <span id="a9">普天同庆 鸾交凤友 盛况空前 黄龙痛饮 不能错过</span>
      <span id="a10">白头相守 普天同庆 盛况空前 鸾交凤友</span>

      <span id="b12">普天同庆 九州同乐 盛况空前 不能错过</span>
      <span id="b11">盛况空前 不能错过 盛况空前 百年好合</span>
      <span id="b10">普天同庆 并蒂芙蓉 百年好合 不能错过</span>
      <span id="b9">普天同庆 天凑之缘 盛况空前 不能错过</span>
      <span id="b8">九州同乐 普天同庆 盛况空前 凤凰于飞</span>
      <span id="b7">天凑之缘 普天同庆 百年好合 万人空巷</span>
      <span id="b6">普天同庆 万人空巷 盛况空前 不能错过</span>
      <span id="b5">天凑之缘 九州同乐 盛况空前 凤凰于飞</span>
      <span id="b4">鸾交凤友 普天同庆 盛况空前 天凑之缘</span>
      <span id="b3">普天同庆 鸾交凤友 九州同乐 不能错过</span>
      <span id="b2">白头相守 普天同庆 鸾交凤友 凤凰于飞</span>
      <span id="b1">九州同乐 普天同庆 盛况空前 不能错过</span>
    </div>
    <div id="big" class="center">不能错过</div>
  </div>
</template>
<script>
  export default {
    mounted () {
      window.animate('big', 'zoomIn').then(() => {
        window.animate('a1', 'fadeIn').then(() => {
          window.animate('a2', 'fadeIn').then(() => {
            window.animate('a3', 'fadeIn').then(() => {
              window.animate('a4', 'fadeIn').then(() => {
                window.animate('a5', 'fadeIn').then(() => {
                  window.animate('a6', 'fadeIn').then(() => {
                    window.animate('a7', 'fadeIn').then(() => {
                      window.animate('a8', 'fadeIn').then(() => {
                        window.animate('a9', 'fadeIn').then(() => {
                          window.animate('a10', 'fadeIn').then(() => {
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
        window.animate('b1', 'fadeIn').then(() => {
          window.animate('b2', 'fadeIn').then(() => {
            window.animate('b3', 'fadeIn').then(() => {
              window.animate('b4', 'fadeIn').then(() => {
                window.animate('b5', 'fadeIn').then(() => {
                  window.animate('b6', 'fadeIn').then(() => {
                    window.animate('b7', 'fadeIn').then(() => {
                      window.animate('b8', 'fadeIn').then(() => {
                        window.animate('b9', 'fadeIn').then(() => {
                          window.animate('b10', 'fadeIn').then(() => {
                            window.animate('b11', 'fadeIn').then(() => {
                              window.animate('b12', 'fadeIn').then(() => {
                                window.animate('text', 'fadeOut').then(() => {
                                  window.animate('big', 'zoomOut').then(() => {
                                    window.location.href = "#/p7"
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
  div span {
    opacity: 0;
    font-size: 1.3rem;
  }
  .inbottom{
    position: absolute;
    width: 100%;
    bottom:0;
    left: 0;
    right: 0;
  }
  #big{
    font-size: 5rem;
    text-align: center;
    line-height: 5rem;
  }
</style>
