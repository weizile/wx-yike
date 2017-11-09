// pages/center/center.js
Page({
  getid: function (callback,id) {
    wx.request({
      url: 'https://moment.douban.com/api/author/'+id+'/posts?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=full&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6',
      method: 'GET',
      dataType: 'json',
      success: function (res) {
        callback(res.data)
      }
    })
  },
  read: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../post/post?id=' + id
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
  person:{},
  show:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  var that = this;
  var id = options.id;
  console.log(id);
  wx.showLoading({
    title: '加载中',
    mask: true
  });
    that.getid(function(data){
    that.setData({
      person:data,
      show: true
    });
    wx.hideLoading()
    },id)

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