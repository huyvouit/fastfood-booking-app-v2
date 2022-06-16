import {COLORS} from 'constants';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 15,
  },
  textHeader: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Roboto-Bold',
    lineHeight: 20,
    color: COLORS.black50,
  },
  textAction: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Roboto-Bold',
    lineHeight: 20,
    color: '#FE724C',
  },
  info: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#C0C0C0',
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  textInfo: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Roboto-Regular',
    color: COLORS.black50,
  },
  shippingInfo: {
    // backgroundColor: '#e5e5e5',
    paddingHorizontal: 20,
  },
  section: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  products: {
    padding: 10,
    height: 150,
    marginTop: 20,
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 10,
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
    paddingRight: 30,
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

  modify: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },

  // voucher
  promoCode: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    // paddingHorizontal: 20,
    // position: 'relative',
    // top: -40,
    marginTop: 20,
  },

  inputCode: {
    borderRadius: 25,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    height: 50,
    width: '100%',
    paddingHorizontal: 15,
  },
  close: {position: 'absolute', right: 100, zIndex: 10},

  buttonApply: {
    backgroundColor: '#FE724C',
    justifyContent: 'center',
    width: 80,
    height: 40,
    borderRadius: 25,
    position: 'absolute',
    right: 10,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },

  //modal voucher
  items_voucher: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#aaaaaa',
    width: '100%',
    borderRadius: 10,
    marginBottom: 10,
  },
  img_vouchers: {
    backgroundColor: '#FE724C',
    width: 100,
    height: 80,
    borderRadius: 10,
    marginHorizontal: 8,
    marginVertical: 8,
  },
  text_vouchers: {
    margin: 10,
  },
  text_vouchers_id: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '600',
    fontFamily: 'Roboto-Bold',
  },
  text_vouchers_per: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
  },
  text_vouchers_date: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
  },
  //shipping
  fees: {
    marginTop: 20,
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 10,
  },
  cost_info: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    paddingTop: 7,
    paddingBottom: 7,

    // top: -50,
  },
  lineDiliver: {
    borderBottomWidth: 1,
    borderColor: '#c4c4c4',
  },
  kind_of_fee: {
    color: '#323643',
    fontSize: 20,
    fontWeight: 'bold',
  },

  money: {
    flexDirection: 'row',
    // paddingRight: 10,
  },

  cost_of_fee: {
    color: '#323643',
    fontSize: 20,
    fontWeight: 'bold',
    // paddingLeft: 120,s
    paddingRight: 10,
  },

  unit: {
    color: '#C0C0C0',
    fontSize: 18,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  textBtn: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  selectPayment: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  cash: {
    borderRadius: 15,
    backgroundColor: '#FE724C',
    height: 60,
    width: 80,
    top: 5,
    justifyContent: 'center',
    marginRight: 10,
  },
  cashImage: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
  cashText: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Roboto-Regular',
    fontWeight: '700',
  },
  zalopay: {
    borderRadius: 15,
    backgroundColor: '#f5f5f5',
    height: 60,
    width: 80,
    justifyContent: 'center',
    top: 5,
    marginRight: 10,
  },
  zalopayImage: {
    width: 80,
    height: '100%',
    alignSelf: 'center',
    borderRadius: 15,
  },
  zalopayText: {
    textAlign: 'center',
    color: '#FE724C',
    fontFamily: 'Roboto-Regular',
    fontWeight: '700',
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
});

export default styles;
