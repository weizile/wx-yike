//index.js
//获取应用实例
const app = getApp()
var time = require('../../utils/util.js')
var now = time.formatTime(new Date)
Page({
  data:{
    response:{},
    date:now,
    move:false
  },
  read:function(e){
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../post/post?id='+id
    })
  },
  getStorageInfo:function(callback){
    wx.request({
      url: 'https://moment.douban.com/api/stream/date/'+now+'?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=full&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6',
      method: 'GET',
      dataType: 'json',
      success: function (res) {
       callback(res.data.posts)
      }
    })
  },
  onLoad:function(){
    wx.showLoading({
      title: '加载中',
      mask: true
    });
    var that = this;
    that.getStorageInfo(function(data){
      that.setData({
        response:data
      });
      console.log(data)
      wx.hideLoading()
    })
  }, 
  /**
   * 页面相关事件处理函数--监听用户huadong
   */
  onPageScroll: function (obj) {
    if(obj.scrollTop>=200){
      this.setData({
        move: true
      })
    }
    else{
      this.setData({
        move: false
      })
    }
  },

   /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
