//home.js
//获取应用实例
var app = getApp()

const v = getCurrentPages();

Page({
  data: {
    list: [{
      id: 'view',
      name: '视图容器',
      open: false,
      pages: ['view', 'scroll-view', 'swiper']
    }, {
      id: 'content',
      name: '基础内容',
      open: false,
      pages: ['text', 'icon', 'progress']
    }, {
      id: 'form',
      name: '表单组件',
      open: false,
      pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'radio', 'slider', 'switch', 'textarea']
    }, {
      id: 'nav',
      name: '导航',
      open: false,
      pages: ['navigator']
    }, {
      id: 'media',
      name: '媒体组件',
      open: false,
      pages: ['image', 'audio', 'video']
    }, {
      id: 'map',
      name: '地图',
      pages: ['map']
    }, {
      id: 'canvas',
      name: '画布',
      pages: ['canvas']
    }]
  },

  // kindToggle: function(e) {
  //   var id = e.currentTarget.id,
  //     list = this.data.list;
  //   for (var i = 0, len = list.length; i < len; ++i) {
  //     if (list[i].id == id) {
  //       list[i].open = !list[i].open
  //     } else {
  //       list[i].open = false
  //     }
  //   }
  //   this.setData({
  //     list: list
  //   });
  // },

  kindToggle: function(e) {

    var id = e.currentTarget.id;
    var list = this.data.list;

    for (var i = 0; i < list.length; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open;
      } else {
        list[i].open = false;
      }
    }
    this.setData({
      list: list
    })

  },

  /**
   * 下拉刷新
   */
  onPullDownRefresh: function() {
    console.log("下拉的时候调用");
  },

  /**
   * 应该是上拉
   */
  onReachBottom: function() {
    console.log("上拉的时候调用");
  },

  /**
   * 分享页吧
   */
  onShareAppMessage: function() {
    return {
      title: "转发的标题"
    }
  },

  // 监听页面加载 此方法只加载一次 可以获取query参数
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },


  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

})