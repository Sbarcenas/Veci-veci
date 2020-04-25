import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {colors} from '../../utils/theme';

function Index(props) {
  const {children, onPressBack, color} = props;
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}
      bounces={false}>
      <SafeAreaView>
        <View style={{width: '100%', paddingHorizontal: 15, flex: 0}}>
          <Icon
            name="arrowleft"
            style1
            size={35}
            light
            color={color || colors.boldPurple}
            onPress={onPressBack}
          />
        </View>
        <View style={{flex: 1}}>{children}</View>
      </SafeAreaView>
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
