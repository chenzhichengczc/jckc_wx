//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力


    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
     
    })
  },
  globalData: {
   
  }
})