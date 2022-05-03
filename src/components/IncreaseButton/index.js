import React from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';
import {SvgXml} from 'react-native-svg';
import Icons from '../../assets/icons';

import styles from './styles';

const IncreaseButton = props => {
  const {action} = props;
  return (
    <TouchableOpacity style={styles.container} onPress={action}>
      <SvgXml xml={Icons.IconPlus} color="white" />
    </TouchableOpacity>
  );
};

export default IncreaseButton;
