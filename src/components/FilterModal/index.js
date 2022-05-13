import Icons from 'assets/icons';
import ItemCategory from 'components/ItemCategory';
import TwoPointSider from 'components/TwoPointSlider';
import {CATEGORY, RATING, SIZE_PRODUCT} from 'constants/constants';
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
  Image,
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

const FilterModal = ({isVisible, onClose, filter, setFilter, action}) => {
  const [showFilterModal, setShowFilterModal] = React.useState(isVisible);
  const [category, setCategory] = React.useState(filter?.category || 0);
  const [lowerPrice, setLower] = React.useState(filter?.lowerPrice || 150000);
  const [higherPrice, setHigher] = React.useState(filter?.higherPrice || 0);
  const [size, setSize] = React.useState(filter?.size || 0);
  const [rating, setRating] = React.useState(filter?.rating || -1);
  useEffect(() => {
    if (filter.category) {
      setCategory(convertCategoryToNumber(filter?.category));
    }
    if (filter.size) {
      setSize(convertSizeToNumber(filter?.size));
    }
    if (filter.higherPrice) {
      console.log('run higherPrice');
      setHigher(filter.higherPrice);
    }
    if (filter.lowerPrice) {
      setLower(filter.lowerPrice);
    }
    if (filter.rating) {
      setRating(filter.rating);
    }
  }, [filter]);

  const convertCategory = category => {
    switch (category) {
      case 0:
        return 'All';

      case 1:
        return 'Burger';

      case 2:
        return 'Pizza';

      case 3:
        return 'Chicken';

      case 4:
        return 'Combo';

      case 5:
        return 'Drink';

      default:
        return 'All';
    }
  };
  const convertCategoryToNumber = (category = 'All') => {
    switch (category) {
      case 'All':
        return 0;

      case 'Burger':
        return 1;

      case 'Pizza':
        return 2;

      case 'Chicken':
        return 3;

      case 'Combo':
        return 4;

      case 'Drink':
        return 5;

      default:
        return 0;
    }
  };

  const convertSize = size => {
    switch (size) {
      case 0:
        return 'All';

      case 1:
        return 'M';

      case 2:
        return 'L';

      default:
        return 'All';
    }
  };
  const convertSizeToNumber = (size = 0) => {
    switch (size) {
      case 'All':
        return 0;

      case 'M':
        return 1;

      case 'L':
        return 2;

      default:
        return 'All';
    }
  };
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
    outputRange: [screenHeight, screenHeight - 630],
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
                borderColor: '#e4e4e4',
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
            contentContainerStyle={
              {
                // paddingBottom: 250,
              }
            }>
            <Section title="Category">
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  marginTop: 12,
                }}>
                {CATEGORY.map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={{marginRight: 10, marginBottom: 5}}>
                      <ItemCategory
                        isActived={category}
                        type={item}
                        action={() => setCategory(index)}
                      />
                    </View>
                  );
                })}
              </View>
            </Section>
            <Section title="Price">
              <View style={{alignItems: 'center'}}>
                <TwoPointSider
                  values={[higherPrice, lowerPrice]}
                  min={0}
                  max={150000}
                  postfix="VND"
                  onValuesChange={values => {
                    console.log(values);
                    setHigher(values[0]);
                    setLower(values[1]);
                  }}
                />
              </View>
            </Section>

            <Section title={'Size'} containerStyle={{marginTop: 15}}>
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
                      onPress={() => {
                        setSize(index);
                      }}
                      style={{
                        marginTop: 15,
                        borderRadius: 5,
                        backgroundColor:
                          item.id == size ? '#FE724C' : '#e4e4e4',
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
                          color: item.id == size ? 'white' : '#323643',
                        }}>
                        {item.size}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </Section>
            <Section title={'Rating'} containerStyle={{marginTop: 20}}>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}>
                {RATING.map((item, index) => {
                  return (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      key={index}
                      onPress={() => {
                        setRating(index + 1);
                      }}
                      style={{
                        marginTop: 15,
                        borderRadius: 5,
                        backgroundColor:
                          item.id == rating ? '#FE724C' : '#e4e4e4',
                        width: 55,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: 15,
                        flexDirection: 'row',
                      }}>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '700',
                          fontFamily: 'Roboto-Regular',
                          color: item?.active ? 'white' : '#323643',
                          paddingRight: 5,
                        }}>
                        {item.star}
                      </Text>
                      <SvgXml
                        xml={Icons.IconStar}
                        fill="yellow"
                        width={20}
                        height={20}
                      />
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
                onPress={() => {
                  setFilter({
                    category: convertCategory(0),
                    higherPrice: 0,
                    lowerPrice: 150000,
                    size: convertSize(0),
                    rating: -1,
                  });
                }}
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
                onPress={() => {
                  setFilter({
                    category: convertCategory(category),
                    higherPrice,
                    lowerPrice,
                    size: convertSize(size),
                    rating,
                  });
                  setShowFilterModal(false);
                  // action('0');
                }}
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
