import React from 'react';
import {colors, fonts} from '../../../utils/theme';
import {TextInput} from 'react-native';

function Input(props) {
  const {style} = props;
  return (
    <TextInput
      {...props}
      placeholderTextColor={colors.boldGray}
      style={[
        {
          color: colors.boldGray,
          fontFamily: fonts.basic.fontFamily,
          fontSize: 14,
          marginLeft: 10,
        },
        style,
      ]}
    />
  );
}

export default Input;
