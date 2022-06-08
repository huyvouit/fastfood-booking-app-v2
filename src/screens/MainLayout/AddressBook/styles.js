import {StyleSheet, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: StatusBar.height,
  },

  content: {
    paddingHorizontal: 15,
  },

  textWrapper: {
    paddingBottom: 30,
  },

  title: {
    flexDirection: 'row',
  },

  back: {
    paddingStart: 10,
    paddingTop: 8,
  },

  titleText: {
    color: '#323643',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    left: 50,
    top: -10,
  },

  address: {
    borderRadius: 15,
    backgroundColor: '#fff',
    // height: 100,
    width: '100%',
    justifyContent: 'center',
    marginBottom: 20,
    padding: 20,
    position: 'relative',
  },
  icons: {
    flexDirection: 'row',
    // justifyContent: 'flex-end',
    position: 'absolute',
    right: 10,
    top: 20,
    zIndex: 10,
  },
  icons1: {
    flexDirection: 'row',
    // justifyContent: 'flex-end',
    position: 'absolute',
    right: 35,
    top: 20,
    backgroundColor: 'red',
    zIndex: 10,
  },
  icons2: {
    flexDirection: 'row',
    // justifyContent: 'flex-end',
    position: 'absolute',
    right: 60,
    top: 20,
  },
  info: {
    // paddingLeft: 10,
  },
  infoUser: {
    fontSize: 18,
  },

  buttonAdd: {
    borderRadius: 50,
    width: 80,
    height: 80,
    backgroundColor: '#ff724c',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 10,
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
});

export default styles;
