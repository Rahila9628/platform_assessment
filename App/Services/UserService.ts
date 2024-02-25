import { ApiConfig } from '@ApiConfig';
import { getItemFromStorage } from '@Utils/Storage';
import { Authentication } from '@Utils/Enums';

export const isLoggedIn = () => {
  const token = getItemFromStorage(Authentication.TOKEN);
  if (!token) {
    return false;
  }
  ApiConfig.token = token;
  return true;
};
