import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {colors, fonts} from '../../../utils';

const Input = ({text}) => {
  return (
    <View>
      <Text style={styles.desc}>{text}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  desc: {
    fontSize: 16,
    color: colors.text.secondary,
    fontFamily: fonts.primary.normal,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 12,
  },
});
