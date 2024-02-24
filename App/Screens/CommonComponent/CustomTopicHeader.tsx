import React, { useContext } from 'react';
import { Pressable, StyleProp, View, ViewStyle } from 'react-native';
import CommonStyle from '@Theme/CommonStyle';
import { getPaddingHorizontal, getSize } from '@Utils/Helper';
import { AssetImage, CustomText } from '@CommonComponent';
import { AppContext } from '@AppContext';
import { fonts } from '@Utils/Constant';
import AppImages from '@Theme/AppImages';

interface CustomProps {
  title: string;
  isRightText?: boolean;
  rightText?: string;
  onRightPress?: () => void;
  containerStyles?: StyleProp<ViewStyle>;
  leftImage?: string;
}

const CustomTopicHeader = (props: CustomProps) => {
  const { appTheme } = useContext(AppContext);
  const {
    title,
    rightText,
    onRightPress,
    isRightText = true,
    containerStyles,
    leftImage = AppImages?.communication,
  } = props;

  return (
    <View
      style={[
        CommonStyle.row,
        CommonStyle.justifyBetween,
        CommonStyle.alignCenter,
        getPaddingHorizontal(15),
        containerStyles,
      ]}>
      <AssetImage source={leftImage} imageStyle={[getSize(25)]} />

      <View style={getSize(10)} />
      <View style={CommonStyle.flex1}>
        <CustomText size={20} font={fonts.SemiBold} numberOfLines={1}>
          {`${title}`}
        </CustomText>
      </View>

      <View style={getSize(15)} />
      {(isRightText && (
        <Pressable onPress={() => (onRightPress && onRightPress()) || null}>
          <CustomText large color={appTheme.gray} font={fonts.SemiBold}>
            {rightText || 'See all'}
          </CustomText>
        </Pressable>
      )) || <></>}
    </View>
  );
};

export { CustomTopicHeader };
