import mocks from './mock'
import validators from './validator'
import dates from './dateutil'

let mockSwitch = false

export default {
  getUserProfile(data) {
    if (mockSwitch) {
      return mocks.getMockUserProfile()
    }
    if (validators.isNull(data)) {
      return validators.emptyObj()
    }
    return {
      id: data.id,
      avatar: validators.isStrNullOrEmpty(data.avatar) ? mocks.getDefaultUserAvatar() : data.avatar,
      nickname: validators.isStrNullOrEmpty(data.nickname) ? mocks.getDefaultUserNickname() : data.nickname,
      desc: validators.isStrNullOrEmpty(data.introduction) ? mocks.getDefaultUserIntroduce() : data.introduction,
      gender: validators.emptyStr(),
      bg: mocks.getDefaultUserBg(),
      registeredAt: validators.emptyStr(),
      default_nn: validators.isStrNullOrEmpty(data.nickname),
      default_desc: validators.isStrNullOrEmpty(data.introduction)
    }
  },
  getPostList(data) {
    if (mockSwitch) {
      return mocks.getMockPostList()
    }
    if (validators.isArrayNullOrEmpty(data)) {
      return validators.emptyArray()
    }
    return data.map((item, i) => {
      let firstPollen = validators.last(item.flyArena.pollens)
      let author = !validators.isNull(firstPollen) && !validators.isStrNullOrEmpty(firstPollen.author) ? firstPollen.author : validators.emptyStr()
      let title = !validators.isNull(firstPollen) && !validators.isStrNullOrEmpty(firstPollen.title) ? firstPollen.title : validators.emptyStr()
      let text = '';
      if (!validators.isStrNullOrEmpty(author) && !validators.isStrNullOrEmpty(title)) {
        text = author + "・" + title
      } else if (!validators.isStrNullOrEmpty(author)) {
        text = author
      } else if (!validators.isStrNullOrEmpty(title)) {
        text = title
      }
      return {
        id: item.flyArena.id,
        title: '飞花令：' + item.flyArena.flyTheme.theme,
        theme: item.flyArena.flyTheme.theme,
        cover: validators.isStrNullOrEmpty(item.flyArena.style.background) ? mocks.getDefaultFlyCover() : item.flyArena.style.background,
        repliesCount: validators.isArrayNullOrEmpty(item.flyArena.pollens) ? 0 : item.flyArena.pollens.length,
        mode: validators.isStrNullOrEmpty(item.flyArena.takePartMode) || item.flyArena.takePartMode === 'Open' ? "公开" : "私有",
        poetry: validators.isNull(firstPollen) ? mocks.getDefaultFlyPoetry() : firstPollen.value,
        lastModified: validators.isNull(firstPollen) ? dates.getTimeText(item.flyArena.beginAt) : dates.getTimeText(firstPollen.ts),
        author: text,
        flyRule: item.flyArena.flyRule
      }
    })
  },
  getRecCard(data) {
    if (mockSwitch) {
      return mocks.getMockRecCard()
    }
    if (validators.isNull(data) || validators.isNull(data.style) || validators.isStrNullOrEmpty(data.style.background)) {
      return mocks.getMockRecCard()
    }
    if (validators.isNull(data.date) || validators.isNull(data.flyArena) || validators.isNull(data.flyArena.flyTheme)) {
      return mocks.getMockRecCard()
    }
    let ts = data.date
    return {
      title: '今日主题：' + data.flyArena.flyTheme.theme,
      theme: data.flyArena.flyTheme.theme,
      date: ts.substr(0, 4) + '/' + ts.substr(4, 2) + '/' + ts.substr(6, 2),
      url: data.style.background
    }
  },
  getPostDetail(data) {
    if (mockSwitch) {
      return mocks.getMockPostDetail()
    }
    if (validators.isNull(data)) {
      return validators.emptyObj()
    }

    return {
      id: data.id,
      cover: validators.isStrNullOrEmpty(data.style.background) ? mocks.getDefaultFlyCover() : data.style.background,
      title: '飞花令：' + data.flyTheme.theme,
      theme: data.flyTheme.theme,
      repliesCount: validators.isArrayNullOrEmpty(data.pollens) ? 0 : data.pollens.length,
      desc: '分享带有「夏」字的一句古诗词即可。至少5字，体裁为诗、词、曲，不允许成语、词语，不允许从中截断。',
      mode: validators.isStrNullOrEmpty(data.takePartMode) || data.takePartMode === 'Open' ? "公开" : "私有",
      playersCount: validators.isArrayNullOrEmpty(data.players) ? 0 : data.players.length,
    }
  },

  getCommentList(data) {
    if (mockSwitch) {
      return mocks.getMockCommentList()
    }
    if (validators.isNull(data) || validators.isArrayNullOrEmpty(data.pollens)) {
      return validators.emptyArray()
    }

    return data.pollens.map((item, i) => {
      let avatar = validators.isNull(item.player) ? mocks.getDefaultUserAvatar() : item.player.avatar
      let nickname = validators.isNull(item.player) ? mocks.getDefaultUserNickname() : item.player.nickname
      let author = validators.isStrNullOrEmpty(item.author) ? '' : item.author
      let title = validators.isStrNullOrEmpty(item.title) ? '' : item.title
      let text = '';
      if (!validators.isStrNullOrEmpty(author) && !validators.isStrNullOrEmpty(title)) {
        text = author + "・" + title
      } else if (!validators.isStrNullOrEmpty(author)) {
        text = author
      } else if (!validators.isStrNullOrEmpty(title)) {
        text = title
      }

      return {
        id: i,
        avatar: avatar,
        nickname: nickname,
        poetry: item.value,
        lastModified: dates.getTimeText(new Date(item.ts)),
        author: text
      }
    }).reverse()
  }
}
