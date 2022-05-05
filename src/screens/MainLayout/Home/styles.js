import {StyleSheet} from 'react-native';
import {COLORS} from 'constants/theme';
const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 20,
  },
  textIntro: {
    fontSize: 30,
    fontFamily: 'Roboto-Bold',
    fontWeight: '700',
    color: COLORS.black50,
    // lineHeight: 20,
    paddingTop: 20,
    width: '80%',
  },

  //search
  fieldInputSearch: {
    position: 'relative',
    marginTop: 20,
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
  listCate: {
    marginVertical: 30,
    width: '100%',
  },
});

export default styles;
