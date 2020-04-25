import React, {Fragment} from 'react';
import {Formik} from 'formik';
import {Text, View} from 'react-native';
import {Button, IconInput, PhoneInput} from '../../shared';
import FastImage from 'react-native-fast-image';
import {LOGO_IMG} from '../../../assets/media/images';
import {colors, fonts} from '../../../utils/theme';
import Icons from 'react-native-vector-icons/Fontisto';
import {getMainErrorYup} from '../../../utils/helpers';
import {pushStack} from '../../../navigation/layouts';
import {PHONE_LOGIN_SCREEN} from '../../../navigation';

function AccountForm(props) {
  const {componentId} = props;
  return (
    <Formik
      enableReinitialize
      initialValues={{
        terms: false,
        email: '',
      }}>
      {({handleChange, handleSubmit, values, setFieldValue, errors}) => (
        <Fragment>
          <View style={{width: '90%'}}>
            <Text
              style={[
                fonts.basic,
                {color: colors.lightGray, marginVertical: 10},
              ]}>
              Nombre
            </Text>
            <IconInput
              style={{maxHeight: 100, height: 54, paddingLeft: 10}}
              value={values.email}
              onChangeText={handleChange('email')}
            />
            <Text style={fonts.italicError}>{getMainErrorYup(errors)}</Text>
          </View>
          <View style={{width: '90%'}}>
            <Text
              style={[
                fonts.basic,
                {color: colors.lightGray, marginVertical: 10},
              ]}>
              Apellido
            </Text>
            <IconInput
              style={{
                maxHeight: 100,
                height: 54,
                paddingLeft: 10,
                marginVertical: 10,
              }}
              value={values.email}
              onChangeText={handleChange('email')}
            />
            <Text style={fonts.italicError}>{getMainErrorYup(errors)}</Text>
          </View>
          <View style={{width: '90%'}}>
            <Text
              style={[
                fonts.basic,
                {color: colors.lightGray, marginVertical: 10},
              ]}>
              Email
            </Text>
            <IconInput
              style={{maxHeight: 100, height: 54, paddingLeft: 10}}
              value={values.email}
              onChangeText={handleChange('email')}
            />
            <Text style={fonts.italicError}>{getMainErrorYup(errors)}</Text>
          </View>
          <View style={{width: '90%'}}>
            <Text
              style={[
                fonts.basic,
                {color: colors.lightGray, marginVertical: 10},
              ]}>
              Télefono
            </Text>
            <PhoneInput
              style={{maxHeight: 100, height: 54}}
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
          </View>

          <Button
            text="Guardar"
            style={{width: 200, marginTop: 30, height: 45}}
            textStyle={[fonts.basicPurple, {fontFamily: 'Poppins-SemiBold'}]}
            onPress={() => null}
            iconContainerStyle
          />
        </Fragment>
      )}
    </Formik>
  );
}

export default AccountForm;
