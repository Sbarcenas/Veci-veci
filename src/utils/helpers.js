import {showOverlay, TOAST_SCREEN} from '../navigation';

export const Toaster = (passProps) => {
  return showOverlay(TOAST_SCREEN.name, passProps, {
    overlay: {
      interceptTouchOutside: false,
    },
  });
};

export const includesKey = (arr, find, key) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key] === find) {
      return true;
    }
  }
  return false;
};

export const getYupErrors = (errors) => Object.values(errors);
export const getMainErrorYup = (errors) => getYupErrors(errors)[0];
