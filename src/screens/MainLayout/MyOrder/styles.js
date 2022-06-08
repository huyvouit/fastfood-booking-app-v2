import {StyleSheet, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: StatusBar.height,
    //
  },

  content: {
    // paddingHorizontal: 15,
    height: 570,
  },

  textWrapper: {
    // paddingTop: 30,s
    paddingBottom: 30,
    paddingHorizontal: 20,
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

  tab: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    height: 50,
    width: '100%',
    borderRadius: 25,
    borderColor: '#C0C0C0',
    overflow: 'hidden',
    padding: 5,
    marginBottom: 15,
  },

  tabUpcoming: (index, id) => ({
    backgroundColor: index == id ? '#FE724C' : '#fff',
    justifyContent: 'center',
    borderRadius: 25,
    height: 40,
    width: '33%',
  }),

  tabUpcomingText: (index, id) => ({
    color: index == id ? '#fff' : '#FE724C',
    textAlign: 'center',
    fontWeight: 'bold',
  }),

  presentOrder: {
    // top: 20,
    marginBottom: 30,
    borderRadius: 20,
    // height: 210,
    width: '100%',
    backgroundColor: '#f3f3f3',
    padding: 15,
  },

  part_1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: 10,
  },

  info: {
    // left: 20,
    // backgroundColor: 'yellow',
  },
  infoRight: {},

  numberItem: {
    color: '#C0C0C0',
    fontWeight: 'bold',
    fontSize: 16,
  },

  brand: {
    fontSize: 18,
    fontWeight: 'bold',

    textAlign: 'right',
  },

  code: {
    // marginTop: 10,
    // left: 170,
    fontSize: 18,
    textAlign: 'right',
    color: '#FE724C',
  },

  part_2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 3,
    marginBottom: 5,
  },

  statusLabel: {
    color: '#C0C0C0',
    fontWeight: 'bold',
  },

  statusText: {
    color: '#C0C0C0',
    fontWeight: 'bold',
    left: -12,
  },

  part_3: {
    flexDirection: 'row',
    marginTop: 3,
    marginBottom: 15,
  },

  timeNumber: {
    color: '#323643',
    fontWeight: 'bold',
    fontSize: 28,
  },

  timeUnit: {
    fontWeight: 'bold',
    color: '#323643',
    alignSelf: 'flex-end',
    top: -5,
    left: 5,
  },

  presentStatus: {
    color: '#323643',
    fontWeight: 'bold',
    left: 170,
  },

  part_4: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 3,
    left: 10,
    right: 10,
  },

  buttonActionLeft: {
    backgroundColor: '#fff',
    borderRadius: 20,
    height: 40,
    width: 100,
    justifyContent: 'center',
  },

  buttonActionLeftText: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#323643',
  },

  buttonActionRight: {
    backgroundColor: '#FE724C',
    borderRadius: 20,
    height: 40,
    width: 100,
    justifyContent: 'center',
  },

  buttonActionRightText: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },

  lastOrder: {
    marginTop: 10,
  },

  lastOrderTitle: {
    color: '#323643',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },

  pastInfo: {
    flexDirection: 'row',
  },

  time: {
    color: '#C0C0C0',
    marginRight: 10,
  },

  cost: {
    color: '#FE724C',
    left: 70,
    top: -5,
  },

  pastStatus: {
    marginTop: 10,
    color: '#00FF7F',
  },

  //modal
  modalView: {
    margin: 0,
    width: '90%',
    height: '70%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    alignSelf: 'center',
    width: 100,
  },

  buttonClose: {
    backgroundColor: '#FE724C',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    fontSize: 20,
    color: '#FE724C',
    fontFamily: 'Roboto-Regular',
    fontWeight: '700',
  },

  foods: {
    flexDirection: 'row',

    marginBottom: 20,
  },

  information: {
    alignItems: 'flex-start',
    flex: 1,
  },

  name_food: {
    color: '#323643',
    fontSize: 18,
    fontWeight: 'bold',
  },

  savour: {
    color: '#C0C0C0',
    fontSize: 16,
    fontWeight: 'normal',
  },

  cost: {
    color: '#FE724C',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
