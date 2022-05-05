import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SvgXml} from 'react-native-svg';

import Icons from 'assets/icons';

import Pizza from '../../../assets/images/Pizza.png';
import HawaiianChicken from '../../../assets/images/Hawaiian_Chicken.png';

import styles from './styles';

const FavouriteScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar style="light" /> */}
      {/* <View style={styles.title}>
        <TouchableOpacity style={styles.back}>
          <AntDesign name="left" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.titleText}>Favorites</Text>
      </View> */}

      <View style={styles.container}>
        <View style={styles.textWrapper}>
          <View style={styles.tab}>
            <TouchableOpacity style={styles.tab_FoodItems}>
              <Text style={styles.tab_FoodItems_Text}>Food Items</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab_Resturents}>
              <Text style={styles.tab_Resturents_Text}>Resturents</Text>
            </TouchableOpacity>
          </View>
          <ScrollView>
            <TouchableOpacity style={styles.foodItems}>
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
            </TouchableOpacity>

            <TouchableOpacity style={styles.foodItems}>
              <Image source={Pizza} style={styles.image} />

              <View style={styles.costView}>
                <Text style={styles.unit}>$</Text>
                <Text style={styles.cost}>10.35</Text>
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
                <Text style={styles.foodNameText}>Red N Hot Pizza</Text>
                <Text style={styles.savour}>Chicken, Cheese and pineapple</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default FavouriteScreen;
