import React from 'react';
import {View, Text} from 'react-native';
import BackButton from '../BackButton';
import styles from './styles';
const HeaderPage = ({returnPage, title}) => {
  return (
    <View style={styles.container}>
      <BackButton action={returnPage} />
      {title && <Text style={styles.titlePage}>{title}</Text>}
    </View>
  );
};

export default HeaderPage;
