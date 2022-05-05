import Icons from 'assets/icons';
import HeaderPage from 'components/Header';
import {LIST_PRODUCT} from 'constants/constants';
import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SvgXml} from 'react-native-svg';

import styles from './styles';

const CardProduct = ({item, navigation}) => {
  if (item.empty === true) {
    return (
      <View
        style={[
          styles.item,
          styles.itemInvisible,
          {height: Dimensions.get('window').width / numColumns},
        ]}
      />
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('DetailScreen')}
      style={{
        // height: Dimensions.get('window').width / 1.5,
        ...styles.item,
      }}>
      <Image
        source={item.mainImage}
        style={{
          width: '100%',
          height: 140,
          resizeMode: 'cover',
          borderRadius: 10,
          // backgroundColor: 'red',
        }}
      />
      <View style={styles.info}>
        <Text numberOfLines={1} style={styles.nameProduct}>
          {item.name}
        </Text>

        <Text numberOfLines={2} style={styles.descProduct}>
          {item.desc}
        </Text>
        <Text style={styles.priceProduct}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

// const formatData = (data, numColumns) => {
//   const numberOfFullRows = Math.floor(data.length / numColumns);
//   console.log(numberOfFullRows);
//   let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
//   while (
//     numberOfElementsLastRow !== numColumns &&
//     numberOfElementsLastRow !== 0
//   ) {
//     data.push({empty: true});
//     numberOfElementsLastRow++;
//   }

//   return data;
// };
// const numColumns = 2;

const SearchScreen = ({navigation}) => {
  const [keyword, setKeyword] = React.useState('');
  const [isSubmited, setIsSubmited] = React.useState(false);
  return (
    <View style={styles.root}>
      <ScrollView>
        <HeaderPage returnPage={() => navigation.goBack()} title="Search" />
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

        {isSubmited && keyword != '' && (
          <>
            <Text style={styles.searching}>
              <Text>Searching for </Text>
              <Text style={styles.keyword}>" {keyword} "</Text>
            </Text>

            <SafeAreaView style={styles.listProduct}>
              {LIST_PRODUCT.map((item, index) => {
                return (
                  <CardProduct
                    key={index}
                    item={item}
                    navigation={navigation}
                  />
                );
              })}
            </SafeAreaView>
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
