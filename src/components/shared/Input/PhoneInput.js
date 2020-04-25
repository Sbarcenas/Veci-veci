import React from 'react';
import {colors} from '../../../utils/theme';
import {View} from 'react-native';
import {Input, CountryPicker} from '../index';

function PhoneInput(props) {
  const {
    countryCode,
    onSelect,
    onChangeText,
    value,
    style,
    placeholder,
  } = props;
  return (
    <View
      style={[
        {
          borderWidth: 1,
          borderRadius: 7,
          borderColor: colors.borderGray,
          maxHeight: 37,
          flex: 1,
          flexDirection: 'row',
        },
        style,
      ]}>
      <CountryPicker countryCode={countryCode} onSelect={onSelect} />
      <View style={{flex: 1, alignSelf: 'center', marginLeft: 5}}>
        <Input
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder || 'Escribe tu número'}
          keyboardType="phone-pad"
          style={{height: 50, letterSpacing: 2.5, fontSize: 15}}
        />
      </View>
    </View>
  );
}

export default PhoneInput;
