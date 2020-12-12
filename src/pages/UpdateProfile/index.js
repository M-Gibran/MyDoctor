import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ILNullPhoto} from '../../assets';
import {Button, Gap, Header, Input, Profile} from '../../components';
import {Firebase} from '../../config';
import {colors, getData, showError, storeData} from '../../utils';
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
        const errmessage = 'Password anda kurang dari 6 karakter';
        showError(errmessage);
      } else {
        updatePassword();
        updateProfileData();
        navigation.replace('MainApp');
      }
    } else {
      updateProfileData();
    }
  };

  const updatePassword = () => {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        user.updatePassword(password).catch((err) => {
          showError(err.message);
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
        storeData('user', data);
      })
      .catch((err) => {
        showError(err.message);
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
        if (response.didCancel || response.error) {
          const errmessage = 'oops, sepertinya anda tidak memilih foto nya?';
          showError(errmessage);
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
