const app = getApp();
Page({
	data: {
      article:[],
      now_article:[{"title":"","src":""}]
  	},
	onLoad: function () { 
		wx.setNavigationBarTitle({
    title: "资讯详情"//页面标题为路由参数
    })
    var that = this;
    wx.request({
    url: 'http://localhost:4000/api/article', //仅为示例，并非真实的接口地址
    data: {
    
     },
     header: {
      'content-type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json' // 默认值
    },
    success: function(res) {
      let DataBase = res.data.article
      let newData = []
      DataBase.forEach(function(i){
        newData.push(i)
      })
      that.setData({
         article:newData,
        })
    }
  })
  },
	suo: function (e) {
    wx.navigateTo({
      url: '../search/search',
    })
}
})