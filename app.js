//app.js
var app = getApp()
App({
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)
    wx.login({
      success: function (res) {
        //console.log(res.code)
        wx.request({
          url: 'https://www.shenglf.com/Index.php/Home/register/wx_login',
          data: {
            
            code: res.code
          },
          method: 'POST',
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success: function (data) {
            wx.setStorage({
              key: "ssid",
              data: data.data
            })
            
          }
        })
      }
    })
    // wx.login({
    //   success: function (res) {
    //     if (res.code) {
    //       //发起网络请求
    //       console.log(res.code)
    //       wx.request({
    //         url: '',
    //         data: {
    //           code: res.code
    //         }
    //       })
    //     } else {
    //       console.log('获取用户登录态失败！' + res.errMsg)
    //     }
    //   }
    // });
  },

  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },

  globalData: {
    userInfo: null
  }
})
