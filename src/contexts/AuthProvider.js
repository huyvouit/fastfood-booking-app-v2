import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
// import { GoogleSignin } from '@react-native-community/google-signin';
// import { LoginManager, AccessToken } from 'react-native-fbsdk';
import userApi from 'api/user_api';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [account, setAccount] = useState(null);
  const [cart, setCart] = useState(null);

  const createUser = async (fullname, email, uid) => {
    try {
      const params = {
        uid,
        fullname,
        email,
      };

      const response = await userApi.register(params);
      console.log(response.data.data?.token);
      if (response.data.success) {
        console.log('run storeage');
        await AsyncStorage.setItem('TOKEN_USER', response.data.data?.token);
      }
      setAccount(response.data.data);
    } catch (error) {
      console.log('Failed to create user: ', error);
    }
  };
  const loginUser = async uid => {
    console.log('abc', uid);
    try {
      const params = {
        uid: uid,
      };

      const response = await userApi.login(params);
      console.log(response.data.data?.token);
      if (response.data.success) {
        await AsyncStorage.setItem('TOKEN_USER', response.data.data?.token);
      }
      setAccount(response.data.data);
    } catch (error) {
      console.log('Failed to login: ', error);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        account,
        setAccount,
        cart,
        setCart,
        login: async (email, password) => {
          try {
            await auth()
              .signInWithEmailAndPassword(email, password)
              .then(() => {
                loginUser(auth().currentUser.uid);
              });
          } catch (e) {
            console.log(e);
          }
        },
        // googleLogin: async () => {
        //   try {
        //     // Get the users ID token
        //     const { idToken } = await GoogleSignin.signIn();

        //     // Create a Google credential with the token
        //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        //     // Sign-in the user with the credential
        //     await auth().signInWithCredential(googleCredential)
        //     // Use it only when user Sign's up,
        //     // so create different social signup function
        //     // .then(() => {
        //     //   //Once the user creation has happened successfully, we can add the currentUser into firestore
        //     //   //with the appropriate details.
        //     //   // console.log('current User', auth().currentUser);
        //     //   firestore().collection('users').doc(auth().currentUser.uid)
        //     //   .set({
        //     //       fname: '',
        //     //       lname: '',
        //     //       email: auth().currentUser.email,
        //     //       createdAt: firestore.Timestamp.fromDate(new Date()),
        //     //       userImg: null,
        //     //   })
        //     //   //ensure we catch any errors at this stage to advise us if something does go wrong
        //     //   .catch(error => {
        //     //       console.log('Something went wrong with added user to firestore: ', error);
        //     //   })
        //     // })
        //     //we need to catch the whole sign up process if it fails too.
        //     .catch(error => {
        //         console.log('Something went wrong with sign up: ', error);
        //     });
        //   } catch(error) {
        //     console.log({error});
        //   }
        // },
        // fbLogin: async () => {
        //   try {
        //     // Attempt login with permissions
        //     const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

        //     if (result.isCancelled) {
        //       throw 'User cancelled the login process';
        //     }

        //     // Once signed in, get the users AccesToken
        //     const data = await AccessToken.getCurrentAccessToken();

        //     if (!data) {
        //       throw 'Something went wrong obtaining access token';
        //     }

        //     // Create a Firebase credential with the AccessToken
        //     const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

        //     // Sign-in the user with the credential
        //     await auth().signInWithCredential(facebookCredential)
        //     // Use it only when user Sign's up,
        //     // so create different social signup function
        //     // .then(() => {
        //     //   //Once the user creation has happened successfully, we can add the currentUser into firestore
        //     //   //with the appropriate details.
        //     //   console.log('current User', auth().currentUser);
        //     //   firestore().collection('users').doc(auth().currentUser.uid)
        //     //   .set({
        //     //       fname: '',
        //     //       lname: '',
        //     //       email: auth().currentUser.email,
        //     //       createdAt: firestore.Timestamp.fromDate(new Date()),
        //     //       userImg: null,
        //     //   })
        //     //   //ensure we catch any errors at this stage to advise us if something does go wrong
        //     //   .catch(error => {
        //     //       console.log('Something went wrong with added user to firestore: ', error);
        //     //   })
        //     // })
        //     //we need to catch the whole sign up process if it fails too.
        //     .catch(error => {
        //         console.log('Something went wrong with sign up: ', error);
        //     });
        //   } catch(error) {
        //     console.log({error});
        //   }
        // },
        register: async (fullname, email, password) => {
          try {
            await auth()
              .createUserWithEmailAndPassword(email, password)
              .then(() => {
                //Once the user creation has happened successfully, we can add the currentUser into firestore
                //with the appropriate details.
                createUser(fullname, email, auth().currentUser.uid).then(() => {
                  firestore()
                    .collection('users')
                    .doc(auth().currentUser.uid)
                    .set({
                      displayName: fullname,

                      email: email,
                      createdAt: firestore.Timestamp.fromDate(new Date()),
                      userImg: null,
                    })
                    //ensure we catch any errors at this stage to advise us if something does go wrong
                    .catch(error => {
                      console.log(
                        'Something went wrong with added user to firestore: ',
                        error,
                      );
                    });
                });
              })
              //we need to catch the whole sign up process if it fails too.
              .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                  console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                  console.log('That email address is invalid!');
                }

                console.log('Something went wrong with sign up: ', error);
              });
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth()
              .signOut()
              .then(() => console.log('User signed out!'));
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
