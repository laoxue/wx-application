const app =getApp();
Page({
  myinfo: function (e) {
    wx.navigateTo({
      url: '../myinfo/myinfo',
    })
  },
  myfriend:function(e){
    wx.navigateTo({
      url: '../myfriend/myfriend',
    })
  },
  adevice:function(e){
    wx.navigateTo({
      url: '../advice/advice',
    })
  },
  kefu:function(e){
    wx.navigateTo({
      url: '../kefu/kefu',
    })
  },
  about:function(e){
    wx.navigateTo({
      url: '../about/about',
    })
  },
  system:function(e){
    wx.navigateTo({
      url: '../system/system',
    })
  }
})