/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  main1: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  main2: {
    height: '25%',
    width: '100%',
  },
  main3: {
    height: '45%',
    width: '100%',
    backgroundColor: 'F5F5F5',
  },
  main4: {
    height: '45%',
    width: '100%',
    backgroundColor: 'F5F5F5',
    top: 300,
  },
  red1: {
    width: '100%',
    flex: 1,
    height: '25%',
    backgroundColor: '#FE724C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  red2: {
    fontSize: 50,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  gr0: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  gr1: {
    fontSize: 30,
    marginLeft: 30,
    fontWeight: '600',
  },
  gr2: {
    width: windowWidth - 60,
    marginLeft: 30,
    backgroundColor: 'white',
    height: 45,
    marginTop: 20,
    flexDirection: 'row',
    alignContent: 'center',
    borderWidth: 1,
    borderColor: '#FE724C',
    borderRadius: 10,
  },
  gr3: {
    width: 30,
    height: 30,
    marginLeft: 15,
    marginTop: 8,
    justifyContent: 'center',
    alignContent: 'center',
  },
  gr4: {
    height: '100%',
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: 'black',
  },
  gr5: {
    width: 30,
    height: 30,
    marginLeft: 18,
    marginTop: 8,
    justifyContent: 'center',
    alignContent: 'center',
  },
  gr6: {
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
  gr7: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});
export default styles;
