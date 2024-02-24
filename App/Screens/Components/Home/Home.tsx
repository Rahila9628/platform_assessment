/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur';
import {
  CustomHeader,
  CustomText,
  CustomTopicHeader,
  Layout,
  NetworkImage,
} from '@CommonComponent';
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

  // return (
  //   <View
  //     style={[
  //       CommonStyle.flex1,
  //       CommonStyle.center,
  //       { backgroundColor: appTheme.white },
  //     ]}>
  //     <NetworkImage source={'https://i.postimg.cc/25LGVS47/reminder-2.png'} />
  //     <CustomText color="black">Assessment</CustomText>
  //   </View>
  // );

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
          onPress={() => setIsOptionsOpen(true)}
          style={[styles.buttonStyle]}
          isGradient={true}
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
    paddingBottom: 20,
  },
  buttonStyle: {
    ...getWidth(width - 40),
    ...getMarginHorizontal(20),
    marginTop: 5,
  },
});
