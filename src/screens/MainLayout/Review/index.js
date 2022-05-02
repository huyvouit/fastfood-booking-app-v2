import React from 'react';
import {View, Text, Image, TextInput, Dimensions} from 'react-native';
import HeaderPage from '../../../components/Header';
import PrimaryButton from '../../../components/PrimaryButton';
import styles from './styles';

const screen = Dimensions.get('screen');

const ReviewScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{height: 220}}>
        <Image
          source={require('../../../assets/images/splash-screen.jpg')}
          alt=""
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
          }}
        />
      </View>
      {/* <View style={{position: 'fixed', top: 0}}>
        <HeaderPage />
      </View> */}
      <View
        style={{
          flex: 1,
          ...styles.content,
        }}>
        <View style={styles.imageProduct}>
          <Image
            source={require('../../../assets/images/splash-screen.jpg')}
            alt=""
            style={{
              width: 80,
              height: 80,

              resizeMode: 'cover',
              borderRadius: 50,
            }}
          />
        </View>
        <View style={styles.textCenter}>
          <Text style={styles.nameProduct}>Pizza Hut</Text>
          <Text style={styles.desc}>4102 Pretty View Lanenda</Text>
          <Text style={styles.info}>Please Rate Food Service</Text>
          <View style={{paddingHorizontal: 20, width: '100%'}}>
            <TextInput
              style={styles.textarea}
              underlineColorAndroid="transparent"
              placeholder="Write review"
              placeholderTextColor="#eeeeee"
              // numberOfLines={5}

              multiline={true}
            />
          </View>
        </View>
        <View
          style={{
            // height: 80,
            // flex: 1,
            // elevation: -2,
            justifyContent: 'flex-end',
            width: '100%',
            paddingBottom: 20,
            paddingTop: 40,
            paddingHorizontal: 20,
          }}>
          <PrimaryButton
            title="Submit"
            action={
              () => navigation.navigate('DetailScreen')
              // console.log('run');
            }
          />
        </View>
      </View>
    </View>
  );
};

export default ReviewScreen;
1;
