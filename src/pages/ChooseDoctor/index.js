import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  DummyDoctor10,
  DummyDoctor11,
  DummyDoctor7,
  DummyDoctor8,
  DummyDoctor9,
} from '../../assets';
import {Header, List} from '../../components';
import {colors} from '../../utils';

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Pilih Dokter Anak"
        type="dark"
        icon="back-light"
        onPress={() => navigation.goBack()}
      />
      <List
        type="next"
        profile={DummyDoctor8}
        name="Alexander Got"
        desc="Wanita"
        onPress={() => navigation.navigate('Chatting')}
      />
      <List
        type="next"
        profile={DummyDoctor9}
        name="Alexander Got"
        desc="Wanita"
      />
      <List
        type="next"
        profile={DummyDoctor10}
        name="Alexander Got"
        desc="Wanita"
      />
      <List
        type="next"
        profile={DummyDoctor11}
        name="Alexander Got"
        desc="Wanita"
      />
      <List
        type="next"
        profile={DummyDoctor7}
        name="Alexander Got"
        desc="Wanita"
      />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
});
