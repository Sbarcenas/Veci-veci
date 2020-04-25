import React from 'react';
import {Platform, View} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import {DEFAULT_ICON_SIZE} from 'react-native-vector-icons/lib/create-icon-set';
import Icons from 'react-native-vector-icons/FontAwesome';
import {colors, fonts} from '../../../utils/theme';
import {getHeightPercent} from 'react-native-country-picker-modal/lib/ratio';

const APPARTA_THEME = {
  primaryColor: '#ccc',
  primaryColorVariant: '#eee',
  backgroundColor: '#ffffff',
  onBackgroundTextColor: colors.mainOrange,
  fontSize: 16,
  width: 10,
  fontFamily: fonts.basic.fontFamily,
  filterPlaceholderTextColor: '#aaa',
  activeOpacity: 0.5,
  itemHeight: getHeightPercent(7),
  flagSize: Platform.select({android: 20, default: 30}),
  flagSizeButton: Platform.select({android: 20, default: 30}),
};

function Index(props) {
  const {countryCode, onSelect} = props;
  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 10,
      }}>
      <View
        style={{
          height: 30,
          position: 'absolute',
          justifyContent: 'center',
          width: '100%',
        }}>
        <CountryPicker
          {...{
            open: false,
            withFlag: true,
            withCallingCodeButton: true,
            countryCode,
            withFilter: true,
            withAlphaFilter: true,
            withCallingCode: true,
            withEmoji: true,
            withFlagButton: false,
            visible: false,
            icon: DEFAULT_ICON_SIZE,
          }}
          onSelect={onSelect}
          theme={APPARTA_THEME}
          containerButtonStyle={{width: '120%'}}
          visible={false}
        />
      </View>
      <View
        style={{
          height: 30,
          width: 10,
          marginLeft: 45,
          justifyContent: 'center',
        }}>
        <Icons name="angle-down" size={15} color={colors.mainOrange} />
      </View>
    </View>
  );
}

export default Index;
