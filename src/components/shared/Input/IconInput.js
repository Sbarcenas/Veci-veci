import React from 'react';
import {colors} from '../../../utils/theme';
import {Input} from '../index';
import {View} from 'react-native';

function IconInput(props) {
  const {Icon, inputStyle, style} = props;
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
      {Icon}
      <View style={{flex: 1, alignSelf: 'center'}}>
        <Input
          {...props}
          style={[{height: 50, marginLeft: 0, fontSize: 15}, inputStyle]}
        />
      </View>
    </View>
  );
}

export default IconInput;
