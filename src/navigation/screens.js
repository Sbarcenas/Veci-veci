import {
  Account,
  Favorites,
  Find,
  Geo,
  Home,
  Intro,
  MailLogin,
  PhoneLogin,
  SendMessage,
  Side,
  VerificationCode,
} from '../screens';
import {Toast} from '../components/shared';

export const TOAST_SCREEN = {name: 'apparta.toast', screen: Toast};
export const PHONE_LOGIN_SCREEN = {
  name: 'apparta.phoneLogin',
  screen: PhoneLogin,
};
export const HOME_SCREEN = {name: 'apparta.home', screen: Home};
export const GEO_SCREEN = {name: 'apparta.geo', screen: Geo};
export const FAVORITES_SCREEN = {name: 'apparta.favorites', screen: Favorites};
export const FIND_SCREEN = {name: 'apparta.find', screen: Find};
export const SEND_MESSAGE_SCREEN = {
  name: 'apparta.sendMessage',
  screen: SendMessage,
};
export const SIDE_SCREEN = {name: 'apparta.side', screen: Side};
export const VERIFICATION_CODE_SCREEN = {
  name: 'apparta.verficationCode',
  screen: VerificationCode,
};
export const MAIL_LOGIN = {name: 'apparta.emailLogin', screen: MailLogin};
export const ACCOUNT_SCREEN = {name: 'apparta.account', screen: Account};
export const INTRO_SCREEN = {name: 'apparta.intro', screen: Intro};
