import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {fonts} from '../../utils/theme';
import {Navigation} from 'react-native-navigation';
import {trackScreenView} from '../../modules/Firebase/Analytics';

function Index(props) {
  const {componentId} = props;
  useEffect(() => {
    const navigationEventListener = Navigation.events().registerComponentDidAppearListener(
      ({componentId: id}) => {
        // Check whether the event is fired in this screen.
        if (componentId !== id) return;
        // put your code here...
        trackScreenView('Geo', 'Geo');
      },
    );

    return () => {
      navigationEventListener.remove();
    };
  }, []);

  return (
    <View>
      <Text style={[fonts.basic]}>Geo</Text>
    </View>
  );
}

export default Index;
