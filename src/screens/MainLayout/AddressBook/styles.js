import {StyleSheet, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: StatusBar.height,
    paddingHorizontal: 20,
  },

  content: {
    paddingHorizontal: 15,
  },

  textWrapper: {
    paddingTop: 30,
    paddingBottom: 30,
  },

  title: {
    flexDirection: 'row',
    paddingTop: 30,
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
  },

  address: {
    borderRadius: 15,
    backgroundColor: '#fff',
    height: 100,
    width: '100%',
    justifyContent: 'center',
  },

  info: {
    paddingLeft: 10,
  },

  buttonAdd: {
    borderRadius: 30,
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    alignSelf: 'flex-end',
    marginTop: 10,
  },
});

export default styles;
