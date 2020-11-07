import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyNews1} from '../../../assets';
import {colors, fonts} from '../../../utils';

const NewsItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Is it safe to stay at home during corona virus?
        </Text>
        <Text style={styles.date}>Today</Text>
      </View>
      <Image source={DummyNews1} style={styles.img} />
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  wrapper: {flex: 1},
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    maxWidth: '90%',
  },
  date: {
    fontFamily: fonts.primary[400],
    fontSize: 12,
    color: colors.text.secondary,
    marginTop: 4,
  },
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 12,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  img: {
    height: 60,
    width: 80,
    borderRadius: 11,
  },
});
