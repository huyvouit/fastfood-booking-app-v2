import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: Dimensions.get('screen').width,
    flex: 1,
  },
  back: {
    marginRight: 20,
  },
  titlePage: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '600',
    fontFamily: 'Roboto-Bold',
    // color: '#323643',
    position: 'absolute',
    left: '50%',
    transform: [{translateX: -15}],
  },
});
export default styles;
