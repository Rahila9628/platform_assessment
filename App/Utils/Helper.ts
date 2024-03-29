/* eslint-disable no-useless-escape */
import { CommonActions } from '@react-navigation/native';
import DeviceInfo from 'react-native-device-info';
import { AxiosHeaders } from 'axios';
import { ApiConfig } from '@ApiConfig';
import { getItemFromStorage, removeStoreItem } from '@Utils/Storage';
import { Authentication } from '@Utils/Enums';
import { Route } from '@Routes/AppRoutes';

export const isValidPhoneNo = (phoneNo: string) => {
  const phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  return phoneNumberPattern.test(phoneNo);
};

export const getVersionName = () => {
  const buildNumber = DeviceInfo.getBuildNumber();
  const versionName = DeviceInfo.getVersion();
  return `v${versionName} (${buildNumber})`;
};

export const isValidEmail = (email: string) => {
  const format =
    /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return format.test(email);
};

export const isValidUserName = (email: string) => {
  const format = /^\w{5,}$/;
  return format.test(email);
};

export const isEmpty = (text: string) => {
  return text.toString().trim().length > 0 && text.toString().trim() !== '0';
};

export const configureUrl = (url: string) => {
  let authUrl = url;
  if (url?.endsWith('/')) {
    authUrl = url.substring(0, url.length - 1);
  }
  return authUrl;
};


export const getErrorMessage = (error: any) => {
  if (error?.response?.data) {
    if (error.response.data.errors) {
      return error.response.data.errors.join('\n');
    }
    if (error.response.data.message) {
      return error.response.data.message;
    }
  }
  if (error?.message) {
    return error.message;
  }
  return 'Something went wrong!';
};

export const getSize = (size: number) => {
  return {
    height: size,
    width: size,
  };
};

export const getWidth = (size: number | string | any) => {
  return {
    width: size,
  };
};

export const getRound = (size: number) => {
  return {
    height: size,
    width: size,
    borderRadius: size,
  };
};

export const getPaddingHorizontal = (size: number) => {
  return {
    paddingHorizontal: size,
  };
};

export const getPaddingVertical = (size: number) => {
  return {
    paddingVertical: size,
  };
};

export const getBorderRadius = (size: number) => {
  return {
    borderRadius: size,
  };
};

export const getMarginHorizontal = (size: number) => {
  return {
    marginHorizontal: size,
  };
};

export const getMarginVertical = (size: number) => {
  return {
    marginVertical: size,
  };
};


export const navigateToNextScreen = (
  navigation: any,
  params: { name: string; params?: any },
) => navigation.navigate(params);

export const goToNextScreen = async (navigation: any, nextScreen: string) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: nextScreen }],
    }),
  );
};

export const getHeaders = () => {
  let token: string | null = ApiConfig.token;
  if (!token) {
    token = getItemFromStorage(Authentication.TOKEN);
  }
  const headers = new AxiosHeaders();

  headers.set('Authorization', `Bearer ${token}`);
  headers.set('Content-Type', 'application/json');
  headers.set('Accept', 'application/json');
  return headers;
};

export const onLogout = (navigation: any) => {
  goToNextScreen(navigation, Route.HomeScreen);
  removeStoreItem(Authentication.TOKEN);
};

export const getDayGreetings = () => {
  const currentHour = new Date().getHours();
  let dayGreetings = '';

  if (currentHour < 12) {
    dayGreetings = 'Good morning!';
  } else if (currentHour < 18) {
    dayGreetings = 'Good afternoon!';
  } else {
    dayGreetings = 'Good evening!';
  }

  return dayGreetings
}