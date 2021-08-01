// pages/form/form.js
var app = getApp();
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    major:null,
    sid:null,
    name:null,
    accessCount: null,
    accessLocation: null,

    selectShow: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    locations: ['崇文门', '腾飞门'],//下拉列表的数据
    index: 0,//选择的下拉列表下标
  },

    // 点击下拉显示框
    selectTap() {
      this.setData({
        selectShow: !this.data.selectShow
      });
    },
    // 点击下拉列表
    optionTap(e) {
      let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
      this.setData({
        index: Index,
        selectShow: !this.data.selectShow
      });
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  initParam: function(d) {
    app.globalData.major =  d.major;
    app.globalData.sid = d.sid;
    app.globalData.name = d.name;
    app.globalData.accessCount = d.accessCount;
    app.globalData.accessLocation = this.data.locations[this.data.index];
  },

  submit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var d = e.detail.value;
    wx.setStorage({
      data: 1,
      key: 'login',
    });
    this.initParam(d)
    // 不太懂为啥要赋值2遍，先注释了
    // app.globalData.major = d.major;
    // app.globalData.sid = d.sid;
    // app.globalData.name = d.name;
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
    wx.setStorage({
      data: d.accessCount,
      key: 'accessCount',
    })
    wx.setStorage({
      data: d.accessLocation,
      key: 'accessLocation',
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
    console.log(this.data)
    var that = this
    wx.getStorage({
      key:'login',
      success:function(res){
        wx.getStorage({
          key: 'major',
          success:function(value){
            app.globalData.major = value.data;
            if (value.data != null) {
              that.data.major = value.data
              that.setData(that.data);
            }
          }
        })
        wx.getStorage({
          key: 'sid',
          success:function(value){
            app.globalData.sid = value.data;
            if (value.data != null) {
              that.data.sid = value.data
              that.setData(that.data);
            }
          }
        })

        wx.getStorage({
          key: 'name',
          success:function(value){
            app.globalData.name = value.data;
            if (value.data != null) {
              that.data.name = value.data
              that.setData(that.data);
            }
          }
        })

        wx.getStorage({
          key: 'accessCount',
          success:function(value){
            app.globalData.accessCount = value.data;
            if (value.data != null) {
              that.data.accessCount = value.data
              that.setData(that.data);
            }
          }
        })
        console.log(that.data.locations[that.data.index]);
        app.globalData.accessLocation = that.data.locations[that.data.index];
        that.data.accessLocation = that.data.locations[that.data.index];
        that.setData(that.data);
        // wx.getStorage({
        //   key: 'accessLocation',
        //   success:function(value){
        //     app.globalData.accessLocation = value.data;
        //     if (value.data != null) {
        //       that.data.accessLocation = value.data
        //       that.setData(that.data);
        //     }
        //   }
        // })

        // 每次都不先路由到主页面，先填写一些数据
        // wx.navigateTo({
        //   url: '/pages/home/home',
        // }) 
      }
  }
  )
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