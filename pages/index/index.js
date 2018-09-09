Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3500,
    duration: 1000,
    titleImages: [{
        url: '../../images/1.jpg',
        title: "去年买了个表"
      },
      {
        url: '../../images/2.jpg',
        title: "叫了只机"
      },
      {
        url: '../../images/3.jpg',
        title: "蓝符，一节更比6节强"
      },
      {
        url: '../../images/4.jpg',
        title: "让你更自信"
      },
    ],
    listItem: [{
        url: '../../images/food.jpg',
        title: '香肠蛋卷',
        content: "中国美食，夹心"
      },
      {
        url: '../../images/food.jpg',
        title: '香肠蛋卷',
        content: "中国美食，夹心"
      },
      {
        url: '../../images/food.jpg',
        title: '香肠蛋卷',
        content: "中国美食，夹心"
      },
      {
        url: '../../images/food.jpg',
        title: '香肠蛋卷',
        content: "中国美食，夹心"
      }

    ]
  },

  bannerChanger: function(even) {
    // console.log(even);
  },

})