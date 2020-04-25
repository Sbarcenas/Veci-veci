import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {
  handleDeep,
  handleDynamicLinks,
} from '../../modules/Firebase/DynamicLink';

function Index(props) {
  // push Notifications
  useEffect(() => {
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log('Message handled in the background!', remoteMessage);
    });
    messaging().onMessage(async (remoteMessage) => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    // Assume a message-notification contains a "type" property in the data payload of the screen to open
    messaging().onNotificationOpenedApp((remoteMessage) => {
      const {page_type, dynamic_id} = remoteMessage.data;

      console.info(
        'Notification caused app to open from background state:',
        JSON.stringify(remoteMessage.data),
      );
      if (page_type) {
        handleDeep(page_type, dynamic_id);
      }
    });
    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          const {page_type, dynamic_id} = remoteMessage.data;
          console.info(
            'Notification caused app to open from quit state:',
            JSON.stringify(remoteMessage.data),
          );
          if (page_type) {
            handleDeep(page_type, dynamic_id);
          }
        }
      });
  }, []);

  // Dynamic Links
  useEffect(() => {
    const unsubscribe = dynamicLinks().onLink(handleDynamicLinks);
    handleDynamicLinks();
    // When the is component unmounted, remove the listener
    return () => unsubscribe();
  }, []);

  return null;
}

export default Index;
