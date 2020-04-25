import {Navigation} from 'react-native-navigation';
import registerScreens from './registerScreens';
import {pushStack, pushTabBasedApp} from './layouts';
import {colors} from '../utils/theme';
import {login} from '../services/feathers';
import {INTRO_SCREEN, PHONE_LOGIN_SCREEN} from './screens';

//Register All Screens
registerScreens();

export async function startApp() {
  Navigation.setDefaultOptions({
    topBar: {
      visible: false,
    },
    statusBar: {
      style: 'dark',
    },
    layout: {
      orientation: ['portrait'],
    },
    bottomTabs: {
      animate: false,
      backgroundColor: 'white',
      drawBehind: false,
      hideShadow: false,
    },
    bottomTab: {
      textColor: colors.boldGray,
      iconColor: colors.boldGray,
      selectedTextColor: colors.mainBlue,
      selectedIconColor: colors.mainBlue,
    },
  });

  try {
    await login();
    pushTabBasedApp();
  } catch (e) {
    pushStack(INTRO_SCREEN.name);
    // pushTabBasedApp();
  }
}

export const toggleMenu = (bool) => {
  Navigation.mergeOptions('leftSideDrawer', {
    sideMenu: {
      left: {
        visible: bool,
      },
    },
  });
};

export const pushScreen = (componentId, toPush, props = {}) => {
  Navigation.push(componentId, {
    component: {
      name: toPush,
      passProps: props,
    },
  });
  closeMenu();
};

export const goingToHome = () => {
  Navigation.mergeOptions('favoritesComponent', {
    bottomTabs: {
      currentTabIndex: 0,
    },
  });
  closeMenu();
};

export const changeTab = (index) => {
  index
    ? Navigation.mergeOptions('mainComponent', {
        bottomTabs: {
          currentTabIndex: index,
        },
      })
    : null;
  closeMenu();
};

export const closeMenu = () => {
  Navigation.mergeOptions('leftSideDrawer', {
    sideMenu: {
      left: {
        visible: false,
      },
    },
  });
};

export const showModal = (toShow, props) => {
  Navigation.showModal({
    component: {
      name: toShow,
      passProps: props,
      options: {
        screenBackgroundColor: 'transparent',
        modalPresentationStyle: 'overCurrentContext',
        topBar: {
          visible: false,
          animate: true,
        },
      },
    },
  });
};

export const showOverlay = (toShow, props, config) => {
  return Navigation.showOverlay({
    component: {
      name: toShow,
      passProps: props,
      config,
    },
  });
};

export const dismissOverlay = (componentId) => {
  return Navigation.dismissOverlay(componentId);
};

export const dismissModal = (componentId) => {
  return Navigation.dismissModal(componentId);
};

export const popComponent = (componentId) => {
  return Navigation.pop(componentId);
};

export const popToRoot = (componentId) => Navigation.popToRoot(componentId);

export const dismissAllModals = () => Navigation.dismissAllModals();
