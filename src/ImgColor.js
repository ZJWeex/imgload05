var ImgColor = {
    /**
     * 根据主题颜色修改图片颜色
     * @param  {[type]}   imgUrl    图片url
     * @param  {[type]}   rgb_color 主题颜色
     * @param  {Function} callback  返回值 返回base64
     * @return {[type]}             [description]
     */
    changeImageColor: function(imgUrl, rgb_color, callback) {
        var threshold = 114; //默认颜色阀值 为 114 －>和默认图相关
        var img = new Image();
        img.src = imgUrl;
        //计算对应的通道值
        rgb_color = rgb_color || '#727272';
        var newR = parseInt('0x' + rgb_color.substr(1, 2));
        var newG = parseInt('0x' + rgb_color.substr(3, 2));
        var newB = parseInt('0x' + rgb_color.substr(5, 2));
        //图片加载后进行处理
        img.onload = function() {
            var width = img.width,
                height = img.height,
                canvas = document.createElement('canvas'),
                ctx = canvas.getContext('2d');
            canvas.width = width;
            canvas.height = height;
            // 将源图片复制到画布上
            ctx.drawImage(img, 0, 0, width, height);
            // 获取画布的像素信息
            var imageData = ctx.getImageData(0, 0, width, height);
            var data = imageData.data;
            // 对像素集合中的单个像素进行循环，每个像素是由4个通道组成，所以要注意
            var i = 0;
            while (i < data.length) {
                var r = data[i++],
                    g = data[i++],
                    b = data[i++],
                    a = data[i++];
                //计算透明度
                var alp = (255 - r) / (255 - threshold);
                //判断是否透明
                var isTransparent = (r == 255 && g == 255 && b == 255 && a == 255);
                if (isTransparent) {
                    data[i - 1] = 0;
                } else {
                    data[i - 4] = newR;
                    data[i - 3] = newG;
                    data[i - 2] = newB;
                    data[i - 1] = (a !== 255) ? (255 - a) : (alp * 255); //处理透明的图片和不透明的图片
                }
            }
            // 将修改后的代码复制回画布中
            ctx.putImageData(imageData, 0, 0);
            // 图片导出为 png 格式
            var type = 'png';
            var imgData = canvas.toDataURL(type);
            // console.log(imgData); // 生成base64
            callback && callback(imgData);
        };
    }
};

//使用方式 其中 data、style 为通过api读取的值
ImgColor.changeImageColor(
    data.icon, //'http://127.0.0.1:8081/images/app/img.png',
    style.dz_skin_custom_main_color, //'#f51ca6', 
    function(data) {
        console.log(data);
    }
);