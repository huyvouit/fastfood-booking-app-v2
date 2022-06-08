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

const NewAddressScreen = ({navigation, route}) => {
  const {info} = route.params;
  const {account} = useContext(AuthContext);
  const [provinceList, setProvinceList] = useState([]);
  const [districtList, setDistrictList] = useState([]);
  const [wardList, setWardList] = useState([]);
  const [username, setUsername] = useState(info?.username);
  const [phone, setPhone] = useState(info?.phone);
  const [address, setAddress] = useState({
    number: info?.address?.number,
    street: info?.address?.street,
    province: {label: info?.address?.province, value: ''},
    district: {label: info?.address?.district, value: ''},
    ward: {label: info?.address?.ward, value: ''},
  });
  useEffect(() => {
    (async () => {
      try {
        const res = await provinceApi.getProvinces();

        if (res.status === 200) {
          setProvinceList(
            res.data.map(item => ({
              label: item.name,
              value: item.code,
            })),
          );
          if (address.province.value === '') {
            let province = res.data.filter(item =>
              item.name.includes(address.province.label),
            );

            if (province?.length > 0) {
              setAddress({
                ...address,
                province: {
                  ...address.province,
                  value: province[0].code,
                },
              });
            }
          }
        }
      } catch (error) {
        console.log('error to get province list', error);
      }
    })();
  }, []);

  useEffect(() => {
    if (address.province.value !== '') {
      (async () => {
        let province = address.province;

        if (province) {
          try {
            const res = await provinceApi.getDistricts(province.value);

            if (res.status === 200) {
              setDistrictList(
                res.data.districts.map(item => ({
                  label: item.name,
                  value: item.code,
                })),
              );
              if (address.district.value === '') {
                let district = res.data.districts.filter(item =>
                  item.name.includes(address.district.label),
                );

                setAddress({
                  ...address,
                  district: {
                    ...address.district,
                    value: district[0].code,
                  },
                });
              }
            }
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

            if (res.status === 200) {
              setWardList(
                res.data.wards.map(item => ({
                  label: item.name,
                  value: item.code,
                })),
              );
              if (address.ward.value === '' && address.ward.label) {
                let ward = res.data.wards.filter(item =>
                  item.name.includes(address.ward.label),
                );

                setAddress({
                  ...address,
                  ward: {
                    ...address.ward,
                    value: ward[0].code,
                  },
                });
              }
            }
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
        addressId: info._id,
        newData: {
          username,
          phone,
          address: {
            ...address,
            province: address.province.label,
            district: address.district.label,
            ward: address.ward.label,
          },
        },
      };
      console.log(body);
      const res = await userApi.updateAddress(body);

      if (res.data.success) {
        // await fetchListAddress();
        // navigation.navigate('AddressBookScreen');
        // navigation.reset({
        //   index: 0,
        //   routes: [{name: 'AddressBookScreen'}],
        // });
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
          title="Edit Address"
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
        // defaultValue={(item, index) => {
        //   return add;
        // }}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem);
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
