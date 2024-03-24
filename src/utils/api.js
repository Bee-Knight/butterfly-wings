let base = "https://wormhole.dcyy.cc"

module.exports = {
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
  getPostList() {
    return base + "/butterfly/fly-arena/find-taken-part"
  },
  getPostListByMode() {
    return base + "/butterfly/fly-arena/find-by-take-part-mode"
  },

  getRegisterFromWechat() {
    return base + "/butterfly/s/register-from-wechat"
  },
  getRegisterFromWechatAndLogin() {
    return base + "/butterfly/s/register-from-wechat-and-sign-in"
  },
  getLogin() {
    return base + "/butterfly/s/d-sign-in"
  },

  getModifyUser() {
    return base + "/butterfly/user/modify"
  },
  getUserProfile() {
    return base + "/butterfly/user/find-info"
  },

  getCode2Session() {
    return base + "/butterfly/wechat/code2session"
  },
}
