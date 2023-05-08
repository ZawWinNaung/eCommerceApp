import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../styles';

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    width: '90%',
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
    alignSelf: 'stretch',
    flexDirection: 'column',
    backgroundColor: COLORS.divider,
    padding: wp(2.5),
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default styles;
