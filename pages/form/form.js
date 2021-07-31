// pages/form/form.js
var app = getApp();
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
    wx.getStorage({
        key:'login',
        success:function(res){
          wx.getStorage({
            key: 'major',
            success:function(value){
              app.globalData.major = value.data;
            }
          })
          wx.getStorage({
            key: 'sid',
            success:function(value){
              app.globalData.sid = value.data;
            }
          })

          wx.getStorage({
            key: 'name',
            success:function(value){
              app.globalData.name = value.data;
            }
          })
          
          wx.navigateTo({
            url: '/pages/home/home',
          }) 
        }
    }
    )
  },

  submit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var d = e.detail.value;
    wx.setStorage({
      data: 1,
      key: 'login',
    });
    app.globalData.major =  d.major;
    app.globalData.sid = d.sid;
    app.globalData.name = d.name;
    var that = this;
    // 取值全局变量
    console.log(d.major);
    console.log(d.sid);
    console.log(d.name);
    app.globalData.major = d.major;
    app.globalData.sid = d.sid;
    app.globalData.name = d.name;
    wx.setStorage({
      data: d.major,
      key: 'major',
    })
    wx.setStorage({
      data: d.sid,
      key: 'sid',
    })
    wx.setStorage({
      data: d.name,
      key: 'name',
    })
    wx.navigateTo({
      url: '/pages/home/home',
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