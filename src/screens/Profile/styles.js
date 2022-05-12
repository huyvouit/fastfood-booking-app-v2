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

  profile: {
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: 30,
  },

  avatar: {
    flexDirection: 'row',
    marginBottom: 10,
  },

  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },

  buttonChangePhoto: {
    borderRadius: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  iconCamera: {
    backgroundColor: '#fff',
    borderRadius: 20,
    height: 30,
    width: 30,
    bottom: 5,
    right: 12,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },

  edit: {
    marginBottom: 20,
  },

  name: {
    color: '#323643',
    fontWeight: '700',
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
  },

  editProfile: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },

  editProfileText: {
    color: '#C0C0C0',
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    fontWeight: '700',
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

  infoText: {
    color: '#323643',
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    justifyContent: 'center',
    marginLeft: 15,
  },
});

export default styles;
