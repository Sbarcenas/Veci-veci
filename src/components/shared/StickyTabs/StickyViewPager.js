import React from 'react';
import ViewPager from '@react-native-community/viewpager';
function StickyViewPager(props) {
  const {children} = props;
  const {headerHeight, scrollY} = props.screenProps;
  const content =
    headerHeight && scrollY
      ? children.map((child) =>
          React.cloneElement(child, {
            screenProps: {
              headerHeight: headerHeight,
              scrollY: scrollY,
            },
          }),
        )
      : children;
  return (
    <ViewPager style={{flexGrow: 1}} initialPage={0}>
      {content}
    </ViewPager>
  );
}

export default StickyViewPager;
