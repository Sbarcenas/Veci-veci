import {
  TouchableOpacity as To,
  TouchableWithoutFeedback as Tw,
} from 'react-native';
import React from 'react';
import PreventDoubleClick from './PreventDoubleClick/index';

export const TouchableOpacity = PreventDoubleClick(To);
export const TouchableWithoutFeedback = PreventDoubleClick(Tw);

export const TouchableOpacityHOC = (Component) => {
  const Render = (props) => {
    return (
      <TouchableOpacity {...props.touchable}>
        <Component {...props} />
      </TouchableOpacity>
    );
  };

  return Render;
};

export const TouchableWithoutFeedbackHOC = (Component) => {
  const Render = (props) => {
    return (
      <TouchableWithoutFeedback {...props.touchable}>
        <Component {...props} />
      </TouchableWithoutFeedback>
    );
  };

  return Render;
};
