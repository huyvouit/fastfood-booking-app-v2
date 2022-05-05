import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  fieldInputSearch: {
    position: 'relative',
    marginTop: 20,
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
});

export default styles;
