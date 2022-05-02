import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

const PrimaryButton = props => {
  const {title, action, ...params} = props;
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={action}>
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
