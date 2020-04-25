import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View, SafeAreaView} from 'react-native';
import Config from './Config';
import {trackScreenView} from '../../modules/Firebase/Analytics';
import {Navigation} from 'react-native-navigation';
import {toggleMenu} from '../../navigation';

function Index(props) {
  const {componentId} = props;
  // push Notifications

  //TRACK SCREEN
  useEffect(() => {
    const navigationEventListener = Navigation.events().registerComponentDidAppearListener(
      ({componentId: id}) => {
        // Check whether the event is fired in this screen.
        if (componentId !== id) return;
        // put your code here...
        trackScreenView('Home', 'Home');
      },
    );

    return () => {
      navigationEventListener.remove();
    };
  }, []);

  return (
    <View>
      <Config />
      <Text>Home</Text>
      <SafeAreaView>
        <TouchableOpacity
          onPress={() => toggleMenu(true)}
          style={{height: 100, width: 100}}>
          <Text>Toggle</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

export default Index;
