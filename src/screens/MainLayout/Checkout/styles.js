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
    alignSelf: 'center',
    flex: 1,
  },

  name_food: {
    color: '#323643',
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

  modify: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
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
});

export default styles;
