/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import { CustomHeader, Layout } from '@CommonComponent';
import { AppContext } from '@AppContext';
import {} from 'react-native';
import { TopContainer } from '@SubComponents';

const Home = () => {
  const { appTheme } = useContext(AppContext);

  return (
    <Layout padding={20} scrollable>
      <CustomHeader name="Jason" notificationCount={'90'} />

      <TopContainer />
    </Layout>
  );
};

export default Home;

// const styles = StyleSheet.create({
// });
