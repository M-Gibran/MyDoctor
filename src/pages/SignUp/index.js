import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input, Loading} from '../../components';
import {colors, useForm} from '../../utils';
import {Firebase} from '../../config';
import {showMessage, hideMessage} from 'react-native-flash-message';

const SignUp = ({navigation}) => {
  const [form, setFrom] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });

  const [loading, SetLoading] = useState(false);

  const onContinue = () => {
    console.log(form);

    SetLoading(true);
    Firebase.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((success) => {
        SetLoading(false);
        setFrom('reset');
        console.log('register success', success);
      })
      .catch((error) => {
        const errorMessage = error.message;
        SetLoading(false);
        showMessage({
          message: errorMessage,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      });
    // () => navigation.navigate('UploadPhoto')
  };
  return (
    <>
      <View style={styles.page}>
        <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <Input
              text="Full Name"
              value={form.fullName}
              onChangeText={(value) => setFrom('fullName', value)}
            />
            <Gap height={24} />
            <Input
              text="Pekerjaan"
              value={form.profession}
              onChangeText={(value) => setFrom('profession', value)}
            />
            <Gap height={24} />
            <Input
              text="Email Address"
              value={form.email}
              onChangeText={(value) => setFrom('email', value)}
            />
            <Gap height={24} />
            <Input
              text="Password"
              value={form.password}
              onChangeText={(value) => setFrom('password', value)}
              secureTextEntry
            />
            <Gap height={40} />
            <Button title="Continue" onPress={onContinue} />
          </View>
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
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
