/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  main1: {
    // width: '100%',
    // height: '100%',
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
  // main2: {
  //   height: '25%',
  //   width: '100%',
  // },
  // main3: {
  //   height: '45%',
  //   width: '100%',
  //   // paddingTop: 25,
  // },
  // main4: {
  //   height: '30%',
  // },
  // main5: {
  //   flex: 1,
  //   height: '30%',
  //   top: 30,
  // },
  main4: {
    // top: 500,
    height: 500,
    // backgroundColor: 'red',
    // flex: 1,
  },
  // red2: {
  //   width: '100%',
  //   flex: 1,
  //   height: '25%',
  //   backgroundColor: '#FE724C',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderWidth: 1,
  // },
  // red3: {
  //   fontSize: 50,
  //   fontWeight: '600',
  //   color: '#FFFFFF',
  // },
  // red1: {
  //   width: '100%',
  //   height: 170,
  // },
  gr1: {},
  gr2: {
    fontSize: 30,
    fontFamily: 'Roboto-Bold',
    fontWeight: '600',
    color: 'black',
  },
  gr3: {
    width: windowWidth - 60,

    height: 50,
    marginTop: 10,
    flexDirection: 'row',
  },
  gr4: {
    position: 'relative',
    right: 0,
  },
  gr5: {
    color: 'black',
    position: 'relative',
    fontFamily: 'Roboto-Regular',

    fontSize: 17,
  },
  gr6: {
    width: windowWidth - 60,

    backgroundColor: 'white',
    height: 45,
    marginTop: 10,
    flexDirection: 'row',
    alignContent: 'center',
    borderRadius: 10,
    borderColor: '#FE724C',
    borderWidth: 1,
  },
  gr7: {
    width: 30,
    height: 30,

    marginTop: 8,
    justifyContent: 'center',
    alignContent: 'center',
  },
  gr8: {
    height: '100%',
    flex: 1,
    marginLeft: 10,
    fontSize: 20,
  },
  gr9: {
    top: 10,
    // width: windowWidth - 60,
    height: 50,
    backgroundColor: '#FE724C',

    marginTop: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignContent: 'center',
  },
  gr10: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
export default styles;
