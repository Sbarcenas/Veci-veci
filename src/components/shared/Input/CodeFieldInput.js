import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {colors} from '../../../utils/theme';

const styles = StyleSheet.create({
  root: {flex: 0, padding: 20, width: 190, alignSelf: 'center'},
  codeFiledRoot: {marginTop: 30},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: colors.lightGray,
    fontFamily: 'Poppins-SemiBold',
    borderRadius: 10,
    textAlign: 'center',
    color: colors.boldGray,
  },
  focusCell: {
    borderColor: colors.boldGray,
    color: colors.boldGray,
  },
});

const CELL_COUNT = 4;

const CodeFieldInput = (props) => {
  const {value, setValue} = props;
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [_props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <SafeAreaView style={styles.root}>
      <CodeField
        ref={ref}
        {..._props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFiledRoot}
        keyboardType="number-pad"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </SafeAreaView>
  );
};

export default CodeFieldInput;
