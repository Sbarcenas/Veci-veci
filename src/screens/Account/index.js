import React from 'react';
import {View, Text} from 'react-native';
import {BackArrowAlt} from '../../layouts';
import {dismissOverlay} from '../../navigation';
import {colors, fonts} from '../../utils/theme';
import {RoundedImage} from '../../components/shared';
import {USER_IMG} from '../../assets/media/images';
import IconText from '../../components/shared/Text/IconText';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {AccountForm} from '../../components/screens';

function Index(props) {
  const {componentId} = props;
  return (
    <BackArrowAlt
      onPressBack={() => dismissOverlay(componentId)}
      color={colors.mainOrange}>
      <View style={{alignItems: 'center', marginTop: 20, width: '100%'}}>
        <RoundedImage
          source={USER_IMG}
          onPress={() => alert('a')}
          touchable={{onPress: () => alert('b')}}
        />
        <View style={{alignItems: 'center', marginTop: 10, width: '100%'}}>
          <Text style={[fonts.basicTitle]}>Lidia Aguilar</Text>
          <IconText
            textStyle={[fonts.footerImage, {color: colors.mainBlue}]}
            Icon={
              <Icons
                name="place"
                size={25}
                color={colors.mainBlue}
                style={{
                  alignSelf: 'center',
                }}
              />
            }
          />
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              paddingTop: 40,
            }}>
            <AccountForm />
          </View>
        </View>
      </View>
      <View></View>
    </BackArrowAlt>
  );
}

export default Index;
