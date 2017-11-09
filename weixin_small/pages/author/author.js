// pages/author/author.js

var count = 0;
var loadMore = function(that){
  wx.showLoading({
    title: '加载中',
    mask: true
  });
  count+=20;
  wx.request({
    url: 'https://moment.douban.com/api/auth_authors/all?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&count=20&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&start='+count+'&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6',
    method: 'GET',
    dataType: 'json',
    success: function (res) {
      var authorsHotMore = that.data.authorsHotMore;
      for (var i = 0; i < res.data.authors.length;i++){
        authorsHotMore.push(res.data.authors[i]);
      }
      that.setData({
        authorsHotMore: authorsHotMore
      });
      wx.hideLoading()
    }
  })
};
Page({

  /**
   * 页面的初始数据
   */
  data: {
    authorsCom:{},
    authorsHotMore:[],
    showin:false,
    load:true
  },
  center:function(e){
    var id = e.currentTarget.dataset.id;
wx.navigateTo({
  url: '../center/center?id='+id
})
  },
  getStorageInfo: function (callback) {
    wx.request({
      url: 'https://moment.douban.com/api/auth_authors/rec?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&count=20&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&start=0&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6',
      method: 'GET',
      dataType: 'json',
      success: function (res) {
        callback(res.data.authors)
      }
    })
  },
  getStorageInfo1: function (callback) {
    wx.request({
      url: 'https://moment.douban.com/api/auth_authors/all?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&count=20&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&start=0&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6',
      method: 'GET',
      dataType: 'json',
      success: function (res) {
        callback(res.data.authors)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this;
    wx.showLoading({
      title: '加载中',
      mask: true
    });
    that.getStorageInfo(function (data) {
      that.setData({
        authorsCom: data,
        showin: true,
      });
      wx.hideLoading()
    });
    that.getStorageInfo1(function (data) {
      that.setData({
        authorsHotMore: data,
      })
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
    var that = this;
    loadMore(that);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})