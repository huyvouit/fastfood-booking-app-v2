import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/theme';

const styles = StyleSheet.create({
  content: {
    // flex: 1,
    padding: 20,
    position: 'relative',
  },
  swiper: {
    height: 300,
    position: 'relative',
    // top: -160,
  },
  iconHeart: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  nameProduct: {
    fontFamily: 'Roboto-Bold',
    fontSize: 28,
    fontWeight: '700',
  },
  subInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantity: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  price: {
    fontSize: 25,
    fontFamily: 'Roboto-Regular',
    fontWeight: '600',
    // paddingHorizontal: 5,
    color: '#FE724C',
  },
  quantityItem: {
    fontSize: 20,
    fontFamily: 'Roboto-Regular',
    fontWeight: '600',
    paddingHorizontal: 10,
  },
  description: {
    marginVertical: 25,
  },
  descText: {
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    color: COLORS.lightGray,
    lineHeight: 25,
  },
  titleItem: {
    fontSize: 22,
    fontFamily: 'Roboto-Regular',
    fontWeight: '600',
    marginBottom: 25,
  },
  name: {
    fontSize: 20,
    fontFamily: 'Roboto-Regular',
    fontWeight: '600',
    // paddingHorizontal: 10,
    marginTop: 10,
  },
  priceProduct: {
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    marginTop: 8,
  },
  infoUser: {
    flexDirection: 'row',
  },
  rating: {
    width: 20,
    height: 20,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.yellow100,
    position: 'absolute',
    bottom: 5,
    right: 0,
  },
  textRating: {
    fontSize: 10,
    fontWeight: '500',
    fontFamily: 'Roboto-Regular',
    color: 'white',
  },
  nameUser: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Roboto-Regular',
    color: '#323643',
  },
  createDate: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Roboto-Regular',
    color: COLORS.lightGray,
    // paddingTop: 10,
  },
  contentReview: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Roboto-Regular',
    color: COLORS.lightGray,
    lineHeight: 20,
  },
  btnAdd: {
    backgroundColor: '#FE724C',
    height: 53,
    width: 160,
    // justifyContent:"center",
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 30,
    padding: 6,
  },
  iconBag: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {
    color: 'white',
    fontSize: 15,
    fontWeight: '700',
    fontFamily: 'Roboto-Bold',
    paddingLeft: 10,
    textTransform: 'uppercase',
  },
});
export default styles;
