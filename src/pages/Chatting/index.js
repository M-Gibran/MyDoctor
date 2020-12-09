import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ChatItem, Header, InputChat} from '../../components';
import {colors, fonts} from '../../utils';

const Chatting = ({navigation, route}) => {
  const {photo, fullName, profession} = route.params.data;
  return (
    <View style={styles.page}>
      <Header
        type="dark-profile"
        fullName={fullName}
        photo={{uri: photo}}
        profession={profession}
        onPress={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.chatDate}>Senin, 21 Maret, 2020</Text>
          <ChatItem isMe />
          <ChatItem />
          <ChatItem isMe />
        </View>
      </ScrollView>
      <InputChat
        value={'haloo'}
        onChangeText={(value) => alert(value)}
        onButtonPress={() => alert('test')}
      />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    textAlign: 'center',
    marginVertical: 11,
  },
  content: {
    flex: 1,
  },
});
