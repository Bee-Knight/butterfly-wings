import mocks from './mock'
import validators from './validator'
import dates from './dateutil'

let mockSwitch = false

module.exports = {
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
      registeredAt: validators.emptyStr()
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
      let firstPollen = validators.first(item.flyArena.pollens)
      let author = !validators.isNull(firstPollen) && !validators.isStrNullOrEmpty(firstPollen.author) ? firstPollen.author : validators.emptyStr()
      let title = !validators.isNull(firstPollen) && !validators.isStrNullOrEmpty(firstPollen.title) ? firstPollen.title : validators.emptyStr()

      return {
        id: item.flyArena.id,
        title: '飞花令：' + item.flyArena.flyTheme.theme,
        theme: item.flyArena.flyTheme.theme,
        cover: validators.isStrNullOrEmpty(item.flyArena.style.background) ? mocks.getDefaultFlyCover() : item.flyArena.style.background,
        repliesCount: validators.isArrayNullOrEmpty(item.flyArena.pollens) ? 0 : item.flyArena.pollens.length,
        mode: validators.isStrNullOrEmpty(item.flyArena.takePartMode) || item.flyArena.takePartMode === 'Open' ? "公开" : "私有",
        poetry: validators.isNull(firstPollen) ? validators.emptyStr() : firstPollen.value,
        lastModified: validators.isNull(firstPollen) ? '' : dates.getTimeText(firstPollen.ts),
        author: author + " " + title,
        desc: '分享带有「夏」字的一句古诗词即可。至少5字，体裁为诗、词、曲，不允许成语、词语，不允许从中截断。',//todo
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
    let ts = data.date
    return {
      title: ['今日主题：' + data.flyArena.flyTheme.theme],
      date: data.date.substr(0, 4) + '/' + data.date.substr(4, 2) + '/' + data.date.substr(6, 2),
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
  }
}
