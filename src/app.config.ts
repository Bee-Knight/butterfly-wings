export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/ground/ground',
    'pages/profile/profile',
    'pages/createpost/createpost',
    'pages/postdetail/postdetail',
    'pages/updatenickname/updatenickname',
    'pages/updatedesc/updatedesc'
  ],
  tabBar: {
    // "custom": true,
    "color": "#7A7E83",
    "selectedColor": "#000000",
    "borderStyle": "black",
    "backgroundColor": "#ffffff",
    "list": [
      {
        "pagePath": "pages/index/index",
        "iconPath": "images/icon_tabbar_1_unselected.png",
        "selectedIconPath": "images/icon_tabbar_1_selected.png",
        "text": "首页"
      },
      {
        "pagePath": "pages/ground/ground",
        "iconPath": "images/icon_tabbar_2_unselected.png",
        "selectedIconPath": "images/icon_tabbar_2_selected.png",
        "text": "发现"
      },
      {
        "pagePath": "pages/profile/profile",
        "iconPath": "images/icon_tabbar_3_unselected.png",
        "selectedIconPath": "images/icon_tabbar_3_selected.png",
        "text": "我的"
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#FFF',
    navigationBarTitleText: '飞花一夏',
    navigationBarTextStyle: 'black',
    navigationStyle: 'custom',
    enablePullDownRefresh: false
  }
})
