import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {List} from '../../components';
import {Firebase} from '../../config';
import {getData} from '../../utils';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';

const Message = ({navigation}) => {
  const [user, SetUser] = useState([]);
  const [lastChat, SetLastChat] = useState([]);

  useEffect(() => {
    getDataUser();

    const rootDB = Firebase.database().ref();
    const urlHistory = `messages/${user.uid}/`;
    const messagesDB = rootDB.child(urlHistory);

    messagesDB.on('value', async (snaphot) => {
      if (snaphot.val()) {
        const oldData = snaphot.val();
        const data = [];

        const promise = await Object.keys(oldData).map(async (key) => {
          const urlUidDoctor = `doctors/${oldData[key].uidPartner}`;
          const detailDoctor = await rootDB.child(urlUidDoctor).once('value');

          data.push({
            id: key,
            detailDoctor: detailDoctor.val(),
            ...oldData[key],
          });
        });
        await Promise.all(promise);
        SetLastChat(data);
      }
    });
  }, [user.uid]);

  const getDataUser = () => {
    getData('user').then((res) => {
      SetUser(res);
    });
  };

  console.log('ini last chat', lastChat);

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Message</Text>
        {lastChat.map((doctor) => {
          const dataDoctor = {
            id: doctor.detailDoctor.uid,
            data: doctor.detailDoctor,
          };
          return (
            <List
              key={doctor.id}
              profile={{uri: doctor.detailDoctor.photo}}
              name={doctor.detailDoctor.fullName}
              desc={doctor.lastContentChat}
              onPress={() => navigation.navigate('Chatting', dataDoctor)}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.secondary, flex: 1},
  content: {
    backgroundColor: colors.white,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
