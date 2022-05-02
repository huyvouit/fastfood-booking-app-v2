import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    borderRadius: 50,

    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
    borderColor: '#FE724C',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  icon: {
    color: '#FE724C',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default styles;
