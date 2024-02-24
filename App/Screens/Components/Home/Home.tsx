/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { CustomHeader, CustomTopicHeader, Layout } from '@CommonComponent';
import { AppContext } from '@AppContext';
import {
  ArticleContainer,
  ButtonComponent,
  NotificationContainer,
  TopContainer,
  UpcomingContainer,
} from '@SubComponents';
import {
  getBorderRadius,
  getMarginHorizontal,
  getPaddingHorizontal,
  getPaddingVertical,
  getSize,
  getWidth,
} from '@Utils/Helper';
import CommonStyle from '@Theme/CommonStyle';
import AppImages from '@Theme/AppImages';
import { width } from '@Utils/Constant';

const Home = () => {
  const { appTheme } = useContext(AppContext);
  const articles = [
    {
      title: 'How to speed up your productivity',
      image:
        'https://i.postimg.cc/pXzg175r/360-F-284529974-4g-Qd-Vf3p-Gjh-WEd-S5-Fmla-Rdmfs-Xcwaa3-U.jpg',
    },
    {
      title: 'next holidays announced',
      image:
        'https://i.postimg.cc/6p6YL1dD/continental-breakfast-coffee-orange-juice-600nw-184835783.webp',
    },
  ];

  const notifications = [
    {
      notification: 'You have 3 new messages from R. Carlos',
    },
    {
      notification: 'John sent an image',
    },
    {
      notification: 'Jane shared a video with you',
    },
  ];

  // Methods
  const renderArticle = ({ item }: { item: any }) => {
    return <ArticleContainer item={item} />;
  };

  const articleSeparator = () => {
    return <View style={[getSize(15)]} />;
  };

  const renderNotification = ({ item }: { item: any }) => {
    return <NotificationContainer item={item} />;
  };

  return (
    <Layout scrollContainer={getPaddingVertical(20)}>
      <CustomHeader
        name="Jason"
        notificationCount={'90'}
        containerStyles={[getPaddingHorizontal(20), CommonStyle.marginVertical]}
      />

      <ScrollView
        contentContainerStyle={[styles.container]}
        keyboardShouldPersistTaps={'handled'}
        showsVerticalScrollIndicator={false}
        bounces={true}>
        <TopContainer
          title="Drink some water with"
          keyword="lemon"
          containerStyles={getMarginHorizontal(20)}
        />
        <UpcomingContainer containerStyles={getMarginHorizontal(20)} />

        <CustomTopicHeader
          title={'Articles'}
          containerStyles={[CommonStyle.marginTop, getPaddingHorizontal(20)]}
        />

        <View>
          <FlatList
            data={articles}
            renderItem={renderArticle}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={[
              CommonStyle.marginTop,
              getPaddingHorizontal(20),
              { height: 190 },
            ]}
            ItemSeparatorComponent={articleSeparator}
          />
        </View>

        <CustomTopicHeader
          title={'Microsoft teams'}
          leftImage={AppImages.teams}
          containerStyles={[getPaddingHorizontal(20)]}
        />

        <FlatList
          data={notifications}
          scrollEnabled={false}
          renderItem={renderNotification}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            CommonStyle.marginTop,
            getPaddingHorizontal(15),
            getPaddingVertical(15),
            getMarginHorizontal(20),
            getBorderRadius(7),
            { backgroundColor: appTheme.white },
          ]}
          ItemSeparatorComponent={articleSeparator}
        />
      </ScrollView>

      <ButtonComponent
        title={'I want to'}
        onPress={() => {}}
        style={[styles.buttonStyle]}
        isGradient={true}
      />
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  buttonStyle: {
    ...getWidth(width - 40),
    ...getMarginHorizontal(20),
    marginTop: 5,
  },
});
