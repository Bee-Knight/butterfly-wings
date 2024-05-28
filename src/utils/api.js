let base = "https://wormhole.dcyy.cc"

module.exports = {
  // activity
  getNewDailyFly() {
    return base + "/butterfly/activity/new-daily-fly"
  },
  getFindTodayFly() {
    return base + "/butterfly/activity/find-today-fly"
  },

  // application
  getApply() {
    return base + "/butterfly/application/apply"
  },
  getReject() {
    return base + "/butterfly/application/reject"
  },
  getAgree() {
    return base + "/butterfly/application/agree"
  },

  // community
  getNewFeedback() {
    return base + "/butterfly/community/feedback/new"
  },
  getNewReply() {
    return base + "/butterfly/community/feedback/new-reply"
  },
  getFindAll() {
    return base + "/butterfly/community/feedback/find-all"
  },

  // file
  getPutFile() {
    return base + "/butterfly/file/put"
  },
  getFindDefaultAvatars() {
    return base + "/butterfly/file/find-default-avatars"
  },
  getFindDefaultUserBgs() {
    return base + "/butterfly/file/find-default-user-backgrounds"
  },
  getFindDefaultFlyCovers() {
    return base + "/butterfly/file/find-default-fly-arena-covers"
  },

  // fly-arena
  getCreatePost() {
    return base + "/butterfly/fly-arena/new"
  },
  getTakePost() {
    return base + "/butterfly/fly-arena/take-part"
  },
  getFlyPost() {
    return base + "/butterfly/fly-arena/fly"
  },
  getEndPost() {
    return base + "/butterfly/fly-arena/end"
  },
  getReadPost() {
    return base + "/butterfly/fly-arena/read"
  },
  getPostList() {
    return base + "/butterfly/fly-arena/find-taken-part"
  },
  getPostListByMode(mode) {
    return base + "/butterfly/fly-arena/find-by-take-part-mode?mode=" + mode
  },
  getPostDetail(id) {
    return base + "/butterfly/fly-arena/detail?id=" + id
  },

  // poetry
  getFindPoetry() {
    return base + "/butterfly/poetry/find"
  },

  // sign
  getRegisterFromWechatAndLogin() {
    return base + "/butterfly/s/register-from-wechat-and-sign-in"
  },
  getLogin() {
    return base + "/butterfly/s/d-sign-in"
  },

  // user
  getModifyUser() {
    return base + "/butterfly/user/modify"
  },
  getUserProfile() {
    return base + "/butterfly/user/find-info"
  },

  // wechat
  getCode2Session(code) {
    return base + "/butterfly/wechat/code2session?code=" + code
  },
}
