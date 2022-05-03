import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {SvgXml} from 'react-native-svg';
import Icons from '../../assets/icons';

import styles from './styles';

const BackButton = props => {
  const {action, ...params} = props;
  return (
    <TouchableOpacity style={styles.container} onPress={action} {...params}>
      <SvgXml xml={Icons.IconChevronleft} />
    </TouchableOpacity>
  );
};

export default BackButton;
