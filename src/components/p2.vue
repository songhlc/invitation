<template>
  <div class="page">
    <div id="a">
      <span id="b">接下来</span>
      <span id="c">100秒</span>
    </div>
  </div>
</template>
<script>
  export default {
    mounted () {
      window.showhide('b', 'fadeIn', 300).then(() => {
        window.showhide('c', 'fadeIn', 300).then(() => {
          window.twinkling('b')
          window.twinkling('c')
        })
      })
    }
  }
</script>
<style scoped>
  .page div span{
    opacity: 0;
  }
  #b{

  }
</style>
