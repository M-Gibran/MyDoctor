import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyDoctor2} from '../../../assets/dummy';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';

const ListDoctor = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor2} style={styles.avatar} />
      <View>
        <Text style={styles.name}>Alexander Jannie</Text>
        <Text style={styles.desc}>
          Baik ibu, terima kasih banyak atas wakt...
        </Text>
      </View>
    </View>
  );
};

export default ListDoctor;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
  },
  avatar: {height: 46, width: 46, borderRadius: 46 / 2, marginRight: 12},
  name: {
    fontFamily: fonts.primary.normal,
    fontSize: 16,
    color: colors.text.primary,
  },
  desc: {
    fontFamily: fonts.primary[300],
    fontSize: 12,
    color: colors.text.secondary,
  },
});
