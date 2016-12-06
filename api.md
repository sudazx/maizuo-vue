# This documentation used to describe the api of the website m.maizuo.com

1. billboard

  request: http://m.maizuo.com/v4/api/billboard/home?__t=${timestamp}
  
  response: {
      status: 0,
      data: {
        billboards: [
          {
            id: 502,        
            name: "魔法狂潮",   
            url: "http://m.maizuo.com/act/active/958",
            imageUrl: "http://pic.maizuo.com/h5PicUpload/e2375e5d4694b68355dca6cbb4ce018e.jpg",
            weight: 0
          }
          ...
        ]
      },
      msg: 'ok'
    }

2. now-playing

  request: http://m.maizuo.com/v4/api/film/now-playing?__t=${timestamp}&page=${page}&count=${count}
  
  response: {
      status: 0,
      data: [
        films: [{
          id: 3380,
          name: '神奇动物',
          cover: {
            origin: "http://pic.maizuo.com/usr/100003380/f801455b04021be77eceb7bd73ddadf9.jpg",
          },
          poster: {
            origin: "http://pic.maizuo.com/usr/100003380/fb01708075744fc8b490bf3d01fa4b4a.jpg",
            thumbnail: "http://pic.maizuo.com/usr/100003380/fb01708075744fc8b490bf3d01fa4b4a.jpg!150x0"
          },
          intro: "神奇动物园 法师显超能",
          premiereAt: "1480003200000",
          grade: "8.8",
          watchCount: 721997,
          cinemaCount: 122,
          scheduleCount: 2952,
          isPromotion: true,
          isNowPlaying: true,
          isComingSoon: "",
          isPresold: ""
        }],
        page: {
          total: 8,
          current: 1
        }
      ],
      msg: 'ok'
  }

3. coming-soon

  request: http://m.maizuo.com/v4/api/film/coming-soon?__t=${timestamp}&page=${page}&count=${count}
  
  response: {
    status: 0,
    data: {
      films: [{
            id: 3452,
            name: '你的名字',
            cover: {
                origin: "http://pic.maizuo.com/usr/100003380/f801455b04021be77eceb7bd73ddadf9.jpg",
             },
            poster: {
                origin: "http://pic.maizuo.com/usr/100003380/fb01708075744fc8b490bf3d01fa4b4a.jpg",
                thumbnail: "http://pic.maizuo.com/usr/100003380/fb01708075744fc8b490bf3d01fa4b4a.jpg!150x0"
            },
            intro: "流行穿霄汉 灵魂造互换",
            premiereAt: 1480608000000,
            grade: "8.8",
            watchCount: 721997,
            cinemaCount: 122,
            scheduleCount: 2952,
            isPromotion: true,
            isNowPlaying: "",
            isComingSoon: true,
            isPresold: ""
      }],
      page: {
        total: 34,
        current: 1
      }
    },
    msg: 'ok'
  }

4. city

  request: http://m.maizuo.com/v4/api/city?__t=${timestamp}
  
  response: {
    status: 0,
    data: {
      cities: [{
        id: 10,
        name: "都江堰",
        pingyin: "DuJiangYan"
      }]
    },
    msg: 'ok'
  }

5. film detail

  request: http://m.maizuo.com/v4/api/film/3381?__t=${timestamp}
  
  response: {
    status: 0,
    data: {
      film: {
        id: 3381,
        name: ${filmName},
        imageryType: 1,
        cover: ..,
        poseter: ...,
        intro: ${filmIntro},
        synopsis: ${filmDetailIntro},
        premiereAt: ${timestamp},
        mins: 139,
        language: '英语',
        director: '吉布森',
        
      }
    },
    msg: 'ok'
  }
