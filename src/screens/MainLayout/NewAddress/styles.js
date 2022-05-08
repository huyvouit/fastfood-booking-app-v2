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
    paddingTop: 30,
  },

  titleText: {
    color: '#000',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
  },

  back: {
    paddingStart: 10,
    paddingTop: 8,
  },

  info: {
    marginBottom: 15,
  },

  label: {
    color: '#A9A9A9',
    fontWeight: 'bold',
  },

  inputName: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C0C0C0',
    marginTop: 10,
    backgroundColor: '#fff',
  },

  inputPhoneNumber: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C0C0C0',
    marginTop: 10,
    backgroundColor: '#fff',
  },

  /* inputCity: {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#C0C0C0',
      marginTop: 10,
      backgroundColor: '#fff',
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
    */

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
