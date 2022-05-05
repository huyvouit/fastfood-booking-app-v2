import Icons from 'assets/icons';
import HeaderPage from 'components/Header';
import React, {useEffect} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';

import styles from './styles';

const SearchScreen = ({navigation}) => {
  const [keyword, setKeyword] = React.useState('');
  const [isSubmited, setIsSubmited] = React.useState(false);
  return (
    <View style={styles.root}>
      <View style={{position: 'absolute', top: 0}}>
        <HeaderPage returnPage={() => navigation.goBack()}>
          <View style={styles.fieldInputSearch}>
            <TextInput
              autoFocus
              value={keyword}
              onChangeText={text => {
                setKeyword(text);
                setIsSubmited(false);
              }}
              style={styles.inputSearch}
              placeholder="Search for food ..."
              onSubmitEditing={() => setIsSubmited(true)}
            />
            <TouchableOpacity style={styles.iconSearch}>
              <SvgXml xml={Icons.IconSearch} color="#767F9D" />
            </TouchableOpacity>
          </View>
        </HeaderPage>
        {isSubmited && (
          <Text>
            <Text>Searching for </Text>
            <Text>{keyword}</Text>
          </Text>
        )}
      </View>
    </View>
  );
};

export default SearchScreen;
