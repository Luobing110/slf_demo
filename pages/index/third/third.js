var app = getApp()
Page({
  data: {
    allState: '',
    tempFilePathsZ: '',
    tempFilePathsF: '',
    tempFilePathsR: '',
    sss: '',
    ttt: '',
    fff: '',
    idxx: '0',
    objectId: '3'
  },
  onLoad: function (options) {
    var objectId = options.objectId;//接收传来的参数
    this.setData({
      objectId: objectId
    })
  },
  onShow: function (option) {
    var that = this;
    var hq1 = '4'
    this.setData({
      sss: hq1
    })
    var hq2 = '4'
    this.setData({
      ttt: hq2
    })
   
    //获取第四页的缓存
    var fff = wx.getStorageSync('fff')
    this.setData({
      fff: fff
    })
  },
  // 上传生份证正面图片
  chooseimageZ: function () {
    var _this = this;
    wx.chooseImage({
      count: 3, // 默认9  
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片  
        _this.setData({
          tempFilePathsZ: res.tempFilePaths,
        })
        var tempFilePathsZ = res.tempFilePaths;
        upload_file(tempFilePathsZ, 'file1')
      }
    })
  },
  //清除图片数据
  clearPicZ: function () {
    this.setData({
      tempFilePathsZ: ''
    })
  },

  // 上传生份证反面图片
  chooseimageF: function () {
    if (this.data.tempFilePathsZ == 0) {
      wx.showModal({
        title: '提示',
        content: '请先上传身份证正面照片'
      })
    } else {
      var _this = this;
      wx.chooseImage({
        count: 1, // 默认9  
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
        success: function (res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片  
          _this.setData({
            tempFilePathsF: res.tempFilePaths
          })
          var tempFilePathsF = res.tempFilePaths;
          upload_file(tempFilePathsF, 'file2')
        }
      })
    }
  },
  //清除图片数据
  clearPicF: function () {
    this.setData({
      tempFilePathsF: ''
    })
  },
  //清除图片数据
  clearPicP: function () {
    this.setData({
      tempFilePathsP: ''
    })
  },
  //上传征信报告
  /*chooseimageR: function () {
    if (this.data.tempFilePathsZ == 0) {
      wx.showModal({
        title: '提示',
        content: '请先上传身份证正面照片'
      })
    } else if (this.data.tempFilePathsF == 0) {
      wx.showModal({
        title: '提示',
        content: '请先上传身份证反面照片'
      })
    }
    else {
      var _this = this;
      wx.chooseImage({
        count: 1, // 默认9  
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
        success: function (res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片  
          _this.setData({
            tempFilePathsR: res.tempFilePaths
          })
          var tempFilePathsR = res.tempFilePaths;
          upload_file(tempFilePathsR, 'file3')

        }
      })
    }
  },
  //清除图片数据
  clearPicR: function () {
    this.setData({
      tempFilePathsR: ''
    })
  },*/
 // 上传贷款产品
  chooseimageR: function () {
    if (this.data.tempFilePathsZ == 0) {
      wx.showModal({
        title: '提示',
        content: '请先上传身份证正面照片'
      })
    } else if (this.data.tempFilePathsF == 0) {
      wx.showModal({
        title: '提示',
        content: '请先上传身份证背面照片'
      })
    }
    else {
      var _this = this;
      wx.chooseImage({
        count: 1, // 默认9  
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
        success: function (res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片  
          _this.setData({
            tempFilePathsR: res.tempFilePaths
          })
          var tempFilePathsR = res.tempFilePaths;
          upload_file(tempFilePathsR, 'file3')

        }
      })
    }
  },
  clearPicR: function () {
    this.setData({
      tempFilePathsR: ''
    })
  },
  done: function () {
    if (this.data.tempFilePathsZ == 0) {
      wx.showModal({
        title: '提示',
        content: '请上传身份证正面照片'
      })
    }
    else if (this.data.tempFilePathsF == 0) {
      wx.showModal({
        title: '提示',
        content: '请上传身份证背面照片'
      })
    }
    // else if (this.data.tempFilePathsR == 0) {
    //   wx.showModal({
    //     title: '提示',
    //     content: '请上传征信报告截图'
    //   })
    //  }
     else if (this.data.tempFilePathsR == 0) {
      if (this.data.objectId == 0) {
        wx.showModal({
          title: '提示',
          content: '请上传”社保记录“截图'
        })
      } else if (this.data.objectId == 1) {
        wx.showModal({
          title: '提示',
          content: '请上传”公积金缴纳记录“截图'
        })
      } else if (this.data.objectId == 2) {
        wx.showModal({
          title: '提示',
          content: '请上传”寿险保单“截图'
        })
      } else {
        wx.showModal({
          title: '提示',
          content: '请上传”工资流水“截图'
        })
      }

    }
    else if (this.data.allState == 1) {
      wx.showModal({
        title: '提示',
        content: '资料提交失败'
      })
    }
    else {
      wx.setStorageSync('ttt', '4')
      wx.navigateTo({
        url: '../fourth/fourth',
      })
      //'';
      // var ssid=''
      // wx.getStorage({
      //   key: 'ssid',
      //   success: function (res) {
      //     console.log(res)
      //   }
      // })
    }
  }
})
//图片上传函数
function upload_file(temp, file) {
  //console.log(temp);
  var SERVER_URL = "https://www.shenglf.com/Index.php/home/register/reg.html";
  wx.uploadFile({
    url: SERVER_URL,
    header: {
      'content-type': 'multipart/form-data',
    },
    filePath: temp[0],
    name: file,
    success: function (res) {
      console.log(res.data);
    },
    fail: function (res) {
      console.log(res)
    }
  })

}
