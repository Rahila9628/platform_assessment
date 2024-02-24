import React, { useContext } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { AssetImage, CustomText } from '@CommonComponent';
import AppImages from '@Theme/AppImages';
import CommonStyle from '@Theme/CommonStyle';
import {
  getBorderRadius,
  getPaddingHorizontal,
  getPaddingVertical,
  getSize,
} from '@Utils/Helper';
import { fonts } from '@Utils/Constant';
import { AppContext } from '@AppContext';

interface CustomProps {
  item: { notification: string };
  onPress?: () => void;
}

const NotificationContainer = (props: CustomProps) => {
  const { appTheme } = useContext(AppContext);
  const { item, onPress } = props;

  return (
    <Pressable
      onPress={() => (onPress && onPress()) || null}
      style={[styles.container, { backgroundColor: appTheme.white }]}>
      <View
        style={[
          CommonStyle.row,
          CommonStyle.alignCenter,
          getPaddingVertical(10),
          getPaddingHorizontal(10),
          getBorderRadius(7),
          { backgroundColor: 'white' },
        ]}>
        <View style={[CommonStyle.flex1]}>
          <CustomText font={fonts.Medium}>{item?.notification}</CustomText>
        </View>

        <View style={getSize(20)} />
        <View style={[styles.imageContainer, { backgroundColor: '#E6EAF1' }]}>
          <AssetImage source={AppImages.message} imageStyle={getSize(20)} />
        </View>
      </View>
    </Pressable>
  );
};

export { NotificationContainer };

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    ...getSize(40),
    ...CommonStyle.center,
    borderRadius: 5,
  },
});
