import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap} from '../../atoms';
import {colors, fonts} from '../../../utils';

const Header = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-dark" onPress={onPress} />
      <Text style={styles.txt}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  txt: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    lineHeight: 27,
    color: colors.text.primary,
    textAlign: 'center',
    flex: 1,
  },
  container: {
    paddingVertical: 30,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
