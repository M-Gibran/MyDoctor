import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ILlogo} from '../../assets/illustration';
import {Button, Gap, Input, Link} from '../../components';
import {Firebase} from '../../config';
import {colors, fonts, showError, storeData, useForm} from '../../utils';
import {useDispatch} from 'react-redux';

const SignIn = ({navigation}) => {
  const [form, SetFrom] = useForm({email: '', password: ''});
  const dispatch = useDispatch();

  const Login = () => {
    dispatch({type: 'SET_LOADING', value: true});
    Firebase.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((res) => {
        dispatch({type: 'SET_LOADING', value: false});
        Firebase.database()
          .ref(`users/${res.user.uid}/`)
          .once('value')
          .then((resDB) => {
            if (resDB.val()) {
              storeData('user', resDB.val());
              navigation.replace('MainApp');
            }
          });
      })
      .catch((err) => {
        dispatch({type: 'SET_LOADING', value: false});
        showError(err.message);
      });
  };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ILlogo />
        <Text style={styles.title}>Masuk dan mulai berkontribusi</Text>
        <Gap height={40} />
        <Input
          text="Email Address"
          value={form.email}
          onChangeText={(value) => SetFrom('email', value)}
        />
        <Gap height={24} />
        <Input
          text="Password"
          value={form.password}
          onChangeText={(value) => SetFrom('password', value)}
          secureTextEntry
        />
        <Link txt="Forgot My Password" size={12} />
        <Gap height={40} />
        <Button title="Sign In" onPress={Login} />
        <Link
          txt="Create New Account"
          size={16}
          align="center"
          onPress={() => navigation.navigate('SignUp')}
        />
      </ScrollView>
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
