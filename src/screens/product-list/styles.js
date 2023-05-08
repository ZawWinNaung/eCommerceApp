import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../styles';

const styles = StyleSheet.create({
  list: {display: 'flex'},
  titleContainer: {
    width: '100%',
    padding: wp(5),
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  titleTxt: {
    color: COLORS.primary,
    fontSize: hp(4),
  },
  cart: {
    alignSelf: 'flex-end',
    color: COLORS.primary,
  },
  searchBarContainer: {
    marginHorizontal: wp(5),
    marginTop: hp(2),
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 100,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  textInput: {
    width: '100%',
    paddingLeft: wp(4),
  },
});

export default styles;
