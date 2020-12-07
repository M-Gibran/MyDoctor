import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, Profile, ProfileItem} from '../../components';
import {colors} from '../../utils';

const DoctorProfile = ({navigation, route}) => {
  const {
    photo,
    fullName,
    profession,
    university,
    hospital_address,
    str_number,
  } = route.params.data;
  return (
    <View style={styles.page}>
      <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Profile name={fullName} photo={{uri: photo}} desc={profession} />
        <Gap height={10} />
        <ProfileItem label="Alumnus" value={university} />
        <ProfileItem label="Tempat Praktik" value={hospital_address} />
        <ProfileItem label="No. STR" value={str_number} />
        <View style={styles.action}>
          <Button
            title="Start Consultation"
            onPress={() => navigation.navigate('Message')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  action: {
    paddingHorizontal: 40,
    paddingTop: 23,
  },
});
