import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';

const styles = StyleSheet.create({
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
    alignItems: 'center',
    borderRadius: 15,
    width: 110,
    height: 28,
    top: -160,
    right: -20,
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 30,
  },

  unit: {
    color: '#FE724C',
    fontWeight: 'bold',
    // alignSelf: 'flex-end',
    marginLeft: 5,
  },

  cost: {
    fontWeight: 'bold',
    color: '#FE724C',
    fontSize: 18,
  },

  rateView: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 15,
    width: 50,
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
    // right: 20,
    // left: 20,
    top: -30,
    paddingHorizontal: 15,
    // backgroundColor: 'red',
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
});

export default styles;
