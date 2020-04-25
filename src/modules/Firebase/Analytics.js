import analytics from '@react-native-firebase/analytics';

export async function trackScreenView(screen, data) {
  // Set & override the MainActivity screen name
  await analytics().setCurrentScreen(screen, data);
}

export async function setUserProperties(user) {
  await Promise.all([
    analytics().setUserId(`${user.id}`),
    analytics().setUserProperty('first_name', user.first_name),
    analytics().setUserProperty('last_name', user.last_name),
    analytics().setUserProperty('gender', user.gender),
    analytics().setUserProperty('birthday', user.birthday),
    analytics().setUserProperty('role', user.role),
    analytics().setUserProperty('mainAddress', user.mainAddress.address),
  ]);
}

export async function excampleEvent(category) {
  const JSON_SEND = {
    categoryId: category,
  };
  await analytics().logEvent(`view_category`, JSON_SEND);
}
