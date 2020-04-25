import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {colors} from '../../../utils/theme';
import {TouchableOpacity} from '../Touchable';

function Index(props) {
  const {text, Icon, style, textStyle, onPress, iconContainerStyle} = props;
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <View
        style={[
          {marginLeft: 20, justifyContent: 'center'},
          iconContainerStyle,
        ]}>
        {Icon}
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={[textStyle]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: colors.gold,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
});

export default Index;
