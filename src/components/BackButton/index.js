import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import Icons from '../../assets/icons';

import styles from './styles';

const BackButton = props => {
  const {action, ...params} = props;
  return (
    <TouchableOpacity style={styles.container} onPress={action} {...params}>
      <Icons.ChevronLeft />
    </TouchableOpacity>
  );
};

export default BackButton;
