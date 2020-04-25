import messaging from '@react-native-firebase/messaging';

async function registerAppWithFCM() {
  await messaging().registerDeviceForRemoteMessages();
}

async function requestUserPermission() {
  const settings = await messaging().requestPermission({
    sound: true,
    announcement: true,
    alert: true,
    badge: true,
    carPlay: true,
    // ... other permission settings
  });

  if (settings) {
    console.log('Permission settings:', settings);
  }
}
