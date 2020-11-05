import React, {useEffect} from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {GetStarted} from '..';
import {ILlogo, ILGetStarted} from '../../assets';
import {Button, Gap} from '../../components';

const index = ({navigation}) => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.pages}>
      <ILlogo />
      <Text style={styles.title}>
        Konsultasi dengan dokter jadi lebih mudah & fleksibel
      </Text>
      <View>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('SignUp')}
        />
        <Gap height={16} />
        <Button
          title="Sign In"
          type="secondary"
          onPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </ImageBackground>
  );
};

export default index;

const styles = StyleSheet.create({
  pages: {padding: 40, flex: 1, justifyContent: 'space-between'},
  title: {
    marginTop: 91,
    fontSize: 28,
    lineHeight: 34,
    color: 'white',
    fontFamily: 'Nunito-SemiBold',
  },
});
