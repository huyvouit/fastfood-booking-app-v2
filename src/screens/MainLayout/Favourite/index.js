import React, {useState, useEffect, useContext} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {SvgXml} from 'react-native-svg';

import Icons from 'assets/icons';

import HawaiianChicken from '../../../assets/images/Hawaiian_Chicken.png';

import styles from './styles';
import favoriteApi from 'api/favorite_api';
import ItemFood from 'components/ItemFood';
import {AuthContext} from 'contexts/AuthProvider';

const FavouriteScreen = ({navigation}) => {
  const [favoriteList, setfavoriteList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {favorite, fetchListFavorite} = useContext(AuthContext);
  const [isChange, setIsChange] = React.useState(true);
  const fetchFavoriteList = async () => {
    setIsLoading(true);
    try {
      const params = {
        currentPage: 1,
        productPerPage: 5,
      };

      const response = await favoriteApi.getAllsFavoriteByUser(params);
      if (response.data.success) {
        setfavoriteList(response.data.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log('Failed to fetch favorite list: ', error);
    }
  };
  const onRefresh = async () => {
    await fetchFavoriteList();
  };
  useEffect(() => {
    fetchFavoriteList();
  }, [fetchListFavorite]);

  return favoriteList?.length > 0 ? (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.textWrapper}>
          {/* <View style={styles.tab}>
            <TouchableOpacity style={styles.tab_FoodItems}>
              <Text style={styles.tab_FoodItems_Text}>Food Items</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab_Resturents}>
              <Text style={styles.tab_Resturents_Text}>Resturents</Text>
            </TouchableOpacity>
          </View> */}
          <ScrollView
            style={{height: 500}}
            refreshControl={
              <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
            }>
            {favoriteList?.map((item, index) => {
              return (
                <ItemFood
                  key={index}
                  navigation={navigation}
                  product={item?.productId}
                  // size={filter.size}
                />
              );
            })}
            {/* <TouchableOpacity style={styles.foodItems} activeOpacity={0.95}>
              <Image source={HawaiianChicken} style={styles.image} />

              <View style={styles.costView}>
                <Text style={styles.unit}>$</Text>
                <Text style={styles.cost}>12.20</Text>
              </View>

              <View style={styles.rateView}>
                <Text style={styles.numrate}>4.5 </Text>
                <View style={styles.iconStar}>
                  <SvgXml
                    xml={Icons.IconStar}
                    fill="yellow"
                    width={16}
                    height={16}
                  />
                </View>
                <Text style={styles.numplus}> (+25)</Text>
              </View>

              <View style={styles.foodInfo}>
                <Text style={styles.foodNameText}>Chicken Hawaiian</Text>
                <Text style={styles.savour}>Chicken, Cheese and pineapple</Text>
              </View>
            </TouchableOpacity> */}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  ) : (
    <View style={styles.emptyPage}>
      <SvgXml
        xml={Icons.IconFavourite}
        color="#FE724C"
        width={150}
        height={150}
        fill="#FE724C"
      />
      <Text style={styles.emptyNotification}>Your favourite list is empty</Text>
    </View>
  );
};
export default FavouriteScreen;
