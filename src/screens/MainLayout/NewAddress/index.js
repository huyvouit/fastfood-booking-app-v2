import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import BackButton from 'components/BackButton';

const Province_City = [
  'TP Ho Chi Minh',
  'Ha Noi',
  'Khanh Hoa',
  'Binh Dinh',
  'Vinh Long',
];

const District_Ward = [
  'Thu Duc',
  'Binh Thanh',
  'Go Vap',
  'Cu Chi',
  'Binh Chanh',
  'Binh Tan',
  'Tan Binh',
  'Quan 1',
  'Quan 3',
];

const Town_Ward = ['phuong 1', 'phuong 2', 'phuong 3', 'phuong 4', 'phuong 5'];

const NewAddressScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.title}>
        <BackButton style={styles.back}/>
        <Text style={styles.titleText}>Add new address</Text>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.textWrapper}>
          <View style={styles.info}>
            <Text style={styles.label}>Full name</Text>
            <TextInput style={styles.inputName} autoFocus />
          </View>

          <View style={styles.info}>
            <Text style={styles.label}>Mobile number</Text>
            <TextInput
              style={styles.inputPhoneNumber}
              keyboardType={'numeric'}
            />
          </View>

          <View style={styles.info}>
            <Text style={styles.label}>Province/City</Text>
            <SelectDropdown
              style={styles.inputCity}
              data={Province_City}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
            />
          </View>

          <View style={styles.info}>
            <Text style={styles.label}>District</Text>
            <SelectDropdown
              style={styles.inputCity}
              data={District_Ward}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
            />
          </View>

          <View style={styles.info}>
            <Text style={styles.label}>Town/Ward</Text>
            <SelectDropdown
              style={styles.inputCity}
              data={Town_Ward}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
            />
          </View>

          <View style={styles.info}>
            <Text style={styles.label}>Address (include house number)</Text>
            <TextInput style={styles.inputAddress} />
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

export default NewAddressScreen;