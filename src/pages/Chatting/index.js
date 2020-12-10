import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {ChatItem, Header, InputChat} from '../../components';
import {Firebase} from '../../config';
import {colors, fonts, getData, showError} from '../../utils';

const Chatting = ({navigation, route}) => {
  const {photo, fullName, profession, uid} = route.params.data;
  const [chatContent, SetChatContent] = useState('');
  const [user, SetUser] = useState();

  useEffect(() => {
    getData('user').then((res) => {
      SetUser(res);
    });
  }, []);

  const ChatSend = () => {
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const years = today.getFullYear();
    const months = today.getMonth() + 1;
    const dates = today.getDate();

    const data = {
      sendBy: user.uid,
      chatDate: new Date(),
      chatTime: `${hours}.${minutes} ${hours > 12 ? 'PM' : 'AM'}`,
      chatContent: chatContent,
    };

    SetChatContent('');
    Firebase.database()
      .ref(`chatting/${user.uid}_${uid}/allChat/${years}-${months}-${dates}`)
      .push(data)
      .then(SetChatContent(''))
      .catch((err) => {
        showError(err.message);
      });
  };

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
        value={chatContent}
        onChangeText={(value) => SetChatContent(value)}
        onButtonPress={() => ChatSend()}
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
