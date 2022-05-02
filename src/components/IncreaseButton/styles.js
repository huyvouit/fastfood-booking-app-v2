import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    borderRadius: 50,
    elevation: 20,
    shadowColor: '#FE724C',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.15,
    shadowRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FE724C',
  },
  icon: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default styles;
