var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasUserInfo: false
  },

  getUserInfo: function() {

    var that = this;
    if (app.globalData.hasLogin === false) {
      wx.login({
        success: _getUserInfo
      })
    } else {
      _getUserInfo()
    }

    function _getUserInfo() {
      wx.getUserInfo({
        sucess: function(res) {
          that.setData({
            hasUserInfo: true,
            userInfo: res.userInfo
          })
          that.update
        }
      })
    }


    // function _getUserInfo() {
    //   wx.getUserInfo({
    //     success: function (res) {
    //       that.setData({
    //         hasUserInfo: true,
    //         userInfo: res.userInfo
    //       })
    //       that.update()
    //     }
    //   })
    // }

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

  }
})