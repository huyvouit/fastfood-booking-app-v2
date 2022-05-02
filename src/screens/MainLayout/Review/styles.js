import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
  },
  content: {
    justifyContent: 'space-between',
    alignItems: 'center',
    // flex: 1,
  },
  imageProduct: {
    position: 'relative',
    width: 100,
    height: 100,
    top: -50,
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCenter: {
    // justifyContent: 'center',
    alignItems: 'center',
    // flex: 1,
    // marginTop: 30,
    // paddingBottom: 30,
    width: '100%',

    position: 'relative',
    top: -30,
  },
  nameProduct: {
    fontSize: 22,
    fontWeight: '700',
    fontFamily: 'Roboto-Bold',
    letterSpacing: 1.4,
    paddingBottom: 20,
    // position: 'relative',
    // top: -50,
  },
  desc: {
    fontSize: 17,
    fontWeight: '500',
    fontFamily: 'Roboto-Regular',
    letterSpacing: 1.1,
    paddingBottom: 30,
    // position: 'relative',
    // top: -50,
    color: '#9796A1',
  },

  info: {
    fontSize: 25,
    fontWeight: '700',
    fontFamily: 'Roboto-Bold',
    letterSpacing: 1.1,
    paddingBottom: 15,
    // position: 'relative',
    // top: -30,
  },
  textarea: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    color: '#9796A1',
    fontSize: 17,
    fontWeight: '500',
    fontFamily: 'Roboto-Regular',
    width: '100%',
    height: 150,
    padding: 20,
    // position: 'relative',
    // top: -30,
    outlineColor: '#9796A1',
  },
});

export default styles;
