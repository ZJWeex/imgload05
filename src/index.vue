<template>
  <div class="wrapper">
    <image :src="logo" class="logo"/>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ImgColor from './ImgColor.js'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    }
  },
  created(){
    const self = this;
    ImgColor.changeImageColor(this.logo,'#ff0033', function(e){
      console.log('data:',e);
        self.logo = e;
    })
  },
  methods:{
    
  }
}
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 424px;
    height: 200px;
  }
  
</style>
