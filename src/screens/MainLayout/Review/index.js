import productApi from 'api/product_api';
import {showToastWithGravityAndOffset} from 'helper/toast';
import React, {useState} from 'react';
import {View, Text, Image, TextInput, Dimensions} from 'react-native';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {useDispatch} from 'react-redux';
import {setSelectedTab} from 'redux/actions';
import HeaderPage from '../../../components/Header';
import PrimaryButton from '../../../components/PrimaryButton';
import styles from './styles';

const screen = Dimensions.get('screen');

const ReviewScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {firstItem} = route.params;
  const [formRating, setFormRating] = useState({
    productId: firstItem?.productId?._id,
    content: '',
    rating: 5,
  });
  const submitReview = async event => {
    event.preventDefault();

    try {
      const response = await productApi.postReview(formRating);

      if (response.data.success) {
        showToastWithGravityAndOffset(response.data.message);
        navigation.reset({
          index: 0,
          routes: [{name: 'MainlayoutScreen'}],
        });
        dispatch(setSelectedTab('Home'));
      } else {
      }
    } catch (error) {
      console.log(error.response.data);
      if (error.response.data)
        showToastWithGravityAndOffset(error.response.data.message);
    }
  };
  return (
    <View style={styles.container}>
      <View style={{height: 220}}>
        <Image
          source={{uri: firstItem?.productId?.images[0]}}
          alt=""
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
          }}
        />
      </View>
      <View style={{position: 'absolute', top: 0}}>
        <HeaderPage returnPage={() => navigation.goBack()} />
      </View>
      <View
        style={{
          flex: 1,
          ...styles.content,
        }}>
        <View style={styles.imageProduct}>
          <Image
            source={{uri: firstItem?.productId?.mainImage}}
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
          <Text style={styles.nameProduct}>{firstItem?.productId?.name}</Text>

          {/* <Text style={styles.info}>Please Rate Food Service</Text> */}
          <AirbnbRating
            count={5}
            reviews={['Terrible', 'Bad', 'Okay', 'Good', 'Great']}
            defaultRating={formRating.rating}
            onFinishRating={value =>
              setFormRating({...formRating, rating: value})
            }
            size={25}
          />
          <View style={{paddingHorizontal: 20, width: '100%', marginTop: 10}}>
            <TextInput
              style={styles.textarea}
              // underlineColorAndroid="transparent"
              value={formRating.content}
              onChangeText={text =>
                setFormRating({...formRating, content: text})
              }
              placeholder="Write review"
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
            // paddingTop: 40,
            paddingHorizontal: 20,
          }}>
          <PrimaryButton title="Submit" action={submitReview} />
        </View>
      </View>
    </View>
  );
};

export default ReviewScreen;
1;
