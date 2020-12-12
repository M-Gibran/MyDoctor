import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  DoctorCategory,
  Gap,
  HomeProfile,
  NewsItem,
  RatedDoctor,
} from '../../components';
import {colors, fonts, showError} from '../../utils';
import {Firebase} from '../../config';

const Doctor = ({navigation}) => {
  const [categoryDoctor, SetCategoryDoctor] = useState([]);
  const [news, SetNews] = useState([]);
  const [topRatedDoctor, SetTopRatedDoctor] = useState([]);

  useEffect(() => {
    getCategoryDoctor();
    getTopRatedDoctors();
    getNews();
  }, []);

  const getTopRatedDoctors = () => {
    Firebase.database()
      .ref('doctors/')
      .orderByChild('rate')
      .limitToLast(3)
      .once('value')
      .then((res) => {
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map((key) => {
            data.push({
              id: key,
              data: oldData[key],
            });
          });
          SetTopRatedDoctor(data);
        }
      })
      .catch((err) => {
        showError(err.message);
      });
  };

  const getCategoryDoctor = () => {
    Firebase.database()
      .ref('category_doctor/')
      .once('value')
      .then((res) => {
        if (res.val()) {
          const data = res.val();
          const filteredData = data.filter((el) => el !== null);
          SetCategoryDoctor(filteredData);
        }
      })
      .catch((err) => {
        showError(err.message);
      });
  };

  const getNews = () => {
    Firebase.database()
      .ref('news/')
      .once('value')
      .then((res) => {
        if (res.val()) {
          const data = res.val();
          const filteredData = data.filter((el) => el !== null);
          SetNews(filteredData);
        }
      })
      .catch((err) => {
        showError(err.message);
      });
  };

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperSection}>
            <Gap height={30} />
            <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
            <Text style={styles.welcome}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={32} />
                {categoryDoctor.map((item) => {
                  return (
                    <DoctorCategory
                      category={item.category}
                      key={item.id}
                      onPress={() => navigation.navigate('ChooseDoctor', item)}
                    />
                  );
                })}
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel}>Top Rated Doctor</Text>
            {topRatedDoctor.map((item) => {
              return (
                <RatedDoctor
                  key={item.id}
                  name={item.data.fullName}
                  desc={item.data.profession}
                  avatar={item.data.photo}
                  onPress={() => navigation.navigate('DoctorProfile', item)}
                />
              );
            })}
            <Text style={styles.sectionLabel}>Good News</Text>
          </View>
          {news.length > 0
            ? news.map((item) => {
                return (
                  <NewsItem
                    title={item.title}
                    image={item.image}
                    date={item.date}
                    key={item.id}
                  />
                );
              })
            : null}
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  wrapperSection: {paddingHorizontal: 16},
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 203,
  },
  category: {flexDirection: 'row'},
  wrapperScroll: {marginLeft: -16},
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    marginTop: 30,
    marginBottom: 16,
  },
});
