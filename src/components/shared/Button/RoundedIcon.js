import React from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/theme';
import {TouchableOpacity} from '../Touchable';

function Index(props) {
  const {Icon, style, onPress} = props;
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      {Icon}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
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
    borderRadius: 100,
  },
});

export default Index;
