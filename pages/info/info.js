// info.js
const app = getApp();
Page({
    data: {
      banner:[],  
      article:[],
      isHideLoadMor:true
  },  
  onLoad: function () { 
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
      let DateBanner = res.data.banner
      let newData = []
      let Banner = []
      DataBase.forEach(function(i){
        newData.push(i)
      })
      DateBanner.forEach(function(i){
        Banner.push(i)
      })
      console.log(Banner)
      that.setData({
         article:newData,
         banner:Banner
        })
    }
  })
  },
  onReachBottom:function(){
    console.log("加载更多")
    this.setData({
      isHideLoadMor:false
    })
    setTimeout(()=>{
      this.setData({
        isHideLoadMor:true,
        article:[
        {
      "src":"http://p7gn2ayr9.bkt.clouddn.com/2.jpg",
      "title":"【DIESEL星球 - 新闻速报】Haute Couture (高级定制) 还是 Hate Couture？",
      "date":"2018-08-08",
      "local":"VOGUE品牌"
    },
    {
      "src":"http://p7gn2ayr9.bkt.clouddn.com/3.jpg",
      "title":"【速写CROQUIS】2018秋冬系列新闻稿",
      "date":"2018-08-08",
      "local":"品牌大赏"
    },
    {
      "src":"http://p7gn2ayr9.bkt.clouddn.com/4.jpg",
      "title":"李宇春身着 Maison Margiela Artisanal 2018 春夏系列亮相北京演",
      "date":"2018-08-08",
      "local":"大视野"
    },
    {
      "src":"http://p7gn2ayr9.bkt.clouddn.com/5.jpg",
      "title":"盟可睐MONCLER声明",
      "date":"2018-08-08",
      "local":"时尚前线"
    },
    {
      "src":"http://p7gn2ayr9.bkt.clouddn.com/01.jpg",
      "title":"EIDOS Moda Operandi Man 精心甄选EIDOS 2019春夏系列",
      "date":"2018-08-08",
      "local":"时尚前线"
    },
    {
      "src":"http://p7gn2ayr9.bkt.clouddn.com/02.jpg",
      "title":"Dior迪奥二零一八秋冬高级订制系列",
      "date":"2018-08-08",
      "local":"时尚前线"
    },
    {
      "src":"http://p7gn2ayr9.bkt.clouddn.com/03.jpg",
      "title":"澳洲时尚泳装品牌SEAFOLLY正式进驻中国",
      "date":"2018-08-08",
      "local":"时尚前线"
    },
    {
      "src":"http://p7gn2ayr9.bkt.clouddn.com/04.jpg",
      "title":"FENDI Zodiac星座挂饰胶囊系列 你的FENDI星座是？",
      "date":"2018-08-08",
      "local":"时尚前线"
    },
    {
      "src":"http://p7gn2ayr9.bkt.clouddn.com/88.jpg",
      "title":"MCM 2018世界杯系列 ——“决战俄罗斯”？",
      "date":"2018-08-08",
      "local":"最潮街区"
    },
    {
      "src":"http://p7gn2ayr9.bkt.clouddn.com/77.jpg",
      "title":"迪丽热巴电视剧《一千零一夜》JIMMY CHOO露出？",
      "date":"2018-08-08",
      "local":"影视同期声"
    }]
      })
    },1000)
    wx.hideNavigationBarLoading() //完成停止加载

    wx.stopPullDownRefresh() 
  },
  article: function (e) {
    wx.navigateTo({
      url: '../article/article',
    })
}
})