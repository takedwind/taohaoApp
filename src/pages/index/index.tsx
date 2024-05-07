import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'
import Taro from '@tarojs/taro'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  const itemClick = () => {
    Taro.navigateTo({url: '/sub_detail/pages/productDetail/index'});
  };

  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <View style={{marginTop: 100}} onClick={() => itemClick()}>
        <Text style={{color:'red', fontSize: 40}}>gogogogo</Text>
      </View>
    </View>
  )
}
