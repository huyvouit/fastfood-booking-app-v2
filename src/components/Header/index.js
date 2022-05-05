import React from 'react';
import {View, Text} from 'react-native';
import BackButton from '../BackButton';
import styles from './styles';
const HeaderPage = ({returnPage, title, children}) => {
  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <BackButton action={returnPage} />
      </View>
      {title && <Text style={styles.titlePage}>{title}</Text>}
      {children}
    </View>
  );
};

export default HeaderPage;
