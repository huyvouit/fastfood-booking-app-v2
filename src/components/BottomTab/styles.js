import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // paddingHorizontal: 20,
    // paddingBottom: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
  },

  //tab buttom
  tabActived: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actived: {
    flexDirection: 'row',
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  textTab: {
    marginLeft: 12,
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
  },
});

export default styles;
