import {StyleSheet, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: StatusBar.height,
  },

  content: {
    // paddingHorizontal: 10,
  },

  textWrapper: {
    // paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  title: {
    flexDirection: 'row',
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

  back: {
    paddingStart: 10,
    paddingTop: 8,
  },

  info: {
    marginBottom: 15,
  },

  label: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },

  inputName: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C0C0C0',
    marginTop: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },

  inputPhoneNumber: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C0C0C0',
    marginTop: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },

  inputCity: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C0C0C0',
    marginTop: 10,
    backgroundColor: '#fff',
    width: '100%',
    // paddingHorizontal: 15,
    textAlign: 'left !important',
  },

  inputDistrict: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C0C0C0',
    marginTop: 10,
    backgroundColor: '#fff',
  },

  input_Town_Ward: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C0C0C0',
    marginTop: 10,
    backgroundColor: '#fff',
  },

  inputAddress: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C0C0C0',
    marginTop: 10,
    backgroundColor: '#fff',
  },

  buttonAction: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    bottom: -10,
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
