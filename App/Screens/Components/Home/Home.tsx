/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur';
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
  navigateToNextScreen,
} from '@Utils/Helper';
import CommonStyle from '@Theme/CommonStyle';
import AppImages from '@Theme/AppImages';
import { articles, notifications, width } from '@Utils/Constant';
import OptionsContainer from '@Components/Home/OptionsContainer';
import { Route } from '@Routes/AppRoutes';

const Home = () => {
  const { appTheme } = useContext(AppContext);
  const navigation = useNavigation();

  // States
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  // Methods
  const onPressOption = (item: {
    id: number;
    title: string;
    image: string;
  }) => {
    console.log({ item });
    setIsOptionsOpen(false);
    navigateToNextScreen(navigation, { name: Route.Booking });
  };

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
    <>
      <Layout scrollContainer={getPaddingVertical(20)}>
        <CustomHeader
          name="Jason"
          notificationCount={'90'}
          containerStyles={[
            getPaddingHorizontal(20),
            CommonStyle.marginVertical,
          ]}
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
          onPress={() => {
            setIsOptionsOpen(true);
          }}
          style={[getWidth(width - 40)]}
          isGradient={true}
          outerStyle={styles.btnOuter}
        />
      </Layout>

      {isOptionsOpen && (
        <BlurView
          style={CommonStyle.absoluteView}
          blurType="light"
          blurAmount={15}
          reducedTransparencyFallbackColor="white">
          <OptionsContainer
            onClose={() => setIsOptionsOpen(false)}
            onPressItem={onPressOption}
          />
        </BlurView>
      )}
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginBottom: 20,
    paddingBottom: 80,
  },
  btnOuter: {
    position: 'absolute',
    bottom: 0,
    ...getMarginHorizontal(20),
    marginTop: 5,
  },
});
