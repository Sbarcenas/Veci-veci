import React from 'react';
import {View, Animated} from 'react-native';

function StickyScroll(props) {
  const {scrollY, headerHeight} = props.screenProps;
  let onScroll = Animated.event(
    [{nativeEvent: {contentOffset: {y: scrollY || 0}}}],
    {useNativeDriver: true},
  );

  const translateY = this.props.screenProps.scrollY.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [0, headerHeight],
    extrapolate: 'clamp',
  });
  return (
    <View {...this.props}>
      <Animated.ScrollView
        onScroll={onScroll}
        scrollEventThrottle={16}
        ref={(ref) => (this.scrollView = ref)}>
        <Animated.View
          style={{
            width: '100%',
            paddingBottom: headerHeight,
            transform: [{translateY}],
          }}>
          {this.props.children}
        </Animated.View>
      </Animated.ScrollView>
    </View>
  );
}

export default StickyScroll;
