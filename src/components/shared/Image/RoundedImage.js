import React from 'react';
import FastImage from 'react-native-fast-image';
import {LOGO_IMG, USER_IMG} from '../../../assets/media/images';
import {View} from 'react-native';

function RoundedImage(props) {
  const {style, imageStyle, source} = props;
  return (
    <View
      style={[
        {width: 85, height: 85, borderRadius: 100, backgroundColor: 'red'},
      ]}>
      <FastImage
        source={source || USER_IMG}
        style={[{width: '100%', height: '100%'}, imageStyle]}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
}

export default RoundedImage;
