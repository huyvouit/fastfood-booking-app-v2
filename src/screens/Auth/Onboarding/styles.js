import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkOrange,
    // alignItems: "center",
    justifyContent: 'center',
  },
  dot: {
    backgroundColor: COLORS.lightGray,
    width: 8,
    height: 8,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: 'white',
    width: 15,
    height: 8,
    borderRadius: 8,
    marginHorizontal: 5,
  },
});

export default styles;
