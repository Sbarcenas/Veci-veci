import React, {useEffect} from 'react';
import {Text} from 'react-native';

function CountDownText(props) {
  const {timer, setTimer} = props;

  useEffect(() => {
    const count = timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
    return () => {
      setTimer(0);
      clearTimeout(count);
    };
  }, [timer]);

  return <Text> {timer} </Text>;
}

export default CountDownText;
