export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/ground/ground',
    'pages/profile/profile',
    'pages/createpost/createpost'
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
        "iconPath": "images/icon_tabbar_home.png",
        "selectedIconPath": "images/icon_tabbar_home.png",
        "text": "首页"
      },
      {
        "pagePath": "pages/ground/ground",
        "iconPath": "images/icon_tabbar_airplane.png",
        "selectedIconPath": "images/icon_tabbar_airplane.png",
        "text": "发现"
      },
      {
        "pagePath": "pages/profile/profile",
        "iconPath": "images/icon_tabbar_items.png",
        "selectedIconPath": "images/icon_tabbar_items.png",
        "text": "我的"
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '飞花一夏',
    navigationBarTextStyle: 'black'
  }
})
