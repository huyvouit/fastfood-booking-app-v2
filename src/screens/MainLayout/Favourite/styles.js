import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    // paddingTop: StatusBar.height,
    paddingHorizontal: 10,
  },

  content: {
    paddingHorizontal: 20,
  },

  textWrapper: {
    paddingTop: 20,
    paddingBottom: 0,
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
    fontSize: 30,
  },

  tab: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    height: 50,
    borderRadius: 25,
    borderColor: '#C0C0C0',
  },

  tab_FoodItems: {
    backgroundColor: '#FE724C',
    justifyContent: 'center',
    borderRadius: 25,
    height: 40,
    width: '47%',
  },

  tab_Resturents: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderRadius: 25,
    height: 40,
    width: '47%',
  },

  tab_FoodItems_Text: {
    color: '#fff',
    textAlign: 'center',
  },

  tab_Resturents_Text: {
    color: '#FE724C',
    textAlign: 'center',
  },

  foodItems: {
    top: 20,
    height: 270,
    borderRadius: 15,
    backgroundColor: '#F8F8F8',
    marginBottom: 20,
  },

  image: {
    height: 180,
    width: '100%',
    borderRadius: 15,
  },

  costView: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 15,
    width: 80,
    height: 28,
    top: -160,
    right: -20,
  },

  unit: {
    color: '#FE724C',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },

  cost: {
    fontWeight: 'bold',
    color: '#323643',
    fontSize: 22,
  },

  rateView: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 15,
    width: 76,
    height: 26,
    top: -40,
    right: -20,
  },

  numrate: {
    color: '#323643',
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  iconStar: {
    top: 5,
  },

  numplus: {
    fontWeight: 'bold',
    fontSize: 10,
    color: '#C0C0C0',
    alignSelf: 'center',
  },

  foodInfo: {
    right: -20,
    top: -30,
  },

  foodNameText: {
    color: '#323643',
    fontWeight: 'bold',
    fontSize: 20,
  },

  savour: {
    color: '#A9A9A9',
    fontWeight: '400',
    fontSize: 16,
  },

  emptyPage: {
    top: -60,
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
  },

  emptyNotification: {
    color: '#767F9D',
    textAlign: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'Roboto-Regular',
  },
});

export default styles;
