import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {colors, fonts} from '../../../utils';

const Input = ({text, value, onChangeText, secureTextEntry}) => {
  const [border, SetBorder] = useState(colors.border);
  const onFocusFrom = () => {
    SetBorder(colors.tertiary);
  };
  const onBlurForm = () => {
    SetBorder(colors.border);
  };
  return (
    <View>
      <Text style={styles.desc}>{text}</Text>
      <TextInput
        onFocus={onFocusFrom}
        onBlur={onBlurForm}
        style={styles.input(border)}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
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
  input: (border) => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
    padding: 12,
  }),
});
