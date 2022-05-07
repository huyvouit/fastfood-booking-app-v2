import React, {useEffect} from 'react';
import {
  View,
  Text,
  Animated,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
  Dimensions,
} from 'react-native';
// import Animated, {interpolateNode} from 'react-native-reanimated';

const screenHeight = Dimensions.get('window').height;
const FilterModal = ({isVisible, onClose}) => {
  const [showFilterModal, setShowFilterModal] = React.useState(isVisible);

  const modalAnimationValue = React.useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (showFilterModal) {
      Animated.timing(modalAnimationValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modalAnimationValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start(() => onClose());
    }
  }, [showFilterModal]);
  const modalY = modalAnimationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [screenHeight, screenHeight - 680],
  });
  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View style={{flex: 1, backgroundColor: 'rgba(100, 100, 100, 0.7)'}}>
        <Text>Transparent background</Text>

        <TouchableWithoutFeedback onPress={() => setShowFilterModal(false)}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}>
            <Text>ssssss</Text>
          </View>
        </TouchableWithoutFeedback>
        <Animated.View
          style={{
            position: 'absolute',
            left: 0,
            top: modalY,
            width: '100%',
            height: '100%',
            padding: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: 'white',
          }}></Animated.View>
      </View>
    </Modal>
  );
};

export default FilterModal;
