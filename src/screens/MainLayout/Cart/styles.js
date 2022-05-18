import {StyleSheet} from 'react-native';
import {COLORS} from 'constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },

  content: {
    // paddingHorizontal: 20,
    // backgroundColor: 'yellow',
  },

  textWrapper: quantity => ({
    paddingTop: 20,
    // paddingBottom: 0,
    // backgroundColor: 'red',
    height: quantity >= 3 ? 300 : 'auto',
  }),

  title: {
    flexDirection: 'row',
    paddingTop: 30,
  },

  foods: {
    flexDirection: 'row',
    height: 100,
    // justifyContent: "center",
    // backgroundColor: 'red',
    marginBottom: 5,
  },

  information: {
    alignItems: 'flex-start',
    flex: 1,
    paddingRight: 10,
  },

  name_food: {
    color: '#323643',
    fontSize: 20,
    fontWeight: 'bold',
  },

  savour: {
    color: '#C0C0C0',
    fontSize: 18,
    fontWeight: 'normal',
  },

  cost: {
    color: '#FE724C',
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantity: {
    color: '#323643',
    fontSize: 16,
    fontWeight: 'bold',
  },

  close: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute',
    top: 0,
    right: 0,
  },

  closeButton: {
    // paddingRight: 10,
  },

  modify: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },

  buttonIncrease: {
    backgroundColor: '#fff',
    paddingEnd: 10,
  },

  quantity: {
    color: '#323643',
    fontWeight: 'bold',
    paddingHorizontal: 13,
  },

  buttonDecrease: {
    backgroundColor: '#fff',
    paddingEnd: 16,
  },

  promoCode: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 30,
    // position: 'relative',
    // top: -40,
  },

  inputCode: {
    borderRadius: 25,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    height: 50,
    width: '100%',
  },

  buttonApply: {
    backgroundColor: '#FE724C',
    justifyContent: 'center',
    width: 80,
    height: 40,
    borderRadius: 25,
    position: 'absolute',
    right: 35,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  fees: {
    marginTop: 20,
    // backgroundColor: 'green',
  },
  cost_info: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    paddingTop: 7,
    paddingBottom: 7,
    borderBottomWidth: 1,
    borderColor: '#c4c4c4',
    // top: -50,
  },

  kind_of_fee: {
    color: '#323643',
    fontSize: 20,
    fontWeight: 'bold',
  },

  money: {
    flexDirection: 'row',
    paddingRight: 10,
  },

  cost_of_fee: {
    color: '#323643',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 120,
    paddingRight: 10,
  },

  unit: {
    color: '#C0C0C0',
    fontSize: 18,
  },

  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
  buttonCheck: {
    backgroundColor: '#FE724C',
    justifyContent: 'center',
    width: 180,
    height: 50,
    borderRadius: 25,
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
1;
