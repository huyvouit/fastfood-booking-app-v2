import React, {useContext, useState} from 'react';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import ImagePicker from 'react-native-image-crop-picker';
import {SvgXml} from 'react-native-svg';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  TextInput,
  StyleSheet,
} from 'react-native';
import styles from './styles';
import HeaderPage from 'components/Header';
import {AuthContext} from 'contexts/AuthProvider';
import userApi from 'api/user_api';
import {showToastWithGravityAndOffset} from 'helper/toast';
import axios from 'axios';

const ProfileScreen = ({navigation}) => {
  const {account, fetchUserInfo} = useContext(AuthContext);
  const [isEditable, setIsEditable] = useState(false);
  // console.log(navigation);
  // const [image, setImage] = useState(
  //   'https://ict-imgs.vgcloud.vn/2020/09/01/19/huong-dan-tao-facebook-avatar.jpg',
  // );
  const [formUser, setFormUser] = useState({
    fullname: account?.fullname,
    phone: account?.phone,
    avatar:
      account?.avatar ||
      'https://ict-imgs.vgcloud.vn/2020/09/01/19/huong-dan-tao-facebook-avatar.jpg',
  });

  const submitUpdate = async data => {
    try {
      const response = await userApi.updateUserInfo(data);

      if (response.data.success) {
        showToastWithGravityAndOffset(response.data.message);
        setIsEditable(false);
        fetchUserInfo();
      }
    } catch (error) {
      console.log(error.response.data);
      if (error.response.data) return error.response.data;
    }
  };

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      setFormUser({...formUser, avatar: image.path});
      submitUpdate({avatar: image.path});
      this.bs.current.snapTo(1);
    });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      setFormUser({...formUser, avatar: image.path});
      submitUpdate({avatar: image.path});
      this.bs.current.snapTo(1);
    });
  };

  renderInner = () => (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={takePhotoFromCamera}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={choosePhotoFromLibrary}>
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => this.bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );
  bs = React.createRef();
  fall = new Animated.Value(1);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <HeaderPage
          returnPage={() => navigation.openDrawer()}
          title={'Checkout'}
        />
      </View>
      {/* <View >
        <TouchableOpacity style={{position: 'absolute', top: 0, left: -10}}>
          <HeaderPage returnPage={() => navigation.openDrawer()} />
        </TouchableOpacity>
        <Text style={styles.titleText}>Profile</Text>
      </View> */}

      <BottomSheet
        ref={this.bs}
        snapPoints={[330, 0]}
        renderContent={this.renderInner}
        renderHeader={this.renderHeader}
        initialSnap={1}
        callbackNode={this.fall}
        enabledGestureInteraction={true}
      />
      {/* </View> */}
      <ScrollView style={styles.content}>
        <View style={styles.textWrapper}>
          <TouchableOpacity
            style={styles.profile}
            onPress={() => this.bs.current.snapTo(0)}>
            <View style={styles.avatar}>
              <Image source={{uri: formUser.avatar}} style={styles.image} />
            </View>
          </TouchableOpacity>

          <View style={styles.edit}>
            <Text style={styles.name}>{account?.fullname}</Text>
            {isEditable ? (
              <TouchableOpacity
                style={styles.editProfile}
                onPress={() => {
                  submitUpdate(formUser);
                }}>
                <Text style={{...styles.editProfileText, color: '#ff724c'}}>
                  Save Profile
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.editProfile}
                onPress={() => setIsEditable(true)}>
                <Text style={styles.editProfileText}>Edit Profile</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.itemInfo}>
            <Text style={styles.Label}>E-mail</Text>
            <View style={styles.info}>
              <TextInput
                style={styles.infoText}
                value={account?.email}
                editable={false}
              />
            </View>
          </View>
          <View style={styles.itemInfo}>
            <Text style={styles.Label}>Full name</Text>
            <View style={styles.info}>
              <TextInput
                style={{...styles.infoText}}
                editable={isEditable}
                value={formUser.fullname}
                onChangeText={text =>
                  setFormUser({...formUser, fullname: text})
                }
                autoFocus
              />
            </View>
          </View>

          <View style={styles.itemInfo}>
            <Text style={styles.Label}>Phone number</Text>
            <View style={styles.info}>
              <TextInput
                keyboardType="numeric"
                style={styles.infoText}
                value={formUser.phone}
                onChangeText={text => setFormUser({...formUser, phone: text})}
                editable={isEditable}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
