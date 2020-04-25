import React, {useEffect} from 'react';
import {View, Dimensions, Platform, StyleSheet} from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
import {dismissOverlay} from '../../../navigation';
const {width} = Dimensions.get('window');

const Toast = (props) => {
  const {title = '', text = '', type, duration = 3000, componentId} = props;
  useEffect(() => {
    this.dropdown.alertWithType(type, title, text);
    setTimeout(() => {
      dismissOverlay(componentId);
    }, duration);
  }, []);

  return (
    <View style={{width}}>
      <DropdownAlert
        elevation={4}
        translucent={Platform.OS === 'ios'}
        ref={(ref) => (this.dropdown = ref)}
        closeInterval={duration}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Toast;
