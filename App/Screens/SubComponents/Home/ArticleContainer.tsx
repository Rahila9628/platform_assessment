import React, { useContext } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { AssetImage, CustomText, NetworkImage } from '@CommonComponent';
import { getSize, getWidth } from '@Utils/Helper';
import { AppContext } from '@AppContext';
import CommonStyle from '@Theme/CommonStyle';
import AppImages from '@Theme/AppImages';
import { fonts } from '@Utils/Constant';

interface CustomProps {
  item: { title: string; image: string };
  onPress?: () => void;
}

const ArticleContainer = (props: CustomProps) => {
  const { appTheme } = useContext(AppContext);
  const { item, onPress } = props;

  return (
    <Pressable
      style={[styles.container, { backgroundColor: appTheme.white }]}
      onPress={() => (onPress && onPress()) || null}>
      <NetworkImage
        source={item?.image}
        imageStyle={[getSize(100), getWidth(200), styles.imageStyles]}
      />

      <View
        style={[
          CommonStyle.row,
          CommonStyle.justifyBetween,
          styles.dataContainer,
          { backgroundColor: 'transparent' },
        ]}>
        <View style={CommonStyle.flex1}>
          <CustomText size={15} font={fonts.Medium}>
            {item?.title}
          </CustomText>
        </View>

        <View style={{ justifyContent: 'flex-end' }}>
          <AssetImage
            source={AppImages.next}
            imageStyle={[getSize(22), { transform: [{ rotate: '-25deg' }] }]}
          />
        </View>
      </View>
    </Pressable>
  );
};

export { ArticleContainer };

const styles = StyleSheet.create({
  container: {
    height: 160,
    width: 200,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageStyles: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  dataContainer: {
    paddingLeft: 15,
    paddingRight: 10,
    paddingVertical: 7,
  },
});
