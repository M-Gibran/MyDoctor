import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {ILNullPhoto} from '../../assets';
import {Button, Gap, Header, Input, Profile} from '../../components';
import {Firebase} from '../../config';
import {colors, getData} from '../../utils';

const UpdateProfile = ({navigation}) => {
  const [profile, SetProfile] = useState({
    fullName: '',
    profession: '',
    email: '',
    photo: ILNullPhoto,
  });

  const [password, SetPassword] = useState('');

  useEffect(() => {
    getData('user')
      .then((res) => {
        const data = res;
        data.photo = {uri: res.photo};
        SetProfile(data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const update = () => {
    const data = profile;
    data.photo = profile.photo.uri;
    Firebase.database()
      .ref(`users/${profile.uid}/`)
      .update(profile)
      .then(() => {
        showMessage({
          message: 'Update Berhasil',
          color: colors.white,
          backgroundColor: colors.primary,
          type: 'default',
        });
        navigation.goBack('UserProfile');
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

  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile isRemove photo={profile.photo} />
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
          <Input text="Password" />
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
