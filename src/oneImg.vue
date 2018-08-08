<template>
  <div>
    <div style="align-items: center;">
      <text>下面显示一张图</text>
    </div>
    <div>
       <image class="img" ref="img" :src='imgUrl' @load="onImageLoad"/>
    </div>
  </div>
</template>

<script>
var animation = weex.requireModule("animation");
var modal = weex.requireModule('modal');

export default {
    data() {
      return {
        imgUrl:'https://s3.cn-north-1.amazonaws.com.cn/www.taocaimall.com/img/upload/img/upload/advert/df204d96-23c1-4919-b5de-7064cb090878.jpg'
      }
    },
    methods: {
      onImageLoad: function(event) {
        console.log(event.size.naturalWidth +',' + event.size.naturalHeight)
         var that = this;
         console.log('event = ' + event)
         console.log('eventName = ' + event.type)
         console.log('eventTarget = ' + event.target)
         const view = that.$refs['img']
         var str=''
         for (const key in view) {
            if (view.hasOwnProperty(key)) {
               const element = view[key];
               
             }
             console.log('key=' + key);
             str = str+','+key
          }
          console.log('Property = ' + str)
         //view和event.target为同一节点元素
         if(view === event.target){
           var srcValue = ''
           if (WXEnvironment.platform === 'Web'){
             srcValue = view.getAttribute('src')
           }else{
             srcValue = view.attr.src
           }
            modal.alert({
              message: 'ref获取的view和event.target是同一个元素  src = '+ srcValue,
              okTitle:'确定'
            },function(vaule){})
         }
         if (event.success){
            if (WXEnvironment.platform === 'Web') {
              view.style.width= event.size.naturalWidth+'px';
              view.style.height= event.size.naturalHeight+'px';
            }else{
  
              animation.transition(view,{
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
         }
       }
    }
}
</script>

<style scoped>
.img {
    width: 750px;
    height: 200px;
}
</style>
