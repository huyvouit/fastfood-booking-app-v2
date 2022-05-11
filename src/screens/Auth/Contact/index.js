/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState} from 'react';
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
 const windowWidth = Dimensions.get('window').width;
 const windowHeight = Dimensions.get('window').height;
 const SignIn = 'SIGNIN';
 const SignUp = 'SIGNUP';
 
 export default function Contact() {
   const [page, setpage] = useState('');
   return (
     <ScrollView style={styles.main1}>
       <View style={styles.main2}>
         <RedComponent page={page} setpage={setpage} />
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
 const RedComponent = ({page, setpage}) => {
   return (
     <View style={{flex: 1}}>
       <StatusBar barstyle="light-content" />
       <View style={{width: '100%', height: 180}}>
         <View style={styles.red1}>
           <Text style={styles.red2}>FASTFOOD</Text>
         </View>
       </View>
     </View>
   );
 };
 const GreenComponent = () => {
   const [email, setemail] = useState('');
   const [password, setpassword] = useState('');
   const [passwordHidden, setpasswordHidden] = useState(true);
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
           autoCapitalize={false}
           placeholder="Full name"
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
           autoCapitalize={false}
           placeholder="E-mail"
         />
       </View>
       {/* content */}
       <View style={styles.gr2}>
         <Image
           source={require('../../../assets/images/index/content.png')}
           resizeMode="stretch"
           style={styles.gr5}
         />
         <TextInput
           style={styles.gr4}
           autoCapitalize={false}
           placeholder="Content"
         />
       </View>
       <TouchableOpacity style={styles.gr6}>
         <Text style={styles.gr7}>Send Message</Text>
       </TouchableOpacity>
     </View>
   );
 }; 