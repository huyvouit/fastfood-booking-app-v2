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
import HeaderPage from 'components/Header';
import {SvgXml} from 'react-native-svg';
import Icons from 'assets/icons';

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

const Town_Ward = [
  'phuong 1',
  'phuong 2',
  'phuong 3',
  'phuong 4',
  'phuong 5',
  'phuong 1',
  'phuong 2',
  'phuong 3',
  'phuong 4',
  'phuong 5',
  'phuong 1',
  'phuong 2',
  'phuong 3',
  'phuong 4',
  'phuong 5',
];

const NewAddressScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.title}>
        <HeaderPage
          returnPage={() => navigation.openDrawer()}
          title="New Addres"
        />
        {/* <TouchableOpacity style={{position: 'absolute', top: 0}}>
          <HeaderPage returnPage={() => navigation.openDrawer()} />
        </TouchableOpacity>
        <Text style={styles.titleText}>Vouchers</Text> */}
      </View>
      <View style={styles.content}>
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
            <Text style={styles.label}>Number house</Text>
            <TextInput style={styles.inputPhoneNumber} />
          </View>
          <View style={styles.info}>
            <Text style={styles.label}>Street</Text>
            <TextInput style={styles.inputPhoneNumber} />
          </View>

          <View style={styles.info}>
            <Text style={styles.label}>Province/City</Text>
            <SelectDropdown
              style={styles.inputCity}
              data={Town_Ward}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              buttonStyle={styles.inputCity}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              dropdownIconPosition="right"
              rowTextForSelection={(item, index) => {
                return item;
              }}
              renderDropdownIcon={() => {
                return <SvgXml xml={Icons.IconDown} color="#000" />;
              }}
            />
          </View>

          <View style={styles.info}>
            <Text style={styles.label}>District</Text>
            <SelectDropdown
              style={styles.inputCity}
              data={Town_Ward}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              buttonStyle={styles.inputCity}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              dropdownIconPosition="right"
              rowTextForSelection={(item, index) => {
                return item;
              }}
              renderDropdownIcon={() => {
                return <SvgXml xml={Icons.IconDown} color="#000" />;
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
              buttonStyle={styles.inputCity}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              dropdownIconPosition="right"
              rowTextForSelection={(item, index) => {
                return item;
              }}
              renderDropdownIcon={() => {
                return <SvgXml xml={Icons.IconDown} color="#000" />;
              }}
            />
          </View>

          <View style={styles.buttonAction}>
            <TouchableOpacity style={styles.buttonSave}>
              <Text style={styles.buttonSaveText}>SAVE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default NewAddressScreen;
