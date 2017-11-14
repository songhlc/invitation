<template>
  <div class="page">
    <div id="a">2017</div>
    <div id="b">大事件</div>
  </div>
</template>
<script>
  export default {
    mounted () {
      window.showhide('a').then(() => {
        window.showhide('b').then(() => {
          window.twinkling('a')
          window.twinkling('b')
        })
      })

      setTimeout(() => {
        window.location.hash = '#/p2'
      }, 30000)
    }
  }
</script>
<style scoped>
  .page > div{
    opacity: 0;
  }
</style>
