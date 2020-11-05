import React from 'react';
import {StyleSheet, Text, View, ScroollView} from 'react-native';
import {ILlogo} from '../../assets/illustration';
import {Button, Gap, Input, Link} from '../../components';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <ILlogo />
      <Text style={styles.title}>Masuk dan mulai berkontribusi</Text>
      <Gap height={40} />
      <Input text="Email Address" />
      <Gap height={24} />
      <Input text="Password" />
      <Link txt="Forgot My Password" size={12} />
      <Gap height={40} />
      <Button title="Sign In" />
      <Link txt="Create New Account" size={16} align="center" />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 20,
    lineHeight: 24,
    color: '#112340',
    maxWidth: 153,
    marginTop: 40,
  },
});
