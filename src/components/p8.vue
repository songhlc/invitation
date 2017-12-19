<template>
  <div>
    <div id="a" class="center" v-html="shortText" style="width: 80%"></div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        fullText: '2018年1月13日 晚上六点整！<br>宁德闽东宾馆   不见不散！<br>不见红包绝对不散！<br>   欢迎您的光临! ',
        shortText: ''
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
      }
    }
  }
</script>
<style scoped>
  #a{
    font-size: 1.4rem;
  }
</style>
