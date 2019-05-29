// pages/project/project.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "logoUrl": 'cloud://jckc-02v5k.6a63-jckc-02v5k/logo.png',
    "bannerUrl": 'cloud://jckc-02v5k.6a63-jckc-02v5k/banner.png',
    "footerLogo": 'cloud://jckc-02v5k.6a63-jckc-02v5k/footerlogo.png',
    "list": [{
        'id': '01',
        "text1": "Java软件"
      },
      {
        'id': '02',
        "text1": "微信小程序"
      },
      {
        'id': '03',
        "text1": "Apps"
      },
      {
        'id': '04',
        "text1": "品牌定制方案"
      },
      {
        'id': '05',
        "text1": "UI / UE"
      },
    ],
    "list2": [{
        "id": "01",
        "title": "Java软件",
        "project": [{
          "imgUrl": "../../images/iconfont-home.png",
          "text": "呆账信息管理系统",
          "charge": "Rocky Qiu",
          "money": "30000 RMB"
        }, {
          "imgUrl": "../../images/iconfont-home.png",
          "text": "某保险信息管理系统",
          "charge": "Charles Chan",
          "money": "35000 RMB"
        }, {
          "imgUrl": "../../images/iconfont-home.png",
          "text": "电子商务系统",
          "charge": "Charles Chan",
          "money": "0 RMB"
        }, {
          "imgUrl": "../../images/iconfont-home.png",
          "text": "电子商务系统",
          "charge": "Charles Chan",
          "money": "0 RMB"
        }]
      }, {
        "id": "02",
        "title": "微信小程序",
        "project": [{
          "imgUrl": "../../images/iconfont-home.png",
          "text": "仿58同城租房",
          "charge": "JW Sun",
          "money": "5000 RMB"
        }, {
          "imgUrl": "../../images/iconfont-home.png",
          "text": "好食界商城",
          "charge": "JieWen Chan",
          "money": "9000 RMB"
        }]
      }, {
        "id": "03",
        "title": "Apps",
        "project": [{
          "imgUrl": "../../images/iconfont-home.png",
          "text": "仿(跑得快)游戏Apps",
          "charge": "Charles Chan",
          "money": "32000 RMB"
        }]
      }, {
        "id": "04",
        "title": "品牌定制方案",
        "project": [{
            "imgUrl": "../../images/iconfont-home.png",
            "text": "某公司双11活动",
            "charge": "William Zhu",
            "money": "12000 RMB"
          },
          {
            "imgUrl": "../../images/iconfont-home.png",
            "text": "契贺公司系列设计",
            "charge": "William Zhu",
            "money": "- RMB"
          }
        ]
      }, {
        "id": "05",
        "title": "UI / UE",
        "project": [{
          "imgUrl": "../../images/iconfont-home.png",
          "text": "三折页/Banner/交互设计",
          "charge": "Peng Zhao",
          "money": "- RMB"
        }]
      }

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    var that = this;
    // 获取可视区高度
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          winHeight: res.windowHeight,
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  switchRightTab: function(e) {
    var id = e.target.id;
    console.log(typeof id)
    this.setData({
      // 动态把获取到的 id 传给 scrollTopId
      scrollTopId: id,
      // 左侧点击类样式
      curNav: id
    })
  }

})