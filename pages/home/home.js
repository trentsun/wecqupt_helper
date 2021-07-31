// pages/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //JS代码
 
    declare: function () {
 
        wx.navigateTo({
     
          url: '/pages/goout/goout',
     
          success: function (res) { },
     
          fail: function (res) { },
     
          complete: function (res) { },
     
        })
     
      },

    clear: function () {
        wx.removeStorage({
          key: 'isLeave',
        });

        wx.removeStorage({
          key: 'isBack',
        });

        wx.removeStorage({
          key: 'leaveTime',
        });

        wx.removeStorage({
          key: 'backTime',
        })
      },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})