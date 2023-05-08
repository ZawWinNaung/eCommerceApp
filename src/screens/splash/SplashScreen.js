import Lottie from 'lottie-react-native';
import {Layout} from '../../components';
import React, {useEffect} from 'react';
import {PRODUCT_LIST_SCREEN} from '../../constant/RouteName';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(PRODUCT_LIST_SCREEN);
    }, 2000);
  }, []);
  return (
    <Layout>
      <Lottie
        style={{height: '100%'}}
        source={require('assets/icon/routine.json')}
        autoPlay
        loop={false}
      />
    </Layout>
  );
}
