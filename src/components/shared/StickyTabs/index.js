import React, {useEffect, useState} from 'react';
import {Animated, View} from 'react-native';

function Index(props) {
  const {headerHeight, Header, Content} = props;
  const [offset, setOffset] = useState(new Animated.Value(0));

  const _content = React.cloneElement(this.props.contentComponent, {
    screenProps: {
      headerHeight: headerHeight,
      scrollY: offset,
    },
  });

  const translateY = offset.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [0, -headerHeight],
    extrapolate: 'clamp',
  });

  return (
    <Animated.ScrollView style={{flex: 1}}>
      <Animated.View
        style={{
          width: '100%',
          height: headerHeight,
          position: 'absolute',
          top: 0,
          overflow: 'hidden',
          transform: [{translateY}],
        }}>
        {Header}
      </Animated.View>
      <Animated.View
        style={[
          {
            width: '100%',
            flex: 1,
            marginTop: headerHeight,
            marginBottom: -headerHeight,
          },
          {transform: [{translateY}]},
        ]}>
        {_content}
      </Animated.View>
    </Animated.ScrollView>
  );
}

export default Index;
