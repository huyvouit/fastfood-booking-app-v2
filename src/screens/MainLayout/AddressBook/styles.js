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
