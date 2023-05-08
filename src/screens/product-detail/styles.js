import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../styles';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {
    width: '60%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  productContainer: {
    alignSelf: 'stretch',
    backgroundColor: 'white',
    marginVertical: hp(2.5),
    marginHorizontal: wp(5),
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.26,
    shadowRadius: 10,
    elevation: 4,
    paddingHorizontal: wp(3),
    paddingVertical: hp(2),
    flexDirection: 'column',
  },
  titletxt: {color: 'black', fontSize: hp(2.6)},
  txt: {marginVertical: hp(2)},
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: hp(2),
  },
  backIcon: {
    alignSelf: 'flex-start',
    margin: wp(2.5),
  },
  appBarTxt: {
    color: 'black',
    fontSize: hp(3),
  },
  buyingContainer: {
    flexDirection: 'row',
    marginTop: hp(2),
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: disabled => ({
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    height: hp(5),
    opacity: disabled ? 0.5 : 1,
  }),
  buttonTxt: {
    color: 'white',
    fontSize: hp(2.6),
    marginHorizontal: wp(4),
  },
});

export default styles;
