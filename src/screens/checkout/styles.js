import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  backIcon: {
    alignSelf: 'flex-start',
    margin: wp(2.5),
  },
  appBarTxt: {
    color: 'black',
    fontSize: hp(3),
  },
});

export default styles;
