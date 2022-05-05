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
    color: '#000',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
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
  },

  tabUpcoming: {
    backgroundColor: '#FE724C',
    justifyContent: 'center',
    borderRadius: 25,
    height: 40,
    width: '47%',
  },

  tabHistory: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderRadius: 25,
    height: 40,
    width: '47%',
  },

  tabUpcomingText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  tabHistoryText: {
    color: '#FE724C',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  presentOrder: {
    top: 20,
    marginBottom: 30,
    borderRadius: 20,
    height: 210,
    width: '100%',
    backgroundColor: '#F8F8F8',
  },

  part_1: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 10,
  },

  image: {
    top: 5,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: '#fff',
  },

  info: {
    left: 20,
  },

  numberItem: {
    color: '#C0C0C0',
    fontWeight: 'bold',
  },

  brand: {
    top: 5,
    fontWeight: 'bold',
    color: '#000',
  },

  code: {
    marginTop: 10,
    left: 170,
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
    color: '#000',
    fontWeight: 'bold',
    fontSize: 28,
  },

  timeUnit: {
    fontWeight: 'bold',
    color: '#000',
    alignSelf: 'flex-end',
    top: -5,
    left: 5,
  },

  presentStatus: {
    color: '#000',
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
    width: '41%',
    justifyContent: 'center',
  },

  buttonActionLeftText: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },

  buttonActionRight: {
    backgroundColor: '#FE724C',
    borderRadius: 20,
    height: 40,
    width: '41%',
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
    color: '#000',
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
});

export default styles;
