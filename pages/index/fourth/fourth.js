// pages/index/fourth/fourth.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  ggg:'',
  sss:'',
  kkk:''
  },

  onLoad: function (options) {
    var hq = '4'
    this.setData({
      sss: hq
    })
    var hq2 = '4'
    this.setData({
      ttt: hq2
    })
    var hq3 = '4'
    this.setData({
      fff: hq3
    })
    wx.setStorageSync('fff', '4')
  },

})