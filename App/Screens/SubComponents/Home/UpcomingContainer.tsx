import React, { useContext } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { AssetImage, CustomText } from '@CommonComponent';
import { getPaddingHorizontal, getSize } from '@Utils/Helper';
import CommonStyle from '@Theme/CommonStyle';
import AppImages from '@Theme/AppImages';
import { AppContext } from '@AppContext';
import { fonts } from '@Utils/Constant';

interface CustomProps {
  title?: string;
  time?: string;
  location?: string;
  containerStyles?: StyleProp<ViewStyle>;
}

const UpcomingContainer = (props: CustomProps) => {
  const { appTheme } = useContext(AppContext);
  const {
    title = 'Meeting title',
    time = '1:00 PM - 3:00 PM',
    location = 'MR_04',
    containerStyles,
  } = props;

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: appTheme.white },
        containerStyles,
      ]}>
      <CustomText
        xlarge
        color={appTheme.themeColor}
        font={fonts.SemiBold}
        style={getPaddingHorizontal(10)}>
        {'Upcoming'}
      </CustomText>

      <View style={[styles.upcomingData, { borderColor: appTheme.border }]}>
        <View>
          <CustomText large color={appTheme.davyGray}>
            {title}
          </CustomText>

          <View style={getSize(7)} />
          <View style={[CommonStyle.row]}>
            <CustomText color={appTheme.gray}>{time}</CustomText>

            <View style={getSize(20)} />
            <AssetImage
              source={AppImages.location}
              imageStyle={[getSize(17)]}
              resizeMode="contain"
            />
            <View style={getSize(3)} />
            <CustomText color={appTheme.gray}>{location}</CustomText>
          </View>
        </View>

        <AssetImage
          source={AppImages.next}
          imageStyle={[getSize(30), { transform: [{ rotate: '-25deg' }] }]}
        />
      </View>
    </View>
  );
};

export { UpcomingContainer };

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 20,
    borderRadius: 5,
  },
  upcomingData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 7,
    paddingLeft: 15,
    paddingRight: 7,
    paddingVertical: 10,
  },
});
