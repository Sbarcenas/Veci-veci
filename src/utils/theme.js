import {createIconSetFromFontello} from 'react-native-vector-icons/index';
import fontelloConfig from '../assets/fonts/appartaIcons/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);

export const colors = {
  mainBlue: '#2DCEF8',
  mainOrange: '#FD5D56',
  lightGray: '#9D9D9D',
  boldGray: '#5F5F5F',
  white: '#FFFFFF',
  boldPurple: '#381C61',
  gold: '#FEB32A',
  borderGray: 'rgba(112,112,112,0.35)',
};
export const fonts = {
  basic: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: colors.boldGray,
  },
  semiBold: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: colors.boldGray,
  },
  basicTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: colors.boldGray,
  },
  italicError: {
    fontFamily: 'Poppins-Italic',
    fontSize: 10,
    color: colors.mainOrange,
  },
  orangeBasic: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: colors.mainOrange,
  },
  footerImage: {
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
    color: colors.boldPurple,
  },
  basicPurple: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: colors.boldPurple,
  },
  BoldTittle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: colors.boldGray,
  },
};

export const icon_fonts = {
  Apparta: Icon,
};

export const buttons = {};
