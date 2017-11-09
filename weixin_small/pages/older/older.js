// pages/older/older.js
var time = require('../../utils/util.js')
var old = time.formatTimeOld(new Date)
Page({

  /**
   * 页面的初始数据
   */
  data: {
     response: {} ,
     date:old,
     move:false,
     showin:false
     },

  getStorageInfo: function (callback) {
    wx.request({
      url: 'https://moment.douban.com/api/stream/date/'+old+'?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=full&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6',
      method: 'GET',
      dataType: 'json',
      success: function (res) {
        callback(res.data.posts)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    wx.showLoading({
      title: '加载中',
      mask: true
    });
    var that = this;
    that.getStorageInfo(function (data) {
      that.setData({
        response: data
      });
      wx.hideLoading()
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
  this.setData({
    move:ture
  })
  },
  /**
     * 页面相关事件处理函数--监听用户huadong
     */
  onPageScroll: function (obj) {
    if (obj.scrollTop >= 200) {
      this.setData({
        move: true
      })
    }
    else {
      this.setData({
        move: false
      })
    }
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