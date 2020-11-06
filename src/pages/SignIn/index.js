import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILlogo} from '../../assets/illustration';
import {Button, Gap, Input, Link} from '../../components';
import {colors, fonts} from '../../utils';

const SignIn = ({navigation}) => {
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
      <Button title="Sign In" onPress={() => navigation.replace('MainApp')} />
      <Link txt="Create New Account" size={16} align="center" />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: colors.white,
    flex: 1,
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    lineHeight: 24,
    color: colors.text.primary,
    maxWidth: 153,
    marginTop: 40,
  },
});
