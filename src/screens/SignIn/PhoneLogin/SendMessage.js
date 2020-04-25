import React from 'react';
import {View, Text} from 'react-native';
import {BackArrow} from '../../../layouts';
import {
  popComponent,
  pushScreen,
  VERIFICATION_CODE_SCREEN,
} from '../../../navigation';
import FastImage from 'react-native-fast-image';
import {LOGO_IMG} from '../../../assets/media/images';
import {IconInput, Button} from '../../../components/shared';
import {PhoneCodeText} from '../../../components/screens';
import {colors, fonts} from '../../../utils/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function SendMessage(props) {
  const {componentId, countryCode, terms, country, phone} = props;
  const back = () => {
    popComponent(componentId);
  };
  return (
    <BackArrow onPressBack={back}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}>
          <FastImage
            source={LOGO_IMG}
            style={{width: 200, height: 200}}
            resizeMode={FastImage.resizeMode.contain}
          />
          <View
            style={{
              justifyContent: 'center',
              width: '70%',
            }}>
            <IconInput
              Icon={<PhoneCodeText text={`+${country.callingCode}`} />}
              editable={false}
              value={phone}
            />
            <Text
              style={[
                fonts.footerImage,
                {
                  textAlign: 'center',
                  marginTop: 10,
                  width: 230,
                  alignSelf: 'center',
                },
              ]}>
              Enviaremos un mensaje a este número Con un código de confirmación
            </Text>
          </View>
        </View>
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Button
          onPress={() =>
            pushScreen(componentId, VERIFICATION_CODE_SCREEN.name, {
              terms,
              country,
              phone,
            })
          }
          style={{width: '70%'}}
          textStyle={[fonts.semiBold, {color: colors.boldPurple}]}
          text="Recibir código por SMS"
          Icon={
            <Icon name="android-messages" size={25} color={colors.boldPurple} />
          }
        />
      </View>
    </BackArrow>
  );
}

export default SendMessage;
