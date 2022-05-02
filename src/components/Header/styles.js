import {StyleSheet} from 'react-native';
// import { COLORS } from "..";

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
  },
  titlePage: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 600,
    color: 'black',
    position: 'absolute',
    left: '50%',
    transform: [{translateX: '-50%'}],
  },
});
export default styles;
