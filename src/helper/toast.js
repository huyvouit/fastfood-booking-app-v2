import {ToastAndroid} from 'react-native';
export const showToastWithGravityAndOffset = content => {
  ToastAndroid.showWithGravityAndOffset(
    content,
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50,
  );
};
