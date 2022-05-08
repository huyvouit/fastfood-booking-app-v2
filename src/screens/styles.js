import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
  },
  iconMenu: {
    borderColor: '#000',
    borderRadius: 12,
    borderWidth: 1,
    padding: 5,
  },
  footerBottomTab: {
    height: 80,
    justifyContent: 'flex-end',
    backgroundColor: 'white',
  },
  linear: {
    position: 'absolute',
    top: -10,
    left: 0,
    right: 0,
    height: 80,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  // main content
  mainContent: {
    width,
    height,
  },
});

export default styles;
