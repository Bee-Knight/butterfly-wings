module.exports = {
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
    return '微信用户'
  },
  getDefaultUserIntroduce() {
    return '该用户暂时还没有介绍哦～'
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
        url: 'https://pic-artastic.oss-cn-shanghai.aliyuncs.com/flower/534de8d0631b5d093da7e878e90e279b.png?x-oss-process=image/resize,m_fill,h_224,w_165',
        type: 'image',
        theme: '春',
      },
      {
        id: 2,
        url: 'https://pic-artastic.oss-cn-shanghai.aliyuncs.com/flower/d1ab62f0a83fbb5863d84b6667694a28.png?x-oss-process=image/resize,m_fill,h_85,w_163',
        type: 'post',
        title: '飞花令：春',
        theme: '春',
        desc: '分享带有「夏」字的一句古诗词即可。至少5字，体裁为诗、词、曲，不允许成语、词语，不允许从中截断。',
        lastModified: '5天前',
        mode: '公开'
      },
      {
        id: 3,
        url: 'https://pic-artastic.oss-cn-shanghai.aliyuncs.com/flower/d1ab62f0a83fbb5863d84b6667694a28.png?x-oss-process=image/resize,m_fill,h_85,w_163',
        type: 'post',
        title: '飞花令：春',
        theme: '春',
        desc: '分享带有「夏」字的一句古诗词即可。',
        lastModified: '5天前',
        mode: '公开'
      },
      {
        id: 4,
        url: 'https://pic-artastic.oss-cn-shanghai.aliyuncs.com/flower/d1ab62f0a83fbb5863d84b6667694a28.png?x-oss-process=image/resize,m_fill,h_85,w_163',
        type: 'post',
        title: '飞花令：春',
        theme: '春',
        desc: '分享带有「夏」字的一句古诗词即可。至少5字，体裁为诗、词、曲，不允许成语、词语，不允许从中截断。',
        lastModified: '5天前',
        mode: '公开'
      },
      {
        id: 5,
        url: 'https://pic-artastic.oss-cn-shanghai.aliyuncs.com/flower/d1ab62f0a83fbb5863d84b6667694a28.png?x-oss-process=image/resize,m_fill,h_85,w_163',
        type: 'post',
        title: '飞花令：春',
        theme: '春',
        desc: '分享带有「夏」字的一句古诗词即可。至少5字，体裁为诗、词、曲，不允许成语、词语，不允许从中截断。',
        lastModified: '5天前',
        mode: '公开'
      },
      {
        id: 6,
        url: 'https://pic-artastic.oss-cn-shanghai.aliyuncs.com/flower/534de8d0631b5d093da7e878e90e279b.png?x-oss-process=image/resize,m_fill,h_224,w_165',
        type: 'image',
        title: '春',
        theme: '春',
      },
      {
        id: 7,
        url: 'https://pic-artastic.oss-cn-shanghai.aliyuncs.com/flower/d1ab62f0a83fbb5863d84b6667694a28.png?x-oss-process=image/resize,m_fill,h_85,w_163',
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
    let d_url = new Date().getTime() % 2 === 0
      ? 'https://pic-artastic.oss-cn-shanghai.aliyuncs.com/flower/534de8d0631b5d093da7e878e90e279b.png'
      : 'https://pic-artastic.oss-cn-shanghai.aliyuncs.com/Rectangle%202.png'
    return {
      title: ['今日主题：灯火'],
      date: '2024/05/26',
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
