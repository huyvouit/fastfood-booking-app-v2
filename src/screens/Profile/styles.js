import {StyleSheet, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: StatusBar.height,
    paddingHorizontal: 20,
  },

  content: {
    paddingHorizontal: 10,
  },

  textWrapper: {
    paddingTop: 30,
    paddingBottom: 30,
  },

  back: {
    paddingStart: 10,
    paddingTop: 20,
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
    borderRadius: 50
  },

  iconPhoto: {
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
    color: '#000',
    fontWeight: 'bold',
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
    fontSize: 18,
  },

  itemInfo: {
    top: 20,
    marginBottom: 20,
    justifyContent: 'center',
  },

  Label: {
    color: '#C0C0C0',
    fontSize: 18,
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
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'center',
    marginLeft: 15,
  },
});

export default styles;
