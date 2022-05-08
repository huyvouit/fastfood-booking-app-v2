import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  scroll: {
    height: Dimensions.get('screen').height,
  },
  root: {
    flex: 1,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  fieldInputSearch: {
    position: 'relative',
    // marginTop: 20,
    marginHorizontal: 20,
    flex: 1,
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
    left: 10,
  },
  listProduct: {
    justifyContent: 'flex-start',
    // alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
  },
  searching: {
    paddingTop: 15,
    paddingBottom: 5,
    fontSize: 20,
    fontWeight: '800',
    fontFamily: 'Roboto-Bold',
    lineHeight: 20,
    paddingHorizontal: 20,
    // color: '#323643',
  },
  keyword: {fontStyle: 'italic'},
  container: {
    paddingHorizontal: 20,
  },
  item: {
    backgroundColor: '#e4e4e4',
    width: Dimensions.get('screen').width / 2 - 40,
    borderRadius: 10,
    justifyContent: 'center',

    margin: 10,
    padding: 15,
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
  },
  info: {
    justifyContent: 'flex-start',
  },
  nameProduct: {
    paddingTop: 10,
    fontSize: 18,
    fontWeight: '800',
    fontFamily: 'Roboto-Bold',
    lineHeight: 20,
    color: '#323643',
  },
  descProduct: {
    paddingTop: 5,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Roboto-Regular',
    lineHeight: 20,
  },
  priceProduct: {
    paddingTop: 5,
    fontSize: 16,
    fontWeight: '800',
    fontFamily: 'Roboto-Regular',
    lineHeight: 20,
    color: '#323643',
  },
});

export default styles;
