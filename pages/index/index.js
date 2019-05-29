//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    "autoplay" : true,
    "interval" : 3000,
    "circular" : true,
    "imgUrls" : [
      "cloud://jckc-02v5k.6a63-jckc-02v5k/banner1.png",
      "cloud://jckc-02v5k.6a63-jckc-02v5k/banner0.png"
    ],
    "logoUrl": "cloud://jckc-02v5k.6a63-jckc-02v5k/logo.png",
    "footerLogo": "cloud://jckc-02v5k.6a63-jckc-02v5k/footerlogo.png",
  },
  
  onLoad: function () {
   
  },
  getUserInfo: function(e) {
  
  }
})
