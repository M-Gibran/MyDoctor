import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const Link = ({txt, align, size}) => {
  return (
    <View>
      <Text style={styles.desc(size, align)}>{txt}</Text>
    </View>
  );
};

export default Link;

const styles = StyleSheet.create({
  desc: (size, align) => ({
    fontFamily: fonts.primary.normal,
    textDecorationLine: 'underline',
    marginTop: 10,
    fontSize: size,
    textAlign: align,
    color: colors.text.secondary,
  }),
});
