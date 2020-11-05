import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

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
    fontFamily: 'Nunito-Reguler',
    textDecorationLine: 'underline',
    marginTop: 10,
    fontSize: size,
    textAlign: align,
  }),
});
