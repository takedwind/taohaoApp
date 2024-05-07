export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/shop/index',
  ],
  subPackages: [
    {
      root: "sub_detail",
      pages: [
        "pages/productDetail/index",
        "pages/shopTest/index"
      ],
      independent: true
    },
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#999999',
    selectedColor: '#333333',
    backgroundColor: '#FFFFFF',
    list: [
        {
            pagePath: 'pages/index/index',
            text: '首页',
            iconPath: 'resources/index.png',
            selectedIconPath: 'resources/index_active.png'
        },
        {
            pagePath: 'pages/shop/index',
            text: '商城',
            iconPath: 'resources/photo.png',
            selectedIconPath: 'resources/photo_active.png'
        },
    ]
  },
})
