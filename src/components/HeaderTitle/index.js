import React from 'react';
import {View, Text, Image} from 'react-native';
import Icons from '../../assets/icons';

import styles from './styles';

const HOME = 'HOME';
const HeaderTitle = props => {
  const {title, containerStyle, leftComponent} = props;
  return (
    <View style={{flexDirection: 'row', ...containerStyle}}>
      {leftComponent}
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={{
            position: 'relative',
            top: 26,
            left: -10,
            width: 200,
            height: 150,
            resizeMode: 'contain',
          }}
        />
        {/* ) : (
          <Text style={styles.title}>{title}</Text>
        )} */}
      </View>
    </View>
  );
};

export default HeaderTitle;
