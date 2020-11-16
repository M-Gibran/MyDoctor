import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {ILNullPhoto} from '../../assets';
import {Button, Gap, Header, Input, Profile} from '../../components';
import {Firebase} from '../../config';
import {colors, getData, storeData} from '../../utils';
import ImagePicker from 'react-native-image-picker';

const UpdateProfile = ({navigation}) => {
  const [profile, SetProfile] = useState({
    fullName: '',
    profession: '',
    email: '',
    photo: ILNullPhoto,
  });

  const [password, SetPassword] = useState('');
  const [photo, setPhoto] = useState(ILNullPhoto);
  const [photoForDB, setPhotoForDB] = useState('');

  useEffect(() => {
    getData('user')
      .then((res) => {
        const data = res;
        setPhoto({uri: res.photo});
        SetProfile(data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const update = () => {
    if (password.length > 0) {
      if (password.length < 6) {
        showMessage({
          message: 'Password anda kurang dari 6 karakter',
          color: colors.white,
          backgroundColor: colors.error,
          type: 'default',
        });
      } else {
        updatePassword();
        updateProfileData();
      }
    } else {
      updateProfileData();
    }
  };

  const updatePassword = () => {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        user.updatePassword(password).catch((err) => {
          showMessage({
            message: err.message,
            color: colors.white,
            backgroundColor: colors.error,
            type: 'default',
          });
        });
      }
    });
  };

  const updateProfileData = () => {
    const data = profile;
    data.photo = photoForDB;
    Firebase.database()
      .ref(`users/${profile.uid}/`)
      .update(data)
      .then(() => {
        console.log('SUKSES:', data);
        storeData('user', data);
      })
      .catch((err) => {
        showMessage({
          message: err,
          color: colors.white,
          backgroundColor: colors.error,
          type: 'default',
        });
      });
  };

  const changetext = (key, value) => {
    SetProfile({
      ...profile,
      [key]: value,
    });
  };

  const getImage = () => {
    ImagePicker.launchImageLibrary(
      {quality: 0.5, maxWidth: 200, maxHeight: 200},
      (response) => {
        console.log('response', response);
        if (response.didCancel || response.error) {
          showMessage({
            message: 'oops, sepertinya anda tidak memilih foto nya?',
            type: 'default',
            backgroundColor: colors.error,
            color: colors.white,
          });
        } else {
          const source = {uri: response.uri};

          setPhotoForDB(`data:${response.type};base64, ${response.data}`);
          setPhoto(source);
        }
      },
    );
  };
  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile isRemove photo={photo} onPress={getImage} />
          <Gap height={26} />
          <Input
            text="Full Name"
            value={profile.fullName}
            onChangeText={(value) => changetext('fullName', value)}
          />
          <Gap height={24} />
          <Input
            text="Pekerjaan"
            value={profile.profession}
            onChangeText={(value) => changetext('profession', value)}
          />
          <Gap height={24} />
          <Input text="Email" value={profile.email} disable />
          <Gap height={24} />
          <Input
            text="Password"
            secureTextEntry
            value={password}
            onChangeText={(value) => SetPassword(value)}
          />
          <Gap height={40} />
          <Button title="Save Profile" onPress={update} />
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {padding: 40, paddingTop: 0},
});
