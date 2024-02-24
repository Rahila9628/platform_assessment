import React, { useContext } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { AssetImage, CustomText } from '@CommonComponent';
import AppImages from '@Theme/AppImages';
import { getDayGreetings, getMarginHorizontal, getSize } from '@Utils/Helper';
import { AppContext } from '@AppContext';
import CommonStyle from '@Theme/CommonStyle';
import { fonts } from '@Utils/Constant';

interface CustomProps {
  greetings?: string;
  name: string;
  notificationCount: string;
  containerStyles?: StyleProp<ViewStyle>;
}

const CustomHeader = (props: CustomProps) => {
  const { appTheme } = useContext(AppContext);
  const { greetings = '', name, notificationCount, containerStyles } = props;

  return (
    <View style={[CommonStyle.row, CommonStyle.alignCenter, containerStyles]}>
      <View
        style={[
          styles.menuImgContainer,
          { backgroundColor: appTheme.bokaraGray },
        ]}>
        <AssetImage
          source={AppImages.more}
          imageStyle={[getSize(30), { tintColor: appTheme.white }]}
        />
      </View>

      <View
        style={[
          CommonStyle.flex1,
          getMarginHorizontal(10),
          CommonStyle.justifyBetween,
        ]}>
        <CustomText size={22} font={fonts.SemiBold}>
          {greetings || getDayGreetings()}
        </CustomText>

        <View style={getSize(3)} />
        <CustomText size={22} font={fonts.SemiBold}>
          {name}
        </CustomText>
      </View>

      <View
        style={[styles.rightContainer, { backgroundColor: appTheme.white }]}>
        <AssetImage source={AppImages.bell} imageStyle={[getSize(30)]} />

        {parseInt(notificationCount, 10) > 0 && (
          <View
            style={[
              styles.batchContainer,
              { backgroundColor: appTheme.bokaraGray },
            ]}>
            <CustomText color={appTheme.white}>{notificationCount}</CustomText>
          </View>
        )}
      </View>
    </View>
  );
};

export { CustomHeader };

const styles = StyleSheet.create({
  menuImgContainer: {
    padding: 12,
    borderRadius: 10,
  },
  rightContainer: {
    paddingHorizontal: 7,
    paddingVertical: 7,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
  },
  batchContainer: {
    paddingHorizontal: 7,
    paddingVertical: 1,
    borderRadius: 10,
    marginLeft: 3,
  },
});
