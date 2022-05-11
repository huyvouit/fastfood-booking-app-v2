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
 
 export default function Reset() {
   const [page, setpage] = useState('');
   return (
     <ScrollView style={styles.main1}>
       <SafeAreaView style={styles.main2}>
         <RedComponent page={page} setpage={setpage} />
       </SafeAreaView>
       <SafeAreaView style={styles.main3}>
         <GreenComponent />
       </SafeAreaView>
       <ScrollView style={styles.main4}>
         <GreenComponent />
       </ScrollView>
     </ScrollView>
   );
 }
 const RedComponent = ({page, setpage}) => {
   return (
     <View style={{flex: 1}}>
       <StatusBar barstyle="light-content" />
       <View style={styles.red1}>
         <View style={styles.red2}>
           <Text style={styles.red3}>FASTFOOD</Text>
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
     <View style={styles.gr1}>
       {/* Reset */}
       <Text style={styles.gr2}>RESET PASSWORD</Text>
       {/* text */}
       <View style={styles.gr3}>
         <Text style={styles.gr4}>
           <Text style={styles.gr5}>
             Please enter your email address to request a password reset.{' '}
           </Text>
         </Text>
       </View>
       {/* Email */}
       <View style={styles.gr6}>
         <Image
           source={require('../../../assets/images/email.png')}
           resizeMode="stretch"
           style={styles.gr7}
         />
         <TextInput
           style={styles.gr8}
           autoCapitalize={null}
           placeholder="E-mail"
         />
       </View>
       {/* Button*/}
       <TouchableOpacity style={styles.gr9}>
         <Text style={styles.gr10}>SEND NEW PASSWORD</Text>
       </TouchableOpacity>
     </View>
   );
 };
  