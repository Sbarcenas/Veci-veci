import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {BackArrow} from '../../../layouts';
import {popComponent, pushTabBasedApp} from '../../../navigation';
import FastImage from 'react-native-fast-image';
import {LOGO_IMG} from '../../../assets/media/images';
import {colors, fonts} from '../../../utils/theme';
import {CodeFieldInput, CountDownText} from '../../../components/shared';

function VerificationCode(props) {
  const {terms, onSend, type, payload} = props;
  const [value, setValue] = useState('');
  const [timer, setTimer] = useState(20);
  const resendMessage = () => {
    onSend();
    setTimer(20);
  };
  useEffect(() => {
    if (value.length === 4) {
      pushTabBasedApp();
    }
  }, [value]);

  const {componentId} = props;
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
            <Text
              style={[
                fonts.basic,
                {
                  textAlign: 'center',
                  marginTop: 10,
                  width: 300,
                  alignSelf: 'center',
                },
              ]}>
              Introduce tu código enviado al {type}
              <Text style={[fonts.semiBold, {color: colors.mainOrange}]}>
                {`   ${payload}.  `}
                <Text
                  style={[
                    fonts.basicPurple,
                    {
                      textDecorationLine: 'underline',
                      color: colors.boldPurple,
                    },
                  ]}
                  onPress={back}>
                  Cambiar {type}
                </Text>
              </Text>
            </Text>
            <View style={{}}>
              <CodeFieldInput value={value} setValue={setValue} />
            </View>
            {timer > 0 ? (
              <View style={{alignItems: 'center', marginTop: 10}}>
                <Text style={fonts.basic}>
                  Volver a enviar en:
                  <CountDownText timer={timer} setTimer={setTimer} />
                  segundos
                </Text>
              </View>
            ) : (
              <View style={{alignItems: 'center', marginTop: 10}}>
                <Text style={fonts.basic}>
                  ¿No recibiste tu código?{' '}
                  <Text
                    style={[
                      fonts.basicPurple,
                      {textDecorationLine: 'underline'},
                    ]}
                    onPress={resendMessage}>
                    Reenviar
                  </Text>
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>
      <View style={{flex: 1, alignItems: 'center'}} />
    </BackArrow>
  );
}

export default VerificationCode;
