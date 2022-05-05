import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    width: 75,
    height: 115,
    borderRadius: 50,
    elevation: 20,
    // flexDirection: 'row',
    // shadowColor: '#FE724C',
    // shadowOffset: {width: 0, height: 0},
    // shadowOpacity: 0.15,
    // shadowRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'flex-start',
    backgroundColor: '#FE724C',
    // padding: 5,
  },
  bgIcon: {
    backgroundColor: 'white',
    width: 45,
    height: 45,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  category: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
    borderRadius: 50,
  },
});

export default styles;
