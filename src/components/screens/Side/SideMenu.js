import React from 'react';
import {View, SectionList, Text, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {MenuItems} from './MenuItems';
import {MenuItem} from '../../shared';
import {fonts} from '../../../utils/theme';

function SideMenu(props) {
  const dispatch = useDispatch();
  return (
    <SectionList
      scrollEnabled={false}
      style={{width: '100%'}}
      contentContainerStyle={{
        width: '100%',
      }}
      sections={MenuItems}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <MenuItem
          Icon={<item.Icon />}
          text={item.title}
          onPress={item.onPress}
        />
      )}
      renderSectionHeader={({section: {title}}) =>
        title ? (
          <Text
            style={[
              fonts.BoldTittle,
              {alignSelf: 'center', marginVertical: 25},
            ]}>
            {title}
          </Text>
        ) : (
          <View />
        )
      }
    />
  );
}

const styles = StyleSheet.create({
  header: {},
});
export default SideMenu;
