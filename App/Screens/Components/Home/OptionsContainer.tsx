import React, { useContext } from 'react';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { AssetImage, CustomText, Layout } from '@CommonComponent';
import AppImages from '@Theme/AppImages';
import CommonStyle from '@Theme/CommonStyle';
import { getSize } from '@Utils/Helper';
import { AppContext } from '@AppContext';
import { fonts, optionsData } from '@Utils/Constant';

interface CustomProps {
  onClose: () => void;
  onPressItem?: (item: { id: number; title: string; image: string }) => void;
}

const OptionsContainer = (props: CustomProps) => {
  const { appTheme } = useContext(AppContext);
  const { onClose, onPressItem } = props;

  //   Methdos
  const renderItem = ({
    item,
  }: {
    item: { id: number; title: string; image: string };
  }) => {
    return (
      <Pressable
        onPress={() => (onPressItem && onPressItem(item)) || null}
        style={[
          styles.itemContainer,
          { backgroundColor: appTheme.bokaraGray },
        ]}>
        <CustomText large color={appTheme.white} font={fonts.Medium}>
          {item?.title}
        </CustomText>

        <AssetImage
          source={item?.image}
          imageStyle={[getSize(25), { tintColor: appTheme.white }]}
          resizeMode="contain"
        />
      </Pressable>
    );
  };

  const itemSeparator = () => {
    return <View style={[getSize(12)]} />;
  };

  return (
    <Layout backgroundColor="transparent">
      <FlatList
        data={optionsData}
        renderItem={renderItem}
        ItemSeparatorComponent={itemSeparator}
        contentContainerStyle={[CommonStyle.flex1, CommonStyle.justifyCenter]}
      />

      <Pressable
        style={[
          styles.closeContainer,
          { backgroundColor: appTheme.bokaraGray },
        ]}
        onPress={onClose}>
        <AssetImage
          source={AppImages.icClose}
          imageStyle={[getSize(20), { tintColor: appTheme.white }]}
        />
      </Pressable>
    </Layout>
  );
};

export default OptionsContainer;

const styles = StyleSheet.create({
  closeContainer: {
    padding: 15,
    borderRadius: 7,
    alignSelf: 'center',
    marginBottom: 20,
  },
  itemContainer: {
    height: 50,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    paddingLeft: 20,
    paddingRight: 15,
    borderRadius: 7,
  },
});
