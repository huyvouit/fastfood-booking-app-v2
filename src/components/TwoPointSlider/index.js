import React from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {TouchableOpacity, Image, Text, Dimensions, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import Icons from '../../assets/icons';

import styles from './styles';
const screenWidth = Dimensions.get('window').width;
const TwoPointSider = props => {
  const {values, min, max, prefix, postfix, onValuesChange} = props;
  return (
    <MultiSlider
      values={values}
      sliderLength={screenWidth - 68}
      min={min}
      max={max}
      step={1000}
      markerOffsetY={15}
      //   markerOffsetX={5}
      selectedStyle={{
        backgroundColor: '#FE724C',
      }}
      trackStyle={{
        height: 10,
        borderRadius: 10,
        backgroundColor: '#c4c4c4',
      }}
      minMarkerOverlapDistance={50}
      customMarker={elevation => {
        return (
          <View
            style={{
              height: 60,
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 15,
                borderWidth: 4,
                borderColor: 'white',
                backgroundColor: '#FE724C',
                ...styles.shadow,
              }}></View>
            <Text
              style={{
                marginTop: 0,
                color: '#323643',
                fontSize: 14,
                fontFamily: 'Roboto-Regular',
                fontWeight: '400',
              }}>
              {prefix}
              {elevation.currentValue}
            </Text>
          </View>
        );
      }}
      onValuesChange={values => onValuesChange(values)}
    />
  );
};

export default TwoPointSider;
