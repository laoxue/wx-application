const app = getApp();
Page({
	onLoad:function(){
		wx.setNavigationBarTitle({
    	title: "联系客服"//页面标题为路由参数
    })
	},
	suo: function (e) {
    wx.navigateTo({
      url: '../search/search',
    })
}
})