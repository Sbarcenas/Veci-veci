import React from 'react';
import {IconText, TouchableOpacity} from '../../index';
import {colors, fonts} from '../../../../utils/theme';

function Index(props) {
  const {Icon, text, onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        paddingVertical: 15,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: colors.borderGray,
        width: '85%',
        alignItems: 'center',
        alignSelf: 'center',
      }}>
      <IconText
        iconContainerStyle={{marginHorizontal: 20, width: 30}}
        textStyle={[fonts.basic, {fontSize: 15}]}
        text={text || 'Mi perfil'}
        Icon={Icon}
      />
    </TouchableOpacity>
  );
}

export default Index;
