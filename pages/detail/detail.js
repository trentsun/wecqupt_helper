// pages/detail/detail.js
var app = getApp();

Date.prototype.Format = function (fmt) { // author: meizz
  var o = {
      "M+": this.getMonth() + 1, // 月份
      "d+": this.getDate(), // 日
      "h+": this.getHours(), // 小时
      "m+": this.getMinutes(), // 分
      "s+": this.getSeconds(), // 秒
      "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
      "S": this.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt))
      fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
          return fmt;
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    major:'',
    sid:'',
    name:'',
    outDate:'',
    intDate:'',
    applyTime:'',
    leaveTime:'',
    comeinTime:'',
    isLeave:false,
    isBack:false,
    leaveColor:'',
    backColor:'',
    imageSrc:"/images/prepare.png",
    outLocation:'崇文门',
    inLocation:'崇文门'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
    var that = this;
    console.log(app.globalData.major);
    console.log(app.globalData.sid);
    console.log(app.globalData.name);
    var date = new Date();
    var now = date.Format("yyyy-MM-dd");
    var apply = `${now} 06:27:35`;
    

    wx.getStorage({
      key:'isLeave',
      success:function(value){
        that.setData({
          isLeave  : value.data,
          leaveColor: "#DCDCDC"
        })
      },
      fail:function(){
        that.setData({
          leaveColor:"#9085FF"
        })
      }
    })
    wx.getStorage({
      key: 'isBack',
      success:function(value){
        that.setData({
          isBack : value.data,
          backColor: "#DCDCDC"
        })
      },
      fail:function(){
        that.setData({
          backColor: "#9085FF"
        })
      }
    })
    wx.getStorage({
      key: 'leaveTime',
      success:function(value){
        that.setData({
          leaveTime:value.data
        })
      }
    });
    wx.getStorage({
      key: 'backTime',
      success:function(value){
        that.setData({
          comeinTime :value.data
        })
      }
    })

    this.setData({
      major : app.globalData.major,
      sid : app.globalData.sid,
      name : app.globalData.name,
      outDate: now,
      inDate: now,
      applyTime:apply,
    })
  },

  leave: function () {
    console.log('出入校管理')
    var that = this;
    
    app.globalData.state = 2;
    
    wx.scanCode({
      complete: (res)=>{
        var date = new Date();
        // var lTime = `${`${date.getFullYear()}-${date.getMonth()<9?0:""}${date.getMonth()+1}-${date.getDate()}`} ${new Date().toLocaleTimeString('chinese', { hour12: false })}`;
        var lTime = date.Format("yyyy-MM-dd hh:mm:ss")
        wx.setStorage({
          key:'leaveTime',
          data:lTime
        });
        that.setData({
          leaveTime: lTime,
          isLeave : true,
          leaveColor: "#DCDCDC"
        });
        wx.setStorage({
          key:"isLeave",
          data:true
        })

        wx.navigateTo({

          url: '/pages/showout/showout',
    
          success: function (res) {
            that.setData({
              imageSrc:'/images/after_out.png'
            })
          },
    
          fail: function (res) {},
    
          complete: function (res) {
            console.log(`${that.imageSrc}`)
            if(app.globalData.state==2){
              that.setData({
                imageSrc:'/images/after_out.png'
              })
            }else if(app.globalData.state==3){
              that.setData({
                imageSrc:'/images/after_in.png'
              })
            }
          },
        })
       
      }
    })
   

  },

  comein: function () {
    var that  = this;

   app.globalData.state = 3;
  
   wx.scanCode({
     
     complete: (res) => {
       var date = new Date();
      //  var bTime = `${`${date.getFullYear()}-${date.getMonth()<9?0:""}${date.getMonth()+1}-${date.getDate()}`} ${new Date().toLocaleTimeString('chinese', { hour12: false })}`;
      var bTime = date.Format("yyyy-MM-dd hh:mm:ss")
       wx.setStorage({
         data: bTime,
         key: 'backTime',
       })
      that.setData({
        comeinTime: bTime,
        isBack:true,
        backColor: "#DCDCDC"
      });
      wx.setStorage({
        key:"isBack",
        data:true
      })
      wx.navigateTo({

        url: '/pages/showin/showin',
  
        success: function (res) {
          that.setData({
            imageSrc:'/images/after_in.png'
          })
        },
  
        fail: function (res) {},
  
        complete: function (res) {
          if(app.globalData.state==2){
            that.setData({
              imageSrc:'/images/after_out.png'
            })
          }else if(app.globalData.state==3){
            that.setData({
              imageSrc:'/images/after_in.png'
            })
          }
        },
  
      })
      
     },
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