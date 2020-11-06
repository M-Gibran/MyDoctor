import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {ICBackDark} from '../../../assets';

const IconOnly = ({onPress, icon}) => {
  const Icon = () => {
    if (icon === 'back-dark') {
      return <ICBackDark />;
    }
    if (icon === 'back-light') {
      return <ICBackDark />;
    }
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;
