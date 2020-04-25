import React, {Fragment, useState} from 'react';
import {StyleSheet, View, Text, Animated} from 'react-native';
import {RoundedIcon, IconInput} from '../../../components/shared';
import FastImage from 'react-native-fast-image';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {colors, fonts} from '../../../utils/theme';
import {CheckBox} from 'react-native-elements';
import {LOGO_IMG} from '../../../assets/media/images';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {getMainErrorYup, getYupErrors} from '../../../utils/helpers';
import {
  PHONE_LOGIN_SCREEN,
  pushScreen,
  pushStack,
  VERIFICATION_CODE_SCREEN,
} from '../../../navigation';
import Icons from 'react-native-vector-icons/Fontisto';

function Index(props) {
  const {componentId} = props;
  const [animation, setAnimation] = useState(1);
  const loginSchema = Yup.object().shape({
    email: Yup.string('Solo puedes utilizar números')
      .required('Ingresa el email con el que deseas registrarte')
      .email('Ingresa un email valido'),
    terms: Yup.mixed().oneOf(
      [true],
      'Debes aceptar los términos y condiciones',
    ),
  });

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 0,
      timing: 400,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 1,
        duration: 400,
      }).start();
    });
  };

  const animatedStyle = {
    opacity: animation,
  };

  const onSend = () => {
    alert('sendCodeCorreo');
  };

  return (
    <KeyboardAwareScrollView
      contentInsetAdjustmentBehavior="never"
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      bounces={false}>
      <Formik
        enableReinitialize
        validationSchema={loginSchema}
        initialValues={{
          terms: false,
          email: '',
        }}
        onSubmit={(values) => {
          pushScreen(componentId, VERIFICATION_CODE_SCREEN.name, {
            ...values,
            onSend: onSend,
            payload: values.email,
            type: 'email',
          });
        }}>
        {({handleChange, handleSubmit, values, setFieldValue, errors}) => (
          <Fragment>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <FastImage
                  source={LOGO_IMG}
                  style={{width: 200, height: 200}}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
              <View style={{width: '70%', flex: 1}}>
                <Text style={[fonts.semiBold, {marginBottom: 10}]}>
                  Ingresa con tu email
                </Text>
                <IconInput
                  placeholder="tucorreo@dominio.com"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  Icon={
                    <Icons
                      name="email"
                      size={25}
                      color={colors.boldGray}
                      style={{
                        alignSelf: 'center',
                        marginLeft: 15,
                        marginRight: 10,
                      }}
                    />
                  }
                />
                <Text style={fonts.italicError}>{getMainErrorYup(errors)}</Text>
                <Text
                  onPress={() => pushStack(PHONE_LOGIN_SCREEN.name)}
                  style={[
                    fonts.basicPurple,
                    {
                      textDecorationLine: 'underline',
                      alignSelf: 'center',
                      fontSize: 12,
                      letterSpacing: 2,
                    },
                  ]}>
                  O ingresa con tu celular
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                paddingBottom: 30,
              }}>
              {getYupErrors(errors).length === 0 && values.terms && (
                <Animated.View
                  style={{
                    opacity:
                      getYupErrors(errors).length === 0 && values.terms ? 1 : 0,
                  }}>
                  <RoundedIcon
                    onPress={handleSubmit}
                    style={{
                      width: 60,
                      height: 60,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    Icon={
                      <Icons
                        name="angle-right"
                        size={25}
                        color={colors.boldPurple}
                      />
                    }
                  />
                </Animated.View>
              )}
              <View style={{justifyContent: 'flex-end', flex: 1}}>
                <CheckBox
                  title="Acepto términos y condiciones"
                  containerStyle={{
                    backgroundColor: 'transparent',
                    borderWidth: 0,
                  }}
                  textStyle={{
                    fontFamily: fonts.basic.fontFamily,
                    color: colors.boldPurple,
                    fontWeight: 'normal',
                  }}
                  checked={values.terms}
                  onPress={() => {
                    setFieldValue('terms', !values.terms);
                  }}
                  checkedIcon={'check-square'}
                  checkedColor={colors.boldPurple}
                />
              </View>
            </View>
          </Fragment>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {flexGrow: 1},
});
export default Index;
