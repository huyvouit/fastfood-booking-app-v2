import contactApi from 'api/contact_api';
import HeaderPage from 'components/Header';
import {AuthContext} from 'contexts/AuthProvider';
import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './styles';
import Images from 'assets/images';
import {showToastWithGravityAndOffset} from 'helper/toast';

export default function ContactScreen({navigation}) {
  const [page, setpage] = useState('');
  return (
    <ScrollView style={styles.main1}>
      <View style={styles.main2}>
        <RedComponent page={page} setpage={setpage} navigation={navigation} />
      </View>
      <View style={styles.main3}>
        <GreenComponent />
      </View>
      <View style={styles.main4}>
        <GreenComponent />
      </View>
    </ScrollView>
  );
}
const RedComponent = ({page, setpage, navigation}) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barstyle="light-content" />
      <View style={{width: '100%', height: 180}}>
        <View style={styles.red1}>
          <View style={{position: 'absolute', top: 0}}>
            <HeaderPage returnPage={() => navigation.openDrawer()} />
          </View>
          <Image
            source={Images.Logo}
            style={{width: 300, height: 300, justifyContent: 'center', top: 20}}
          />
        </View>
      </View>
    </View>
  );
};
const GreenComponent = () => {
  const {account} = useContext(AuthContext);
  const [message, setMessage] = useState('');

  const submitContact = async event => {
    event.preventDefault();

    const contactForm = {
      name: account?.fullname,
      email: account?.email,
      message,
    };
    try {
      const response = await contactApi.postContact(contactForm);

      if (response.data.success) {
        showToastWithGravityAndOffset(response.data.msg);

        setMessage('');
      }
    } catch (error) {
      console.log(error.response.data);
      if (error.response.data) return error.response.data;
    }
  };

  return (
    <View style={styles.gr0}>
      {/* Contact */}
      <Text style={styles.gr1}>Contact with Us.</Text>
      {/* hovaten */}
      <View style={styles.gr2}>
        <Image
          source={require('../../../assets/images/people.png')}
          resizeMode="stretch"
          style={styles.gr3}
        />

        <TextInput
          style={styles.gr4}
          // autoCapitalize={false}
          editable={false}
          value={account?.fullname}
        />
      </View>
      {/* Email */}
      <View style={styles.gr2}>
        <Image
          source={require('../../../assets/images/email.png')}
          resizeMode="stretch"
          style={styles.gr3}
        />
        <TextInput
          style={styles.gr4}
          // autoCapitalize={false}
          editable={false}
          value={account?.email}
        />
      </View>
      {/* content */}
      <View style={styles.gr2}>
        <Image
          source={require('../../../assets/images/content.png')}
          resizeMode="stretch"
          style={styles.gr5}
        />
        <TextInput
          style={styles.gr4}
          // autoCapitalize={false}
          value={message}
          placeholder="Please enter message"
          onChangeText={mess => setMessage(mess)}
        />
      </View>
      <TouchableOpacity style={styles.gr6} onPress={submitContact}>
        <Text style={styles.gr7}>Send Message</Text>
      </TouchableOpacity>
    </View>
  );
};
