import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import StepIndicator from 'react-native-step-indicator';

function Index(props) {
  const {children, style} = props;
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {}, [currentPage]);
  const vPager = useRef(null);
  const onStepPress = (position) => {
    setCurrentPage(position);
  };
  return (
    <View style={[styles.container, style]}>
      <View style={styles.stepIndicator}>
        <StepIndicator
          stepCount={3}
          customStyles={firstIndicatorStyles}
          currentPosition={currentPage}
          //labels={['Account', 'Profile', 'Band', 'Membership', 'Dashboard']}
          renderLabel={renderLabel}
          onPress={onStepPress}
        />
      </View>

      <ViewPager
        style={{flexGrow: 1}}
        ref={vPager}
        initialPage={0}
        onPageSelected={(page) => {
          setCurrentPage(page.nativeEvent.position);
        }}>
        {children}
      </ViewPager>
    </View>
  );
}

const renderLabel = ({position, stepStatus, label, currentPosition}) => {
  return (
    <Text
      style={
        position === currentPosition
          ? styles.stepLabelSelected
          : styles.stepLabel
      }>
      {label}
    </Text>
  );
};

const firstIndicatorStyles = {
  stepStrokeCurrentColor: '#00aec7',
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 5,
  separatorFinishedColor: '#00aec7',
  separatorUnFinishedColor: '#00aec7',
  stepIndicatorFinishedColor: '#00aec7',
  stepIndicatorUnFinishedColor: '#00aec7',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#000000',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
  labelColor: '#666666',
  labelSize: 12,
  currentStepLabelColor: '#00aec7',
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
  },
  stepIndicator: {
    marginVertical: 15,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepLabel: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#999999',
  },
  stepLabelSelected: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#00aec7',
  },
});

export default Index;
