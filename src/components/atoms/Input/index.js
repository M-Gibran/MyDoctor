import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Gap from '../Gap';

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
    color: '#7D8797',
    fontFamily: 'Nunito-Light',
    marginBottom: 6,
  },
  input: {borderWidth: 1, borderColor: '#E9E9E9', borderRadius: 10},
});
