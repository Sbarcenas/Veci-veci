import React from 'react';
import {colors} from '../../../utils/theme';
import {Text, View} from 'react-native';

function IconText(props) {
  const {style, textStyle, Icon, text, iconContainerStyle} = props;
  return (
    <View style={[{flexDirection: 'row', alignItems: 'center'}, style]}>
      <View style={[iconContainerStyle]}>{Icon}</View>
      <Text style={[{color: colors.boldGray}, textStyle]}>
        {text || 'Barranquilla'}
      </Text>
    </View>
  );
}

export default IconText;
