import dynamicLinks from '@react-native-firebase/dynamic-links';
import {includesKey, Toaster} from '../../utils/helpers';
import * as Screens from '../../navigation/screens';
import {changeTab, pushScreen, showModal} from '../../navigation';
import {
  favorite_push,
  geo_push,
  find_push,
  home_push,
  show_modal,
  show_overlay,
  tabs,
} from './constants';
import {AsyncStorage} from 'react-native';

export const handleDynamicLinks = async (link) => {
  try {
    const links = dynamicLinks();
    const initialLInk = link || (await links.getInitialLink());

    handleUrl(initialLInk.url);
    links.onLink((link) => {
      try {
        handleUrl(link);
      } catch (e) {
        Toaster({type: 'error', title: 'Error', text: e});
      }
    });
  } catch (e) {}
};

const handleUrl = (url) => {
  if (url) {
    const params = parseUrl(url);

    if (!urlIsValid(params.page_type)) {
      Toaster({type: 'error', title: 'invalid screen'});
      return;
    }
    try {
      showScreen(`apparta.${params.page_type}`, params.dynamic_id);
    } catch (e) {
      Toaster({type: 'error', title: 'Error', text: e});
    }
  } else {
    Toaster({type: 'alert', title: 'Alerta', text: 'No dynamic Link'});
  }
};

const urlIsValid = (view) => {
  if (!view) {
    return;
  }
  const views = Object.values(Screens); // ARRAY WITH ALL SCREENS
  return includesKey([...views], `apparta.${view}`, 'name');
  //return views.find((el) => el === 'apparta.' + view);
};

export const parseUrl = (url) => {
  const regex = /[?&]([^=#]+)=([^&#]*)/g;
  let params = {};
  let match;
  while ((match = regex.exec(url))) {
    params[match[1]] = match[2];
  }
  return params;
};

export const handleDeep = (page_type, dynamic_id = 0) => {
  if (page_type) {
    if (!urlIsValid(page_type)) {
      Toaster({type: 'error', title: 'invalid screen'});
      return false;
    }

    try {
      showScreen(`apparta.${page_type}`, dynamic_id);
    } catch (e) {
      Toaster({type: 'error', title: `apparta.${page_type}`, text: e});
    }
  } else {
    Toaster({type: 'error', title: 'No Dynamic Link '});
  }

  AsyncStorage.multiRemove(['page_type', 'dynamic_id']);
};

const showScreen = (screen, dynamic_id) => {
  //alert(screen, dynamic_id);
  if (tabs.includes(screen)) {
    changeTab(tabs.indexOf(screen));
  }
  if (find_push.includes(screen)) {
    pushScreen('findComponent', screen, {dynamic_id});
    changeTab(3);
  }
  if (home_push.includes(screen)) {
    pushScreen('mainComponent', screen, {dynamic_id});
    changeTab(0);
  }
  if (geo_push.includes(screen)) {
    pushScreen('geoComponent', screen, {dynamic_id});
    changeTab(2);
  }
  if (favorite_push.includes(screen)) {
    pushScreen('favoritesComponent', screen, {dynamic_id});
    changeTab(3);
  }
  if (show_modal.includes(screen)) {
    showModal(screen, {dynamic_id});
  }
  if (show_overlay.includes(screen)) {
    show_overlay(screen, {dynamic_id});
  }
};
