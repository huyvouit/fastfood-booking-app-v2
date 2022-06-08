import React, {useContext, useEffect, useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';

import HeaderPage from 'components/Header';
import {SvgXml} from 'react-native-svg';
import Icons from 'assets/icons';
import provinceApi from 'api/province_api';
import userApi from 'api/user_api';
import {showToastWithGravityAndOffset} from 'helper/toast';
import {AuthContext} from 'contexts/AuthProvider';
import {useDispatch} from 'react-redux';
import {setSelectedTab} from 'redux/actions';

const NewAddressScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {account} = useContext(AuthContext);
  const [provinceList, setProvinceList] = useState([]);
  const [districtList, setDistrictList] = useState([]);
  const [wardList, setWardList] = useState([]);
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState({
    number: '',
    street: '',
    province: {label: '', value: ''},
    district: {label: '', value: ''},
    ward: {label: '', value: ''},
  });
  useEffect(() => {
    (async () => {
      try {
        const res = await provinceApi.getProvinces();
        setProvinceList(
          res.data.map(item => ({
            label: item.name,
            value: item.code,
          })),
        );
      } catch (error) {
        console.log('error to get province list', error);
      }
    })();
  }, []);

  useEffect(() => {
    if (address) {
      (async () => {
        const province = address.province.value;

        if (province) {
          try {
            const res = await provinceApi.getDistricts(province);
            setDistrictList(
              res.data.districts.map(item => ({
                label: item.name,
                value: item.code,
              })),
            );
          } catch (error) {
            console.log('error to get province list', error);
          }
        }
      })();
      (async () => {
        const district = address.district.value;
        if (district) {
          try {
            const res = await provinceApi.getWards(district);
            setWardList(
              res.data.wards.map(item => ({
                label: item.name,
                value: item.code,
              })),
            );
          } catch (error) {
            console.log('error to get province list', error);
          }
        }
      })();
    }
  }, [address]);

  const handleAddNewAddress = async () => {
    try {
      const body = {
        userId: account?._id,
        username,
        phone,
        address: {
          ...address,
          province: address.province.label,
          district: address.district.label,
          ward: address.ward.label,
        },
      };
      console.log(body);
      const res = await userApi.addNewAddress(body);

      if (res.data.success) {
        // await fetchListAddress();
        // navigation.reset({
        //   index: 0,
        //   routes: [{name: 'AddressBook'}],
        // });
        // dispatch(setSelectedTab('AddressBook'));
        showToastWithGravityAndOffset(res.data.message);
      }
    } catch (error) {
      console.log(error);
      showToastWithGravityAndOffset(error.response.data.message);
    }
  };

  const handleChangeProvince = async value => {
    try {
      const res = await provinceApi.getDistricts(value);
      const districts = res.data.districts;

      setDistrictList(
        districts.map(item => ({
          label: item.name,
          value: item.code,
        })),
      );
      setDistrictList([]);
      setWardList([]);
    } catch (error) {
      console.log('error to get district list', error);
    }
  };
  const handleChangeDistrict = async value => {
    try {
      const res = await provinceApi.getWards(value);
      const wards = res.data.wards;
      setWardList([]);
      setWardList(
        wards.map(item => ({
          label: item.name,
          value: item.code,
        })),
      );
    } catch (error) {
      console.log('error to get ward list', error);
    }
  };
  // console.log(address);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.title}>
        <HeaderPage
          returnPage={() => navigation.openDrawer()}
          title="New Addres"
        />
      </View>
      <View style={styles.content}>
        <View style={styles.textWrapper}>
          <View style={styles.info}>
            <Text style={styles.label}>Full name</Text>
            <TextInput
              style={styles.inputName}
              autoFocus
              value={username}
              onChangeText={text => setUsername(text)}
            />
          </View>

          <View style={styles.info}>
            <Text style={styles.label}>Mobile number</Text>
            <TextInput
              style={styles.inputPhoneNumber}
              keyboardType={'numeric'}
              value={phone}
              onChangeText={text => setPhone(text)}
            />
          </View>
          <View style={styles.info}>
            <Text style={styles.label}>Number house</Text>
            <TextInput
              style={styles.inputPhoneNumber}
              value={address.number}
              onChangeText={text => setAddress({...address, number: text})}
            />
          </View>
          <View style={styles.info}>
            <Text style={styles.label}>Street</Text>
            <TextInput
              style={styles.inputPhoneNumber}
              value={address.street}
              onChangeText={text => setAddress({...address, street: text})}
            />
          </View>

          <SelectedBox
            title="Province/City"
            data={provinceList}
            setAddress={setAddress}
            address={address}
            action={selectedItem => {
              setAddress({
                ...address,
                province: {
                  label: selectedItem.label,
                  value: selectedItem.value,
                },
              });
              handleChangeProvince(selectedItem.value);
            }}
          />
          <SelectedBox
            title="District"
            data={districtList}
            setAddress={setAddress}
            address={address}
            action={selectedItem => {
              setAddress({
                ...address,
                district: {
                  label: selectedItem.label,
                  value: selectedItem.value,
                },
              });
              handleChangeDistrict(selectedItem.value);
            }}
          />

          <SelectedBox
            title="Ward"
            data={wardList}
            setAddress={setAddress}
            address={address}
            action={selectedItem =>
              setAddress({
                ...address,
                ward: {
                  label: selectedItem.label,
                  value: selectedItem.value,
                },
              })
            }
          />

          <View style={styles.buttonAction}>
            <TouchableOpacity
              style={styles.buttonSave}
              onPress={handleAddNewAddress}>
              <Text style={styles.buttonSaveText}>SAVE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default NewAddressScreen;

const SelectedBox = ({data, title, setAddress, address, action}) => {
  return (
    <View style={styles.info}>
      <Text style={styles.label}>{title}</Text>
      <SelectDropdown
        style={styles.inputCity}
        data={data}
        onSelect={(selectedItem, index) => {
          action(selectedItem);
        }}
        buttonStyle={styles.inputCity}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem.label;
        }}
        dropdownIconPosition="right"
        rowTextForSelection={(item, index) => {
          return item.label;
        }}
        renderDropdownIcon={() => {
          return <SvgXml xml={Icons.IconDown} color="#000" />;
        }}
      />
    </View>
  );
};
