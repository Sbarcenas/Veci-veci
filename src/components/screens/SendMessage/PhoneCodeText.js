import React from 'react';
import {Text, View} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import {colors, fonts} from '../../../utils/theme';

function PhoneCodeText(props) {
  const {text, withIcon} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 55,
        marginHorizontal: 0,
      }}>
      <Text style={[fonts.orangeBasic, {marginLeft: 8, fontSize: 15}]}>
        {text}
      </Text>
      {withIcon && (
        <Icons name="angle-down" size={15} color={colors.mainOrange} />
      )}
    </View>
  );
}

export default PhoneCodeText;
