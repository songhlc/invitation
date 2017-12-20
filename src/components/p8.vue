<template>
  <div>
    <div id="a" class="center" v-html="shortText" style="width: 80%"></div>
    <div class="center" v-show="isShow" style="font-size: 2rem;width: 100%;text-align:center;line-height:10rem;" @click="review">
      {{replay}}
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        fullText: '2018年1月13日 晚上六点整！<br>宁德闽东宾馆   不见不散！<br>不见红包绝对不散！<br>   欢迎您的光临! ',
        shortText: '',
        replay: '',
        isShow: false
      }
    },
    mounted () {
      var that = this
      setTimeout(function () {
        this.setText(0)
      }.bind(this), 200)
      setTimeout(function () {
        window.animate('app', 'twinkbg').then(() => {
          setTimeout(function () {
            document.getElementById('app').classList.remove('twinkbg')
            that.shortText = '<div></div>'
            that.replay = '点击观看'
            that.isShow = true
          }.bind(this), 7000)
        })
      }, 12500)
    },
    methods: {
      setText (i) {
        setTimeout(function () {
          if (i < this.fullText.length) {
            this.shortText = this.fullText.slice(0, i++) + '_'
            this.setText(i)
          }
        }.bind(this), 180)
      },
      review () {
        window.location.href = '/'
      }
    }
  }
</script>
<style scoped>
  #a{
    font-size: 1.4rem;
  }
</style>
