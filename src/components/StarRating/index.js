import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {SvgFromXml} from 'react-native-svg';

import Icons from 'assets/icons';

const StarRating = ({isEditable, rating, setRating}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <Text key={index}>
            {/* <RadioButton
              color="red"
              value={ratingValue}
              onClick={isEditable ? () => setRating(ratingValue) : () => {}}
            /> */}
            <SvgFromXml
              // width={80}
              // height={80}
              color="red"
              xml={Icons.IconStar}
              fill={ratingValue <= rating ? 'yellow' : '#f4f4f4'}
              // style={{cursor: isEditable && 'pointer'}}
            />
          </Text>
        );
      })}
    </View>
  );
};
export default StarRating;
