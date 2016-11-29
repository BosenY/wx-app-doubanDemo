    var str=[]
    var doubanstr=[]
    var douban = 'https://api.douban.com'
Page({
  data: {
    array: [],
    doubanarray: []
  },
  http: function () {
var that=this
    wx.request({
    url: 'http://apis.baidu.com/keng7/soccerlottery/lottery',
    data: {
   num: '10'
},
header: {
  'apikey': '48e3206fcf82aa6ee8807e95a7d4cc67'
},
  success: function(res) {
    console.log(res.data.retData);
    var array=res.data.retData
    // var that = this
for (var i = 0; i < array.length; i++) {
  str.push({'message':array[i].title})
}
that.setData({
  array: str
})
console.log(str);
  },
  fail: function(err) {
    console.log(err);
  }
})
  },
  http1: function () {
var that=this
    wx.request({
    url: douban+'/v2/movie/top250',
    data: {
},
method: 'GET',
header: {
  "Content-Type":"json"
},
  success: function(res) {
    var arr=res.data.subjects
    console.log(res.data.subjects);

    for (var i = 0; i < arr.length; i++) {
      var casts = []
      var genres = []
      for (var j = 0; j < arr[i].casts.length; j++) {
        // console.log(arr[i].casts[j].name);
        casts.push(arr[i].casts[j].name)
      }
      for (var z = 0; z < arr[i].genres.length; z++) {
        genres.push(arr[i].genres[z])
      }
      // console.log(casts.join(","));
    doubanstr.push({
      'title':arr[i].title,
      'year':arr[i].year,
      'original_title':arr[i].original_title,
      'img':arr[i].images.small,
      'avatars':arr[i].directors[0].name,
      'casts':casts.join(","),
      'genres':genres.join(",")
    })
    }
    that.setData({
      doubanarray: doubanstr
    })
  },
  fail: function(err) {
    console.log(err);
  }
})
  }
})
