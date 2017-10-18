// pages/index/first/first.js

var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //性别选择数组
    check: 'true',
    items: [
      {
        checked: 'true',
        sex: '男',
      },
      {
        sex: '女',
      }
    ],
    // 月薪数组
    array: ['- -请选择- -', '5000元以下', '5000—10000元', '10000—15000元', '15000—20000元', '20000元以上'],
    objectArray: [
      {
        id: 0,
        name: '- -请选择- -'
      },
      {
        id: 1,
        name: '5000以下元'
      },
      {
        id: 2,
        name: '5000—10000元'
      },
      {
        id: 3,
        name: '10000—15000元'
      },
      {
        id: 4,
        name: '15000—20000元'
      },
      {
        id: 5,
        name: '20000元以上'
      }
    ],
    index: 0,
    userName: '',
    userN: '',
    check: true,
    content:'',
    value:'',
    sex2:'男',
    userId:''

  },
  onLoad: function (options) {
    var id = options['slf_id']
  },
  radioChange: function (e) {
   this.setData({
      sex2: e.detail.value
    })
  //  var idx = this.data.sex2;
  //  console.log(idx)
  //  this.setData({
  //    sex3: this.data.sex2
  //  })
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
    var _this=this
    var idx=this.data.index
    var value = this.data.array[idx]
    //console.log('获取选框里的值', value)
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      value: this.data.array[idx]
    })
  },
  //用户名输入框事件
  userNameInput: function (e) {
    this.setData({
      userN: e.detail.value
    })
  },
  //用户名输入框事件
  userIdInput: function (e) {
    this.setData({
      userId: e.detail.value
    })
  },
  bindXieyi: function () {
    wx.navigateTo({
      url: '../agreement/agreement',
    })
  },
  //选择阅读协议按钮
  checkA: function () {
    var value = !this.data.check;
    this.setData({
      check: value
    })
  },
  submitBtnClick: function (e) {
    if (this.data.userN.length == 0 && this.data.index != 0) {
      wx.showModal({
        title: '提示',
        content: '用户名不能为空！'
      })
    } else if (this.data.userN.length != 0 && this.data.index == 0) {
      wx.showModal({
        title: '提示',
        content: '请选择月薪的范围！'
      })
    } else if (this.data.userN.length == 0 && this.data.index == 0 && this.data.userId.length==0) {
      wx.showModal({
        title: '提示',
        content: '请输入姓名、身份证号及选择月薪范围！'
      })
    } else if (this.data.check != true) {
      wx.showModal({
        title: '提示',
        content: '请阅读《隐私条款》！'
      })
    } else if (this.data.userId.length==0) {
      wx.showModal({
        title: '提示',
        content: '请输入您的身份证号！'
      })
    } else if (this.data.userId.length < 18 || this.data.userId.length>18) {
      wx.showModal({
        title: '提示',
        content: '您的身份证号输入有误！'
      })
    }
    else {
      var income = this.data.value
      var user_name=this.data.userN;
      var sex=this.data.sex2;
      var userId = this.data.userId;
      //console.log(sex)
      wx.request({
        url: 'https://www.shenglf.com/Index.php/home/register/reg.html',
        data: {
          user_name: user_name,
          sex: sex,
          income: income,
          userId:userId
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        method:'POST',       
        success: function (res) {
          console.log(res.data)
        }
      })
      wx.navigateTo({
        url: '../second/second'
      })
    }
  },
 
})

