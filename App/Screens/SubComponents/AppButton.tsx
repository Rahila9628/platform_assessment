import React, { useContext } from 'react';
import {
  StyleSheet,
  Pressable,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CommonStyle from '@Theme/CommonStyle';
import { AssetImage, CustomText } from '@CommonComponent';
import { AppContext } from '@AppContext';
import { fonts } from '@Utils/Constant';
import AppImages from '@Theme/AppImages';
import { getSize } from '@Utils/Helper';

const styles = StyleSheet.create({
  gradientBtn: {
    height: 56,
    paddingHorizontal: 25,
    minWidth: 100,
    borderWidth: 1,
    ...CommonStyle.center,
  },
  alignSelf: {
    alignSelf: 'center',
  },
  marginVertical: { marginVertical: 5 },
});

interface GradientButtonProps {
  title: string | JSX.Element;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  isProcessing?: boolean;
  textOnly?: boolean;
  backColor?: string;
  colors?: (string | number)[];
  isGradient?: boolean;
  textColor?: string;
  borderRadius?: number;
  border?: string;
  outerStyle?: StyleProp<ViewStyle>;
}
const ButtonComponent = (props: GradientButtonProps) => {
  const {
    title,
    onPress,
    style,
    isProcessing = false,
    textOnly = false,
    backColor,
    colors,
    textColor,
    borderRadius = 10,
    border,
    outerStyle,
    isGradient = false,
  } = props;
  const { appTheme } = useContext(AppContext);
  const { gradientBtn, alignSelf, marginVertical } = styles;
  return (
    <Pressable
      onPress={() => onPress()}
      disabled={isProcessing}
      style={[marginVertical, outerStyle]}
      android_ripple={CommonStyle.androidRipple}>
      <LinearGradient
        colors={
          (!isGradient &&
            ((backColor && [backColor, backColor]) || [
              appTheme.themeColor,
              appTheme.themeColor,
            ])) ||
          (colors && colors) ||
          appTheme.gradient
        }
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[
          alignSelf,
          gradientBtn,
          {
            opacity: (isProcessing && 0.6) || 1,
            borderRadius: borderRadius,
            borderColor: border ?? appTheme.transparent,
          },
          CommonStyle.overFlowHidden,
          style,
        ]}>
        {((!isProcessing || textOnly) && (
          <View style={[CommonStyle.row, CommonStyle.alignCenter]}>
            <CustomText
              xlarge
              font={fonts.SemiBold}
              style={[{ color: textColor ?? appTheme.tint }]}>
              {title}
            </CustomText>

            <View style={getSize(15)} />
            <AssetImage
              source={AppImages.magic}
              imageStyle={[getSize(25), { tintColor: appTheme.white }]}
            />
          </View>
        )) || <ActivityIndicator color={appTheme.tint} />}
      </LinearGradient>
    </Pressable>
  );
};

export { ButtonComponent };
