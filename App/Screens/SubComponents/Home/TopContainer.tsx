import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { AssetImage, CustomText } from '@CommonComponent';
import { fonts } from '@Utils/Constant';
import AppImages from '@Theme/AppImages';
import { getSize } from '@Utils/Helper';
import CommonStyle from '@Theme/CommonStyle';
import { AppContext } from '@AppContext';

const TopContainer = () => {
  const { appTheme } = useContext(AppContext);

  return (
    <View style={[styles.topContainer, { backgroundColor: appTheme.white }]}>
      <View style={[CommonStyle.flex1, CommonStyle.justifyBetween]}>
        <CustomText
          lineHeight={27}
          children={
            <>
              <CustomText xlarge font={fonts.SemiBold}>
                {'Drink some water with '}
              </CustomText>
              <CustomText
                xlarge
                font={fonts.SemiBold}
                color={appTheme.themeColor}>
                {'lemon'}
              </CustomText>
            </>
          }
        />

        <View style={[CommonStyle.row, CommonStyle.alignCenter]}>
          <CustomText font={fonts.SemiBold} color={appTheme.gray}>
            {'Order now'}
          </CustomText>
          <View style={getSize(5)} />
          <AssetImage source={AppImages.next} imageStyle={[getSize(30)]} />
        </View>
      </View>

      <View style={[styles.h2oContainer, { borderColor: appTheme.text }]}>
        <CustomText
          children={
            <>
              <View>
                <CustomText xlarge font={fonts.SemiBold}>
                  {'H'}
                </CustomText>
              </View>
              <CustomText small font={fonts.SemiBold}>
                {'2'}
              </CustomText>

              <View>
                <CustomText xlarge font={fonts.SemiBold}>
                  {'O'}
                </CustomText>
              </View>
            </>
          }
        />
      </View>

      <AssetImage
        source={AppImages.orange}
        imageStyle={{ tintColor: appTheme.themeColor }}
      />
    </View>
  );
};

export { TopContainer };

const styles = StyleSheet.create({
  topContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    borderRadius: 5,
    flexDirection: 'row',
    height: 130,
  },
  h2oContainer: {
    borderWidth: 2,
    borderRadius: 90,
    ...getSize(55),
    ...CommonStyle.center,
    marginLeft: 20,
    marginTop: 30,
  },
});
