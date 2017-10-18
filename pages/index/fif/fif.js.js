// pages/index/fif/fif.js.js
Page({
  data: {
    imgSrc: ""
  },

  upload_img: function () {
    var that = this
    wx.chooseImage({
      count: 1, // 默认9  
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片 
        var tempFilePaths = res.tempFilePaths
        that.setData({
          imgSrc: tempFilePaths[0]

        })
        wx.uploadFile({
          url: 'https://www.shenglf.com/Index.php/home/register/get',
          filePath: tempFilePaths[0],
          name: 'id_zimg',
          header: { "Content-Type": "multipart/form-data" },
          success: function (res) {
            var data = res.data
            console.log(data);
          },
          fail: function () {
            console.log('fail')
          }
        })
      }
    })

   
  }


})