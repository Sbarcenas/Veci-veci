import React, {Fragment} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {PhoneInput} from '../../../components/shared';
import FastImage from 'react-native-fast-image';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {colors, fonts} from '../../../utils/theme';
import {CheckBox} from 'react-native-elements';
import {LOGO_IMG} from '../../../assets/media/images';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {getMainErrorYup} from '../../../utils/helpers';
import {
  MAIL_LOGIN,
  pushScreen,
  pushStack,
  VERIFICATION_CODE_SCREEN,
} from '../../../navigation';

function Index(props) {
  const {componentId} = props;
  const loginSchema = Yup.object().shape({
    phone: Yup.string('Solo puedes utilizar números')
      .required('Ingresa el número con el que deseas registrarte')
      .min(10, 'Ingresa un número valido'),
    countryCode: Yup.string().required('El código de la región es obligatorio'),
    terms: Yup.mixed().oneOf(
      [true],
      'Debes aceptar los términos y condiciones',
    ),
  });
  const onSend = () => {
    alert('sendCode');
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
          countryCode: 'CO',
          terms: false,
          country: {
            cca2: 'CO',
            currency: ['COP'],
            callingCode: ['57'],
            region: 'Americas',
            subregion: 'South America',
            flag: 'flag-co',
            name: 'Colombia',
          },
          phone: '',
        }}
        onSubmit={(values) => {
          pushScreen(componentId, VERIFICATION_CODE_SCREEN.name, {
            ...values,
            onSend: onSend,
            payload: `+${values.country.callingCode} ${values.phone}`,
            type: 'número',
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
                  Ingresa con tu celular
                </Text>
                <PhoneInput
                  value={values.phone}
                  onChangeText={async (value) => {
                    if (value.length <= 10) {
                      setFieldValue('phone', value);
                      if (value.length === 10) {
                        setImmediate(() => handleSubmit());
                      }
                    } else {
                      handleSubmit();
                    }
                  }}
                  onSelect={(country) => {
                    setFieldValue('country', country);
                    setFieldValue('countryCode', country.cca2);
                  }}
                  countryCode={values.countryCode}
                />
                <Text style={fonts.italicError}>{getMainErrorYup(errors)}</Text>
                <Text
                  onPress={() => pushStack(MAIL_LOGIN.name)}
                  style={[
                    fonts.basicPurple,
                    {
                      textDecorationLine: 'underline',
                      alignSelf: 'center',
                      fontSize: 12,
                      letterSpacing: 2,
                    },
                  ]}>
                  O ingresa con tu email
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
                paddingBottom: 30,
              }}>
              <View>
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
                    setImmediate(() => handleSubmit());
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
