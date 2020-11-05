import React from 'react';
import {StyleSheet, Text, View, ScroolView} from 'react-native';
import {Button, Gap, Input} from '../../components';

const SignUp = () => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <Text style={styles.title}>Daftar Akun</Text>
      <View style={styles.container}>
        <Gap height={40} />
        <Input text="Full Name" />
        <Gap height={24} />
        <Input text="Pekerjaan" />
        <Gap height={24} />
        <Input text="Email Address" />
        <Gap height={24} />
        <Input text="Password" />
        <Gap height={40} />
        <Button title="Continue" />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Nanito-SemiBold',
    fontSize: 20,
    lineHeight: 27,
    color: '#112340',
    textAlign: 'center',
    marginTop: 30,
  },
  container: {
    padding: 40,
  },
});
