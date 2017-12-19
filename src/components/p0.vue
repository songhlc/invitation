<template>
  <div class="page">
    <div class="center" style="color:#FFF;opacity: 1">{{'加载中:' + percent + '%'}}</div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        percent: '0'
      }
    },
    mounted () {
      var audio = document.getElementById('audio')
      // 已缓冲百分百
      audio.ontimeupdate = () => {
        audio.readyState == 4 && (this.percent = Math.round(audio.buffered.end(0) / audio.duration * 100))
      }
    },
    watch: {
      percent (val) {
        if (val >= 100) {
          setTimeout(function () {
            window.location.href = '#/p1'
          })
        }
      }
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
</style>
