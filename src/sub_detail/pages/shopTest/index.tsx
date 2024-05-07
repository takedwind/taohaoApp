import { Component } from 'react';
import { View } from '@tarojs/components';

class PageA extends Component {
  onShareAppMessage() {
    return {
      title: "商铺详情具体介绍",
      path: '/sub_detail/pages/shopTest/index',
      imageUrl: 'https://cdn-ssl.meb.com/mall/app/yansuo_specificate_tempimg.png'
    };
  }

  render() {
    return <View>分享这个页面</View>;
  }
}

export default PageA;
