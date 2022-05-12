import {StyleSheet, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: StatusBar.height,
    paddingHorizontal: 20,
  },

  content: {
    // paddingHorizontal: 10,
  },

  textWrapper: {
    paddingTop: 30,
    paddingBottom: 30,
  },

  title: {
    flexDirection: 'row',
    top: 20,
  },

  titleText: {
    color: '#323643',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    left: 50,
  },

  back: {
    paddingStart: 10,
    paddingTop: 8,
  },

  itemInfo: {
    top: 20,
    marginBottom: 20,
    justifyContent: 'center',
  },

  Label: {
    color: '#A9A9A9',
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    marginBottom: 10,
    paddingStart: 10,
  },

  info: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#C0C0C0',
    borderRadius: 15,
    height: 60,
    width: '100%',
    justifyContent: 'center',
  },

  inputInfo: {
    color: '#323643',
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    justifyContent: 'center',
    marginLeft: 10,
  },

  buttonAction: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: 35,
  },

  buttonSave: {
    backgroundColor: '#FE724C',
    height: 50,
    width: '60%',
    borderRadius: 35,
    justifyContent: 'center',
  },

  buttonSaveText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
