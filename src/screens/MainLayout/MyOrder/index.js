import BackButton from 'components/BackButton';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import StarBuck from '../../../assets/images/starbuck.png';
import styles from './styles';
import HeaderPage from 'components/Header';

const MyOrderScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.title}>
        <TouchableOpacity style={{position: 'absolute', top: 0, left: -10}}>
          <HeaderPage returnPage={() => navigation.openDrawer()} />
        </TouchableOpacity>
        <Text style={styles.titleText}>My Orders</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.textWrapper}>
          {/* <View style={styles.tab}>
            <TouchableOpacity style={styles.tabUpcoming}>
              <Text style={styles.tabUpcomingText}>Upcoming</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabHistory}>
              <Text style={styles.tabHistoryText}>History</Text>
            </TouchableOpacity>
          </View> */}

          <View style={styles.presentOrder}>
            <View style={styles.part_1}>
              <View style={{flexDirection: 'row'}}>
                <Image source={StarBuck} style={styles.image} />
                <View style={styles.info}>
                  <Text style={styles.numberItem}>3 items</Text>
                  <Text style={styles.brand}>Starbuck</Text>
                </View>
              </View>
              <Text style={styles.code}>#264100</Text>
            </View>
            {/* 
            <View style={styles.part_2}>
              <Text style={styles.statusLabel}>Estimated Arrival</Text>
              <Text style={styles.statusText}>Now</Text>
            </View> */}

            {/* <View style={styles.part_3}>
              <Text style={styles.timeNumber}>25</Text>
              <Text style={styles.timeUnit}>min</Text>
              <Text style={styles.presentStatus}>Food on the way</Text>
            </View> */}

            <View style={styles.part_4}>
              {/* <TouchableOpacity style={styles.buttonActionLeft}>
                <Text style={styles.buttonActionLeftText}>Cancel</Text>
              </TouchableOpacity> */}
              <TouchableOpacity style={styles.buttonActionRight}>
                <Text style={styles.buttonActionRightText}>Detail</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.presentOrder}>
            <View style={styles.part_1}>
              <View style={{flexDirection: 'row'}}>
                <Image source={StarBuck} style={styles.image} />
                <View style={styles.info}>
                  <Text style={styles.numberItem}>3 items</Text>
                  <Text style={styles.brand}>Starbuck</Text>
                </View>
              </View>
              <Text style={styles.code}>#264100</Text>
            </View>
            {/* 
            <View style={styles.part_2}>
              <Text style={styles.statusLabel}>Estimated Arrival</Text>
              <Text style={styles.statusText}>Now</Text>
            </View> */}

            {/* <View style={styles.part_3}>
              <Text style={styles.timeNumber}>25</Text>
              <Text style={styles.timeUnit}>min</Text>
              <Text style={styles.presentStatus}>Food on the way</Text>
            </View> */}

            <View style={styles.part_4}>
              {/* <TouchableOpacity style={styles.buttonActionLeft}>
                <Text style={styles.buttonActionLeftText}>Cancel</Text>
              </TouchableOpacity> */}
              <TouchableOpacity style={styles.buttonActionRight}>
                <Text style={styles.buttonActionRightText}>Detail</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.presentOrder}>
            <View style={styles.part_1}>
              <View style={{flexDirection: 'row'}}>
                <Image source={StarBuck} style={styles.image} />
                <View style={styles.info}>
                  <Text style={styles.numberItem}>3 items</Text>
                  <Text style={styles.brand}>Starbuck</Text>
                </View>
              </View>
              <Text style={styles.code}>#264100</Text>
            </View>
            {/* 
            <View style={styles.part_2}>
              <Text style={styles.statusLabel}>Estimated Arrival</Text>
              <Text style={styles.statusText}>Now</Text>
            </View> */}

            {/* <View style={styles.part_3}>
              <Text style={styles.timeNumber}>25</Text>
              <Text style={styles.timeUnit}>min</Text>
              <Text style={styles.presentStatus}>Food on the way</Text>
            </View> */}

            <View style={styles.part_4}>
              {/* <TouchableOpacity style={styles.buttonActionLeft}>
                <Text style={styles.buttonActionLeftText}>Cancel</Text>
              </TouchableOpacity> */}
              <TouchableOpacity style={styles.buttonActionRight}>
                <Text style={styles.buttonActionRightText}>Detail</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* <View style={styles.lastOrder}>
            <Text style={styles.lastOrderTitle}>Lasted Orders</Text>
            <View style={styles.part_1}>
              <Image source={StarBuck} style={styles.image} />
              <View style={styles.info}>
                <View style={styles.pastInfo}>
                  <Text style={styles.time}>20 June, 10:30</Text>
                  <Text style={styles.numberItem}>3 items</Text>
                  <Text style={styles.cost}>$17.10</Text>
                </View>
                <Text style={styles.brand}>Jimmy John's</Text>
                <Text style={styles.pastStatus}>Order Deliveried</Text>
              </View>
            </View>

            <View style={styles.part_4}>
              <TouchableOpacity style={styles.buttonActionLeft}>
                <Text style={styles.buttonActionLeftText}>Rate</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonActionRight}>
                <Text style={styles.buttonActionRightText}>Re-Order</Text>
              </TouchableOpacity>
            </View>
          </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyOrderScreen;
