import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap} from '../../atoms';
import {colors, fonts} from '../../../utils';
import DarkPofile from './DarkPofile';

const Header = ({title, onPress, type, fullName, photo, profession}) => {
  if (type === 'dark-profile') {
    return (
      <DarkPofile
        onPress={onPress}
        fullName={fullName}
        photo={photo}
        profession={profession}
      />
    );
  }
  return (
    <View style={styles.container(type)}>
      <Button
        type="icon-only"
        onPress={onPress}
        icon={type === 'dark' ? 'back-light' : 'back-dark'}
      />
      <Text style={styles.txt(type)}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  txt: (type) => ({
    fontFamily: fonts.primary[600],
    fontSize: 20,
    lineHeight: 27,
    color: type === 'dark' ? colors.white : colors.text.primary,
    textAlign: 'center',
    flex: 1,
    textTransform: 'capitalize',
  }),
  container: (type) => ({
    paddingVertical: 30,
    paddingHorizontal: 16,
    backgroundColor: type === 'dark' ? colors.secondary : colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
    borderBottomRightRadius: type === 'dark' ? 20 : 0,
  }),
});
