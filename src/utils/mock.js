import dates from './dateutil'

export default {
  getDefaultCreatePostHint() {
    return '还没有参与过飞花令~快来“发现”吧~'
  },
  getDefaultModeDesc() {
    return '“公开”所有用户均可参与，“私有”其他用户申请通过方可参与。'
  },
  getDefaultRuleDesc(str) {
    return '分享带有「' + str + '」字的一句古诗词即可。至少5字，体裁为诗、词、曲，不允许成语、词语，不允许从中截断。'
  },
  getDefaultFlyPoetry() {
    return '还没有开始飞～快来飞一句吧~'
  },
  getDefaultFlyCover() {
    return 'https://img.cjyun.org.cn/a/10008/201805/90a8a8e76ab9de005e34f0778367ae22.jpeg'
  },
  getDefaultUserBg() {
    return 'https://pic-artastic.oss-cn-shanghai.aliyuncs.com/flower/profile-cover.png'
  },
  getDefaultUserAvatar() {
    return 'https://pic-artastic.oss-cn-shanghai.aliyuncs.com/flower/deafault-avatar.jpeg'
  },
  getDefaultUserNickname() {
    return '飞花小客'
  },
  getDefaultUserIntroduce() {
    return '该用户暂时还没有介绍哦～'
  },
  getDefaultFlyCoverList() {
    return [
      "https://img.cjyun.org.cn/a/10008/201805/90a8a8e76ab9de005e34f0778367ae22.jpeg",
      "https://b0.bdstatic.com/b6ee3fcd2886b8c03443b4d8415476d1.jpg@h_1280",
      "https://img0.baidu.com/it/u=3394380960,655644128&fm=253&fmt=auto&app=138&f=JPEG?w=678&h=380",
      "https://img2.baidu.com/it/u=3601527929,3353747448&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=400"
    ]
  },
  getMockCommentList() {
    return [
      {
        "id": "1",
        "avatar": 'https://pic-artastic.oss-cn-shanghai.aliyuncs.com/flower/deafault-avatar.jpeg',
        "nickname": "泰州小李杜",
        "poetry": "想眼中能有多少泪珠儿， \n怎禁得秋流到冬尽， \n春流到夏!",
        "lastModified": "5天前",
        "author": "曹雪芹《红楼梦十二曲·其三·枉凝眉》",
      },
      {
        "id": "2",
        "avatar": 'https://pic-artastic.oss-cn-shanghai.aliyuncs.com/flower/deafault-avatar.jpeg',
        "nickname": "泰州小李杜",
        "poetry": "绝怜首夏清和句，\n一字其间几个知",
        "lastModified": "5天前",
        "author": "曹雪芹《红楼梦十二曲·其三·枉凝眉》",
      },
      {
        "id": "3",
        "avatar": 'https://pic-artastic.oss-cn-shanghai.aliyuncs.com/flower/deafault-avatar.jpeg',
        "nickname": "泰州小李杜",
        "poetry": "想眼中能有多少泪珠儿， \n怎禁得秋流到冬尽， \n春流到夏!",
        "lastModified": "5天前",
        "author": "曹雪芹《红楼梦十二曲·其三·枉凝眉》",
      },
    ]
  },
  getMockPostDetail() {
    return {
      id: "testid",
      cover: 'https://img.cjyun.org.cn/a/10008/201805/90a8a8e76ab9de005e34f0778367ae22.jpeg',
      title: '飞花令：春',
      repliesCount: 2863,
      desc: '分享带有「夏」字的一句古诗词即可。至少5字，体裁为诗、词、曲，不允许成语、词语，不允许从中截断。',
      mode: '公开',
      playersCount: 593
    }
  },
  getMockUserProfile() {
    return {
      avatar: 'https://pic-artastic.oss-cn-shanghai.aliyuncs.com/flower/deafault-avatar.jpeg',
      nickname: '泰州小李杜',
      desc: '人生得意须尽欢，莫使金樽空对月。',
      bg: this.getDefaultUserBg()
    }
  },
  getMockDPostList() {
    return [
      {
        id: 1,
        cover: 'https://pic-artastic.oss-cn-shanghai.aliyuncs.com/flower/534de8d0631b5d093da7e878e90e279b.png?x-oss-process=image/resize,m_fill,h_224,w_165',
        type: 'image',
        theme: '春',
      },
      {
        id: 2,
        cover: 'https://pic-artastic.oss-cn-shanghai.aliyuncs.com/flower/d1ab62f0a83fbb5863d84b6667694a28.png?x-oss-process=image/resize,m_fill,h_85,w_163',
        type: 'post',
        title: '飞花令：春',
        theme: '春',
        desc: '分享带有「夏」字的一句古诗词即可。至少5字，体裁为诗、词、曲，不允许成语、词语，不允许从中截断。',
        lastModified: '5天前',
        mode: '公开'
      },
      {
        id: 3,
        cover: 'https://pic-artastic.oss-cn-shanghai.aliyuncs.com/flower/d1ab62f0a83fbb5863d84b6667694a28.png?x-oss-process=image/resize,m_fill,h_85,w_163',
        type: 'post',
        title: '飞花令：春',
        theme: '春',
        desc: '分享带有「夏」字的一句古诗词即可。',
        lastModified: '5天前',
        mode: '公开'
      },
      {
        id: 4,
        cover: 'https://pic-artastic.oss-cn-shanghai.aliyuncs.com/flower/d1ab62f0a83fbb5863d84b6667694a28.png?x-oss-process=image/resize,m_fill,h_85,w_163',
        type: 'post',
        title: '飞花令：春',
        theme: '春',
        desc: '分享带有「夏」字的一句古诗词即可。至少5字，体裁为诗、词、曲，不允许成语、词语，不允许从中截断。',
        lastModified: '5天前',
        mode: '公开'
      },
      {
        id: 5,
        cover: 'https://pic-artastic.oss-cn-shanghai.aliyuncs.com/flower/d1ab62f0a83fbb5863d84b6667694a28.png?x-oss-process=image/resize,m_fill,h_85,w_163',
        type: 'post',
        title: '飞花令：春',
        theme: '春',
        desc: '分享带有「夏」字的一句古诗词即可。至少5字，体裁为诗、词、曲，不允许成语、词语，不允许从中截断。',
        lastModified: '5天前',
        mode: '公开'
      },
      {
        id: 6,
        cover: 'https://pic-artastic.oss-cn-shanghai.aliyuncs.com/flower/534de8d0631b5d093da7e878e90e279b.png?x-oss-process=image/resize,m_fill,h_224,w_165',
        type: 'image',
        title: '春',
        theme: '春',
      },
      {
        id: 7,
        cover: 'https://pic-artastic.oss-cn-shanghai.aliyuncs.com/flower/d1ab62f0a83fbb5863d84b6667694a28.png?x-oss-process=image/resize,m_fill,h_85,w_163',
        type: 'post',
        title: '飞花令：春',
        theme: '春',
        desc: '分享带有「夏」字的一句古诗词即可。至少5字，体裁为诗、词、曲，体裁为诗、词、曲。',
        lastModified: '5天前',
        mode: '公开'
      },
    ]
  },
  getMockRecCard() {
    let d_url = new Date().getDay() % 2 === 0
      ? 'https://pic-artastic.oss-cn-shanghai.aliyuncs.com/flower/534de8d0631b5d093da7e878e90e279b.png'
      : 'https://pic-artastic.oss-cn-shanghai.aliyuncs.com/Rectangle%202.png'
    let formatTime = dates.formatSimpleTime(new Date())
    return {
      banner: '诗辞大会',
      title: '今日主题：灯火',
      theme: '灯火',
      date: formatTime,
      url: d_url,
    }
  },
  getMockPostList() {
    return [
      {
        "id": "1",
        "title": "飞花令：春",
        "cover": "https://img.cjyun.org.cn/a/10008/201805/90a8a8e76ab9de005e34f0778367ae22.jpeg",
        "repliesCount": 10,
        "mode": "私",
        "poetry": "想眼中能有多少泪珠儿， \n怎禁得秋流到冬尽， \n春流到夏!",
        "lastModified": "5天前",
        "author": "曹雪芹《红楼梦十二曲·其三·枉凝眉》",
        "desc": "这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。"
      },
      {
        "id": "2",
        "title": "飞花令：春",
        "cover": "https://img.cjyun.org.cn/a/10008/201805/90a8a8e76ab9de005e34f0778367ae22.jpeg",
        "repliesCount": 11,
        "poetry": "想眼中能有多少泪珠儿， \n怎禁得秋流到冬尽， \n春流到夏!",
        "lastModified": "5天前",
        "author": "曹雪芹《红楼梦十二曲·其三·枉凝眉》",
        "desc": "这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。"
      },
      {
        "id": "3",
        "title": "飞花令：春",
        "cover": "https://img.cjyun.org.cn/a/10008/201805/90a8a8e76ab9de005e34f0778367ae22.jpeg",
        "repliesCount": 12,
        "mode": "私",
        "poetry": "想眼中能有多少泪珠儿， \n怎禁得秋流到冬尽， \n春流到夏!",
        "lastModified": "5天前",
        "author": "曹雪芹《红楼梦十二曲·其三·枉凝眉》",
        "desc": "这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。"
      },
      {
        "id": "4",
        "title": "飞花令：春",
        "cover": "https://img.cjyun.org.cn/a/10008/201805/90a8a8e76ab9de005e34f0778367ae22.jpeg",
        "repliesCount": 13,
        "poetry": "想眼中能有多少泪珠儿， \n怎禁得秋流到冬尽， \n春流到夏!",
        "lastModified": "5天前",
        "author": "曹雪芹《红楼梦十二曲·其三·枉凝眉》",
        "desc": "这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。"
      },
      {
        "id": "5",
        "title": "飞花令：春",
        "cover": "https://img.cjyun.org.cn/a/10008/201805/90a8a8e76ab9de005e34f0778367ae22.jpeg",
        "repliesCount": 13,
        "poetry": "想眼中能有多少泪珠儿， \n怎禁得秋流到冬尽， \n春流到夏!",
        "lastModified": "5天前",
        "author": "曹雪芹《红楼梦十二曲·其三·枉凝眉》",
        "desc": "这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。"
      },
      {
        "id": "6",
        "title": "飞花令：春",
        "cover": "https://img.cjyun.org.cn/a/10008/201805/90a8a8e76ab9de005e34f0778367ae22.jpeg",
        "repliesCount": 13,
        "poetry": "想眼中能有多少泪珠儿， \n怎禁得秋流到冬尽， \n春流到夏!",
        "lastModified": "5天前",
        "author": "曹雪芹《红楼梦十二曲·其三·枉凝眉》",
        "desc": "这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。"
      },
      {
        "id": "7",
        "title": "飞花令：春",
        "cover": "https://img.cjyun.org.cn/a/10008/201805/90a8a8e76ab9de005e34f0778367ae22.jpeg",
        "repliesCount": 13,
        "poetry": "想眼中能有多少泪珠儿， \n怎禁得秋流到冬尽， \n春流到夏!",
        "lastModified": "5天前",
        "author": "曹雪芹《红楼梦十二曲·其三·枉凝眉》",
        "desc": "这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。"
      },
      {
        "id": "8",
        "title": "飞花令：春",
        "cover": "https://img.cjyun.org.cn/a/10008/201805/90a8a8e76ab9de005e34f0778367ae22.jpeg",
        "repliesCount": 13,
        "poetry": "想眼中能有多少泪珠儿， \n怎禁得秋流到冬尽， \n春流到夏!",
        "lastModified": "5天前",
        "author": "曹雪芹《红楼梦十二曲·其三·枉凝眉》",
        "desc": "这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。这是飞花令的规则。"
      }
    ]
  }
}
