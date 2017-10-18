// pages/index/second/second.js
// var postsData = require('../../date/loca_data.js')
var app = getApp()
Page({
  data: {
    array: ['社保贷', '公积金贷', '保单贷', '工薪贷'],
    objectArray: [
      {
        id: 0,
        name: '社保贷',
        title: '社保贷—有社保就能贷',
        num: '贷款金额0.05—20万元',
        record: '最近3个月以上的社保记录',
        report: '征信报告'
      },
      {
        id: 1,
        name: '公积金贷',
        title: '公积金贷—有公积金就能贷',
        num: '贷款金额0.05—20万元',
        record: '最近3个月以上的公积金缴纳记录',
        report: '征信报告'
      },
      {
        id: 2,
        name: '保单贷',
        title: '保单贷—有寿险保单就能贷',
        num: '贷款金额0.05—20万元',
        record: '一年或以上的寿险保单',
        report: '征信报告'
      },
      {
        id: 3,
        name: '工薪贷',
        title: '工薪贷—有固定工资就能贷',
        num: '贷款金额0.05—20万元',
        record: '最近3个月工资流水',
        report: '征信报告'
      },
    ],
    index: 0,
    phoneN: '',
    infoMess: '',
    noteN: '',
    yzmV: '',
    infoNum: '',
    infoNote: '',
    phoneI: '',
    money: '',
    noteM: '',
    infoN: '',
    item: {
      sss: '',
      ttt: '',
      fff: ''
    },
    VerifyCode: '短信验证码',
    state: true,
    state1: '',
    value: ''
  },

  onShow: function (option) {
    var that = this;
    var hq1 = '4'
    this.setData({
      sss: hq1
    })
    //获取第三页的缓存
   
    var ttt=wx.getStorageSync('ttt')
    this.setData({
      ttt:ttt
    })
    //获取第四页的缓存
    var fff = wx.getStorageSync('fff')
    this.setData({
      fff: fff
    })
  },

  // 手机号码，光标离开时数据反馈事件
  phoneBlur: function (e) {
    this.setData({
      phoneN: e.detail.value
    })
    if (this.data.phoneN.length < 11 && this.data.phoneN.length != 0) {
      this.setData({
        infoMess: '手机号码有误',
      })
    } else if (this.data.phoneN.length == 0) {
      this.setData({
        infoMess: '请输入手机号码',
      })
    } else {
      this.setData({
        phoneN: e.detail.value,
        infoMess: ''
      })
    }
  },
  bindIputN: function () {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    this.setData({
      NumN: e.detail.value
    })
  },

  dddd: function () {
    console.log(488844)
  },
  // 验证码，光标离开时数据反馈事件
  noteBlur: function (e) {
    this.setData({
      noteN: e.detail.value
    })
    if (this.data.noteN < 6 && this.data.noteN.length != 0) {
      this.setData({
        infoN: '请输入正确的验证码',
      })
    } else if (this.data.noteN.length == 0) {
      this.setData({
        infoN: '验证码不能为空',
      })
    } else {
      this.setData({
        infoN: '',

      })
    }
  },
  //点击发送短信验证码
  setVerify: function () {
    if (this.data.phoneN.length < 11 && this.data.phoneN.length != 0) {//判断手机号码是否输入
      this.setData({
        infoMess: '手机号码有误',
      })
    } else if (this.data.phoneN.length == 0) {
      this.setData({
        infoMess: '请输入手机号码',
      })
    } else {
      var that = this;
      var phone = this.data.phoneN
      var total_micro_second = 60 * 1000;
      this.setData({
        state: false
      })
      //验证码倒计时
      count_down(this, total_micro_second);
      wx.request({
        url: 'https://www.shenglf.com/Index.php/home/register/get_mes.html',
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: {
          //ssid: wx.getStorageSync('ssid'),
          // ssid: ssid,
          phone: phone
        },
        success: function (res) {
          console.log(res)

        },
        fail: function (res) {
          console.log("error res=")
          console.log(res.data)
        }
      });
    }
  },



  // 贷款金额,光标离开时数据反馈事件
  bindNumblur: function (e) {
    this.setData({
      NumN: e.detail.value
    })
    if (this.data.NumN.length == 0) {
      this.setData({
        infoNum: '请输入贷款金额',
      })
    } else if (this.data.NumN < 500) {
      this.setData({
        infoNum: '金额不能小于500',
      })
    } else if (this.data.NumN > 200000) {
      this.setData({
        infoNum: '金额已经超过最大的限额',
      })
    } else {
      this.setData({
        infoNum: '',
      })
    }
  },
  //选择产品事件
  bindPru: function (e) {
    this.setData({
      index: e.detail.value
    })
    var idx = this.data.index;
    var value = this.data.array[idx]
    console.log('picker发送选择改变，携带值为', idx)
    this.setData({
      value: this.data.array[idx]
    })

  },
  //手机号码输入发送数据事件
  bindPhone: function (e) {
    this.setData({
      phoneI: e.detail.value
    })
  },
  //金额输入发送数据事件
  bindIputN: function (e) {
    this.setData({
      money: e.detail.value
    })
  },
  //验证码输入发送数据事件
  noteMess: function (e) {
    this.setData({
      noteM: e.detail.value
    })
  },
  //点击下一步事件
  bindNext: function (object) {
    if (this.data.phoneI.length == 0) {
      this.setData({
        infoMess: '请输入手机号码',
      })
    }
    else if (this.data.phoneI.length < 11 && this.data.phoneI.length != 0) {
      this.setData({
        infoMess: '请输入正确的手机号码',
      })
    }
    else if (this.data.noteM.length < 6 && this.data.noteM.length != 0) {
      this.setData({
        infoN: '请输入正确的验证码',
      })
    }
    else if (this.data.noteM.length == 0) {
      this.setData({
        infoN: '验证码不能为空',
      })
    }
    else if (this.data.money.length == 0) {
      this.setData({
        infoNum: '请输入贷款金额',
      })
    }
    else if (this.data.money < 500) {
      this.setData({
        infoNum: '金额不能小于500',
      })
    }
    else if (this.data.money > 200000) {
      this.setData({
        infoNum: '金额已经超过最大的限额',
      })
    }
    else {
      var that = this;
      var phone = this.data.phoneI;
      var loan_type = this.data.value;
      var loan_money = this.data.money;
      var mes_code = this.data.noteM;
      var statee = 0;
      var objectId = this.data.index;
      //console.log(loan_type)
      wx.request({
        url: 'https://www.shenglf.com/Index.php/home/register/reg.html',
        data: {
          phone: phone,
          loan_type: loan_type,
          lo_money: loan_money,
          mes_code: mes_code
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        method: 'POST',
        success: function (res) {
          console.log(res.data)
          if (res.data.state == 3) {
            wx.showModal({
              title: '提示',
              content: '您输入的验证码有误，请重新输入！',
              showCancel: false
            })
          }
          else {
            wx.navigateTo({
              url: '../third/third?objectId=' + objectId,
            })
            wx.setStorage({
              key: "ttt",
              data: res.data.state
            })
            statee = res.data.state
          }
        }
      })
      this.setData({
        infoMess: '',
        infoN: '',
        infoNum: '',
      })
    }
  }
})

//发送短信验证码js
/* 毫秒级倒计时 */
function count_down(that, total_micro_second) {
  if (total_micro_second <= 0) {
    that.setData({
      VerifyCode: "重新发送"
    });
    // timeout则跳出递归
    return;
  }
  // 渲染倒计时时钟
  that.setData({
    VerifyCode: date_format(total_micro_second) + " 秒"
  });
  setTimeout(function () {
    // 放在最后--
    total_micro_second -= 10;
    count_down(that, total_micro_second);
  }, 10)
}

// 时间格式化输出，如03:25:19 86。每10ms都会调用一次
function date_format(micro_second) {
  // 秒数
  var second = Math.floor(micro_second / 1000);
  // 小时位
  var hr = Math.floor(second / 3600);
  // 分钟位
  var min = fill_zero_prefix(Math.floor((second - hr * 3600) / 60));
  // 秒位
  var sec = fill_zero_prefix((second - hr * 3600 - min * 60));// equal to => var sec = second % 60;
  // 毫秒位，保留2位
  var micro_sec = fill_zero_prefix(Math.floor((micro_second % 1000) / 10));
  return sec;
}
// 位数不足补零
function fill_zero_prefix(num) {
  return num < 10 ? "0" + num : num
}