import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../constants/theme';

const styles = StyleSheet.create({
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
