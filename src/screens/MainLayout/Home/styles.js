import React, {useRef} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from 'constants/theme';
const styles = StyleSheet.create({
  root: {
    flex: 1,
    // height: Dimensions.get('screen').height,
    // paddingHorizontal: 20,
    // height
    // backgroundColor: 'red',
    // marginBottom: 200,
    marginBottom: 200,
  },
  scrollview: {
    flexGrow: 1,
    height: '100%',
  },
  textIntro: {
    fontSize: 30,
    fontFamily: 'Roboto-Bold',
    fontWeight: '700',
    color: COLORS.black50,
    // lineHeight: 20,
    paddingTop: 20,
    width: '80%',
    paddingHorizontal: 20,
  },

  //search
  fieldInputSearch: {
    position: 'relative',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  inputSearch: {
    borderColor: '#9AA0B4',
    borderWidth: 1,
    borderRadius: 10,
    width: '100%',
    height: 50,
    paddingVertical: 10,
    paddingLeft: 40,
    paddingRight: 20,
    backgroundColor: '#FCFCFD',
  },

  iconSearch: {
    position: 'absolute',
    bottom: 13,
    left: 30,
  },
  slider: {
    borderRadius: 20,
    // padding: 20,
    margin: 20,
  },
  swiper: {
    height: 220,
    position: 'relative',
    borderRadius: 20,
    // padding: 20,
    // margin: 20,
    // top: -160,
  },
  imageSlider: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
  },
  listCate: {
    // marginVertical: 30,
    // width: '100%',
  },
  bestSeller: {
    paddingTop: 20,
  },
  popularFood: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  textMenu: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    fontWeight: '600',
    color: COLORS.black50,
  },
  listProduct: {
    justifyContent: 'flex-start',
    // alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  HappyDeals: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  note: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    paddingBottom: 10,
  },
  mainItem: {
    flexDirection: 'row',
    backgroundColor: '#FB6A70',
    borderRadius: 25,
    height: 200,
    width: '100%',
  },
  text: {
    paddingTop: 20,
    paddingHorizontal: 15,
    height: 100,
    width: '50%',
  },
  text_2: {
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  textTitle: {
    color: '#fff',
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
  },
  textNote: {
    color: '#fff',
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    fontStyle: 'italic',
  },
  textContent: {
    color: '#fff',
    fontFamily: 'Roboto-Regular',

  },
  image: {
    width: '40%',
    height: 100,
  },
  mainImage: {
    width: 180,
    height: 180,
    resizeMode: 'cover',
    position: 'relative',
    marginTop: 20,
    left: -30,
    top: -15,
  },
  ortherItem: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    height: 200,
    width: '100%',
  },
  ortherItem_1: {
    backgroundColor: '#DC143C',
    height: 160,
    width: '47%',
    borderRadius: 25,
    marginRight: 10,
    overflow: 'hidden',
  },
  ortherItem_2: {
    backgroundColor: '#FF00FF',
    height: 160,
    width: '47%',
    borderRadius: 25,
    marginLeft: 10,
    overflow: 'hidden',
  },
  otherImage: {
    width: 100,
    height: 100,
    position: 'absolute',
    alignSelf: 'flex-end',
    top: 100,
  },
  voucher: {
    paddingHorizontal: 20,
  },


  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    padding: 10,
    height: 150,
  },
  imageVoucher: {
    justifyContent: 'flex-start',
    borderRadius: 40,
    width: 50,
    height: 50,
  },
  itemName: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Roboto-Bold',
    fontWeight: '700',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});

export default styles;
