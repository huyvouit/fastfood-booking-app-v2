import BackButton from 'components/BackButton';
import React from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';

const EditProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.title}>
        <BackButton style={styles.back}/>
        <Text style={styles.titleText}>Edit Profile</Text>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.textWrapper}>
          <View style={styles.itemInfo}>
            <Text style={styles.Label}>Full name</Text>
            <View style={styles.info}>
              <TextInput style={styles.inputInfo}>Eljad Eendaz</TextInput>
            </View>
          </View>

          <View style={styles.itemInfo}>
            <Text style={styles.Label}>E-mail</Text>
            <View style={styles.info}>
              <TextInput style={styles.inputInfo}>prelookstudio@gmail.com</TextInput>
            </View>
          </View>

          <View style={styles.itemInfo}>
            <Text style={styles.Label}>Phone number</Text>
            <View style={styles.info}>
              <TextInput style={styles.inputInfo} keyboardType={'numeric'}>+1 (783) 0986 8786</TextInput>
            </View>
          </View>

          <View style={styles.buttonAction}>
            <TouchableOpacity style={styles.buttonSave}>
              <Text style={styles.buttonSaveText}>SAVE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfileScreen;
