/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  main1: {
    width: '100%',
    height: '100%',
  },
  main2: {
    height: '30%',
    width: '100%',
  },
  main3: {
    top: 15,
    height: '55%',
    width: '100%',
    backgroundColor: 'F5F5F5',
    flex: 1,
  },
  main4: {
    top: 500,
    flex: 1,
  },
  red2: {
    width: '100%',
    flex: 1,
    height: '25%',
    backgroundColor: '#FE724C',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  red3: {
    fontSize: 50,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  red1: {
    width: '100%',
    height: 170,
  },
  gr1: {
    height: '100%',
    width: '100%',
    alignContent: 'center',
  },
  gr2: {
    fontSize: 30,
    marginLeft: 30,
    fontWeight: '600',
    color: 'black',
  },
  gr3: {
    width: windowWidth - 60,
    marginLeft: 30,
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
    right: 0,
    fontSize: 16,
  },
  gr6: {
    width: windowWidth - 60,
    marginLeft: 30,
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
    marginLeft: 15,
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
    width: windowWidth - 60,
    height: 50,
    backgroundColor: '#FE724C',
    marginLeft: 30,
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
