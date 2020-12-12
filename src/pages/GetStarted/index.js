import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ILlogo, ILGetStarted} from '../../assets';
import {Button, Gap} from '../../components';
import {colors, fonts} from '../../utils';

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
  pages: {
    padding: 40,
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    marginTop: 91,
    fontSize: 28,
    lineHeight: 34,
    color: colors.white,
    fontFamily: fonts.primary[600],
  },
});
