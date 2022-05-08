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
  },
  listProduct: {
    justifyContent: 'flex-start',
    // alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
  },
});

export default styles;
