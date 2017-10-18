//search/search.js

//var postsDate = require('../../data/loca_data.js')
Page({
  data: {
    phoneNumber: '',
    posts_key:''
  },
  onLoad: function (options) {

  },
  seachPhone: function (e) {
    this.setData({
      phoneNumber: e.detail.value
    })
  },
  seachBtn: function () {
    var that = this
    if (this.data.phoneNumber.length == 0) {
      wx.showModal({
        title: '提示',
        content: '请输入需要查询的手机号码！',
      })
    }
    else if (this.data.phoneNumber.length < 11 && this.data.phoneNumber.length != 0) {
      wx.showModal({
        title: '提示',
        content: '请输入正确的手机号码！',
      })
    }
    else {
      var phone = this.data.phoneNumber
      wx.request({
        url: 'https://www.shenglf.com/Index.php/home/register/term.html',
        method: 'POST',
        data: {
          phone: phone
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
          //var aaa=res.data;
          // if (res.data.state == 1) {
          //   wx.showModal({
          //     title: '提示',
          //     content: res.data.msg
          //   })
          // } else if (res.data.state == 2) {
          //   console.log(222)
          //   that.setData({
          //     ks: res.data.state,
          //     posts_key: res.data
          //   })
          // }
          that.setData({
            //ks: res.data.state,
            posts_key: res.data
          })
        }
      })
      console.log(this.data.posts_key)

    }
  }
})