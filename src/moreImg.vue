<template>
  <div>
      <list>
          <cell>
              <div v-for="(source, i) in imgURLs" :key="i">
                  <image class="img"  @load="onImageLoad(source,$event)" :src="source"/>
             </div>
          </cell>
      </list>
  </div>
</template>

<script>
var modal = weex.requireModule('modal');
var animation = weex.requireModule("animation");
export default {
    data(){
        return {
            imgURLs:["https://s3.cn-north-1.amazonaws.com.cn/www.taocaimall.com/img/upload/img/upload/advert/4be7618c-6b60-4213-a922-5f31a4629895.jpg", 
            "https://s3.cn-north-1.amazonaws.com.cn/www.taocaimall.com/img/upload/img/upload/advert/0d4650ac-4b61-4791-a686-7497453c0c8b.jpg", 
            "https://s3.cn-north-1.amazonaws.com.cn/www.taocaimall.com/img/upload/img/upload/advert/c3933677-0816-4018-9b90-b0ee5c7d78d6.jpg", 
            "https://s3.cn-north-1.amazonaws.com.cn/www.taocaimall.com/img/upload/img/upload/advert/acca0c9a-1c98-458b-a7ac-82c9da1f5ecc.jpg", 
            "https://s3.cn-north-1.amazonaws.com.cn/www.taocaimall.com/img/upload/img/upload/advert/fcdd8888-43e3-4900-87d2-ad9ff1676198.jpg", 
            "https://s3.cn-north-1.amazonaws.com.cn/www.taocaimall.com/img/upload/img/upload/advert/b817198a-192b-430b-9b41-fb93db30bcd8.jpg", 
            "https://s3.cn-north-1.amazonaws.com.cn/www.taocaimall.com/img/upload/img/upload/advert/a9b02307-6621-42ab-946b-ed764f22f099.jpg", 
            "https://s3.cn-north-1.amazonaws.com.cn/www.taocaimall.com/img/upload/img/upload/advert/7cf034f5-4b0d-4986-984c-72d2cdce76fa.jpg", 
            "https://s3.cn-north-1.amazonaws.com.cn/www.taocaimall.com/img/upload/img/upload/advert/6abdeed1-5c9c-4722-a5c6-912d9e52b8e9.jpg", 
            "https://s3.cn-north-1.amazonaws.com.cn/www.taocaimall.com/img/upload/img/upload/advert/6121afde-d713-4fa9-9d1b-444c281bd722.jpg"]
        }
    },
    methods: {
        onImageLoad: function(source,event) {
          var that = this;
          console.log(source)
          console.log('event = ' + event)
          console.log('eventName = ' + event.type)
          console.log('eventTarget = ' + event.target)
          
          if (event.success){

              console.log(event.size.naturalWidth +',' + event.size.naturalHeight)

             var imageEl = event.target
             if (WXEnvironment.platform === 'Web') {
               imageEl.style.width= event.size.naturalWidth+'px';
               imageEl.style.height= event.size.naturalHeight+'px';
             }else{
  
               animation.transition(imageEl,{
                 styles:{
                   width: event.size.naturalWidth+'px',
                   height: event.size.naturalHeight+'px'
                 },
                 duration: 0,
                 timingFunction: 'ease',
                 delay: 0,
                 needLayout:true,
               }, function(){})
           
             }
            var attrSrc =''
            if(WXEnvironment.platform === 'Web'){
                attrSrc = imageEl.getAttribute('src')
            }else{
                attrSrc = imageEl.attr.src
            }
            if(attrSrc === source){
              console.log('src == source'); 
            }
            
          }
        }
    }
}
</script>

<style scoped>
.img {
  width: 750px;
  height: 500px;
}
</style>
