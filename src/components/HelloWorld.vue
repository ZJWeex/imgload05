<template>
  <div>
    <text class="button" @click="jumpOne">单个图片自适应</text>
    <text class="button" @click="jumpMore">列表图片自适应</text>
  </div>
</template>

<script>
var navigator = weex.requireModule('navigator')
export default {
  methods: {
    jumpOne:function() {
      navigator.push({
        url:'http://192.168.15.227:8081/dist/oneImg.js',
        animated:"true"
      },event => {})
    },
    jumpMore:function() {
      navigator.push({
        url:'http://192.168.15.227:8081/dist/moreImg.js',
        animated:"true"
      }, event => {})
    }
  }
}
</script>


<style scoped>
.button {
    margin: 50px;
    padding: 20px;
    font-size: 40px;
    text-align: center;
    color: #727272;
    border-width: 2px;
    border-color: #DDDDDD;
  }
</style>

