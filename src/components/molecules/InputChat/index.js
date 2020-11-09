import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';

const InputChat = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Tulis Pesan Untuk Nairobi.."
      />
      <Button type="btn-icon-send" title="send" />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  input: {
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    backgroundColor: colors.disable,
    padding: 14,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    maxHeight: 45,
  },
  container: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
