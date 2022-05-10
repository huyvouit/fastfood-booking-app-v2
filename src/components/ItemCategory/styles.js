import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';

const styles = StyleSheet.create({
  container: (isActived, id) => ({
    width: 100,
    height: 45,
    borderRadius: 50,
    elevation: 5,
    flexDirection: 'row',
    // shadowColor: '#FE724C',
    // shadowOffset: {width: 0, height: 0},
    // shadowOpacity: 0.15,
    // shadowRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    // alignContent: 'flex-start',
    backgroundColor: isActived == id ? '#FE724C' : '#e4e4e4',
    // padding: 5,
  }),
  bgIcon: {
    backgroundColor: 'white',
    width: 35,
    height: 35,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 7,
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  category: (isActived, id) => ({
    color: isActived == id ? 'white' : '#323643',
    fontSize: 12.5,
    fontFamily: 'Roboto-Bold',
    fontWeight: '600',
    borderRadius: 50,
  }),
});

export default styles;
