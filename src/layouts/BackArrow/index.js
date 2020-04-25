import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {colors} from '../../utils/theme';

function Index(props) {
  const {children, onPressBack} = props;
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentInsetAdjustmentBehavior="never"
      bounces={false}
      contentContainerStyle={{flexGrow: 1}}>
      <SafeAreaView style={{position: 'absolute', zIndex: 999, elevation: 1}}>
        <View style={{width: '100%', paddingHorizontal: 15}}>
          <Icon
            name="arrowleft"
            style1
            size={35}
            light
            color={colors.boldPurple}
            onPress={onPressBack}
          />
        </View>
      </SafeAreaView>
      <View style={{flex: 1}}>{children}</View>
    </ScrollView>
  );
}

const styles = {
  style1: {
    fontWeight: '100',
  },
  style2: {
    fontWeight: '100',
  },
};

export default Index;
