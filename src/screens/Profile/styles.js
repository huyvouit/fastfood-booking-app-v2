import {StyleSheet, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  content: {
    // paddingHorizontal: 10,
  },

  textWrapper: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingHorizontal: 20,
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
    color: '#000',
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
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

  //
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF724C',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#f4f4f4',
    paddingTop: 20,
    // height: 200,

    // marginLeft: 20,
    // marginRight: 0,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
    // width: '100%',
  },
  header: {
    backgroundColor: '#f4f4f4',
    shadowColor: '#333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#ff724c',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
});

export default styles;
