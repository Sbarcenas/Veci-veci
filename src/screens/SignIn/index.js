import React from 'react';
import {StepPager} from '../../components/shared';
import {View, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FastImage from 'react-native-fast-image';
import {LOGO_IMG} from '../../assets/media/images';
import {colors} from '../../utils/theme';
function Index(props) {
  return (
    <View style={{flex: 1, backgroundColor: colors.mainWhite}}>
      <KeyboardAwareScrollView
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1}}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <View style={{flex: 0, alignItems: 'center'}}>
          <FastImage
            source={LOGO_IMG}
            style={{width: 200, height: 200}}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <StepPager style={{backgroundColor: colors.mainWhite}}>
          <View style={{flex: 1}}>
            <Text>1</Text>
          </View>
          <View style={{flex: 1}}>
            <Text>2</Text>
          </View>
          <View style={{flex: 1}}>
            <Text>3</Text>
          </View>
        </StepPager>
      </KeyboardAwareScrollView>
    </View>
  );
}

export default Index;
