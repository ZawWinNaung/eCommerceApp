import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../styles';

const styles = StyleSheet.create({
  itemContainer: {
    marginHorizontal: wp(4),
    backgroundColor: COLORS.item,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.26,
    shadowRadius: 10,
    elevation: 4,
    alignItems: 'center',
    marginVertical: hp(2),
  },
  image: {
    width: wp(30),
    height: undefined,
    margin: wp(2.5),
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    width: wp(40),
    backgroundColor: COLORS.divider,
    padding: wp(2.5),
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default styles;
