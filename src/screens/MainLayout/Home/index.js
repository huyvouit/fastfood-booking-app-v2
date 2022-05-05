import Icons from 'assets/icons';
import ItemCategory from 'components/ItemCategory';
import {CATEGORY} from 'constants/constants';
import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import {SvgXml} from 'react-native-svg';

import styles from './styles';

const widthScreen = Dimensions.get('screen').width;
const HomeScreen = ({navigation}) => {
  const [listCate, setListCate] = React.useState(CATEGORY);
  return (
    <View style={styles.root}>
      <Text style={styles.textIntro}>What would you like to order</Text>
      <View style={styles.fieldInputSearch}>
        <TextInput
          // onAccessibilityTap={() => navigation.navigate('Search')}
          style={styles.inputSearch}
          // editable={false}
          onTouchStart={() => navigation.navigate('Search')}
          pointerEvents="none"
          placeholder="Search for food ..."></TextInput>
        <TouchableOpacity style={styles.iconSearch}>
          <SvgXml xml={Icons.IconSearch} color="#767F9D" />
        </TouchableOpacity>
      </View>
      {/* <View style={styles.listCate}>
        <FlatList
          style={{
            width: widthScreen + 5,
            height: '100%',
            backgroundColor: 'red',
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={listCate}
          pagingEnabled={true}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={{marginBottom: 8}}>
              <ItemCategory image={item.image} category={item.category} />
            </View>
          )}
        />
       
      </View> */}
    </View>
  );
};

export default HomeScreen;
