import {StyleSheet} from 'react-native';

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

  textWrapper: {
    paddingTop: 20,
    paddingBottom: 0,
    // backgroundColor: 'red',
  },

  title: {
    flexDirection: 'row',
    paddingTop: 30,
  },

  foods: {
    flexDirection: 'row',
    // justifyContent: "center",
    // backgroundColor: 'red',
    marginBottom: 20,
  },

  information: {
    alignSelf: 'center',
    flex: 1,
  },

  name_food: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },

  savour: {
    color: '#C0C0C0',
    fontSize: 20,
    fontWeight: 'normal',
  },

  cost: {
    color: '#FE724C',
    fontSize: 20,
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
    color: '#000',
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
    marginTop: 30,
    // backgroundColor: 'green',
  },
  cost_info: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#c4c4c4',
    // top: -50,
  },

  kind_of_fee: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },

  money: {
    flexDirection: 'row',
    paddingRight: 10,
  },

  cost_of_fee: {
    color: '#000',
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
    paddingTop: 50,
  },
  buttonCheck: {
    backgroundColor: '#FE724C',
    justifyContent: 'center',
    width: 180,
    height: 50,
    borderRadius: 25,
  },
});

export default styles;
1;
