import Icons from 'assets/icons';
import ItemCategory from 'components/ItemCategory';
import React, {useEffect} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';

import styles from './styles';

const HomeScreen = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.textIntro}>What would you like to order</Text>
      <View style={styles.fieldInputSearch}>
        <TextInput
          style={styles.inputSearch}
          placeholder="Search for food ..."></TextInput>
        <TouchableOpacity style={styles.iconSearch}>
          <SvgXml xml={Icons.IconSearch} color="#767F9D" />
        </TouchableOpacity>
      </View>
      <View>
        <ItemCategory />
      </View>
    </View>
  );
};

export default HomeScreen;
