/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { CustomText, Layout } from '@CommonComponent';
import { ButtonComponent } from '@SubComponents';
import { useIsFocused } from '@react-navigation/native';
import { AppContext } from '@AppContext';

const Home = () => {
  const { appTheme } = useContext(AppContext);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
    }
  }, [isFocused]);

  return (
    <Layout title="Widgets" padding={20}>
      <CustomText large>Home screen</CustomText>
      <ButtonComponent
        onPress={() => {}}
        backColor={appTheme.themeColor}
        title="Show Modal"
        borderRadius={10}
      />
    </Layout>
  );
};

export default Home;
