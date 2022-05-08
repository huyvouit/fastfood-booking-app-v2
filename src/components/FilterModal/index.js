import Icons from 'assets/icons';
import TwoPointSider from 'components/TwoPointSlider';
import {SIZE_PRODUCT} from 'constants/constants';
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
import {SvgXml} from 'react-native-svg';
// import Animated, {interpolateNode} from 'react-native-reanimated';

const screenHeight = Dimensions.get('window').height;

const Section = ({containerStyle, title, children}) => {
  return (
    <View style={{marginTop: 12, ...containerStyle}}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: '600',
          fontFamily: 'Roboto-Bold',
          color: '#323643',
        }}>
        {title}
      </Text>
      {children}
    </View>
  );
};

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
    outputRange: [screenHeight, screenHeight - 400],
  });
  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View style={{flex: 1, backgroundColor: 'rgba(100, 100, 100, 0.7)'}}>
        {/* <Text>Transparent background</Text> */}

        <TouchableWithoutFeedback onPress={() => setShowFilterModal(false)}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}></View>
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
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              // backgroundColor: 'red',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                fontFamily: 'Roboto-Bold',
                color: '#323643',
              }}>
              Filter your search
            </Text>
            <TouchableOpacity
              style={{
                borderColor: '#c4c4c4',
                borderRadius: 7,
                borderWidth: 1,
                padding: 2,
              }}
              activeOpacity={0.95}
              onPress={() => setShowFilterModal(false)}>
              <SvgXml xml={Icons.IconClose} color="#FE724C" />
            </TouchableOpacity>
          </View>

          <ScrollView
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 250,
            }}>
            <Section title="Price">
              <View style={{alignItems: 'center'}}>
                <TwoPointSider
                  values={[30000, 120000]}
                  min={0}
                  max={150000}
                  postfix="VND"
                  onValuesChange={values => console.log(values)}
                />
              </View>
            </Section>

            <Section title={'Size'} containerStyle={{marginTop: 30}}>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}>
                {SIZE_PRODUCT.map((item, index) => {
                  return (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      key={index}
                      onPress={() => {}}
                      style={{
                        marginTop: 15,
                        borderRadius: 5,
                        backgroundColor: item.active ? '#FE724C' : '#c4c4c4',
                        width: 80,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: 15,
                      }}>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '700',
                          fontFamily: 'Roboto-Regular',
                          color: item.active ? 'white' : '#323643',
                        }}>
                        {item.size}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </Section>

            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 50,
              }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {}}
                style={{
                  marginTop: 15,
                  borderRadius: 5,
                  backgroundColor: '#e4e4e4',
                  width: '40%',
                  height: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 15,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '700',
                    fontFamily: 'Roboto-Regular',
                    color: '#323643',
                  }}>
                  CLEAR FILTER
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {}}
                style={{
                  marginTop: 15,
                  borderRadius: 5,
                  backgroundColor: '#FE724C',
                  width: '40%',
                  height: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '700',
                    fontFamily: 'Roboto-Regular',
                    color: 'white',
                  }}>
                  APPLY
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default FilterModal;
