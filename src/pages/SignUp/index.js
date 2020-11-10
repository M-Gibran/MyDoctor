import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';
import {colors} from '../../utils';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Input text="Full Name" />
          <Gap height={24} />
          <Input text="Pekerjaan" />
          <Gap height={24} />
          <Input text="Email Address" />
          <Gap height={24} />
          <Input text="Password" />
          <Gap height={40} />
          <Button
            title="Continue"
            onPress={() => navigation.navigate('UploadPhoto')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 10,
  },
  page: {
    backgroundColor: colors.white,
  },
});
