import React from 'react';
import {View, Text} from 'react-native';
import Icons from '../../assets/icons';

import styles from './styles';

const HeaderTitle = props => {
  const {title, containerStyle, leftComponent} = props;
  return (
    <View style={{flexDirection: 'row', ...containerStyle}}>
      {leftComponent}
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default HeaderTitle;
