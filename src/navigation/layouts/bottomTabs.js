import {
  FAVORITES_SCREEN,
  FIND_SCREEN,
  GEO_SCREEN,
  HOME_SCREEN,
  PHONE_LOGIN_SCREEN,
  SIDE_SCREEN,
} from '../screens';
import {Navigation} from 'react-native-navigation';
import {colors, icon_fonts} from '../../utils/theme';
import {Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

export async function pushTabBasedApp() {
  const icons = await Promise.all([
    icon_fonts.Apparta.getImageSource('home', 20, colors.boldGray),
    icon_fonts.Apparta.getImageSource('heart-empty', 20, colors.boldGray),
    icon_fonts.Apparta.getImageSource('geo', 20, colors.boldGray),
    icon_fonts.Apparta.getImageSource('find', 20, colors.boldGray),
  ]);
  return Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: SIDE_SCREEN.name,
            id: 'leftSideDrawer',
            passProps: {},
          },
        },
        center: {
          bottomTabs: {
            children: [
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: HOME_SCREEN.name,
                        id: 'mainComponent',
                        options: {},
                      },
                    },
                  ],
                  options: {
                    bottomTab: {
                      animate: false,
                      backgroundColor: 'transparent',
                      //text: 'Artículos',
                      icon: icons[0],
                      testID: 'HOME_SCREEN_BAR_BUTTON',
                    },
                  },
                },
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        id: 'favoritesComponent',
                        name: FAVORITES_SCREEN.name,
                        options: {},
                      },
                    },
                  ],
                  options: {
                    bottomTab: {
                      animate: false,
                      backgroundColor: 'transparent',
                      //  text: 'Guías',
                      icon: icons[1],
                      testID: 'MY_PRODUCTS_BAR_BUTTON',
                    },
                  },
                },
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        id: 'geoComponent',

                        name: GEO_SCREEN.name,
                        options: {},
                        passProps: {title: 'Bolsa de Compra'},
                      },
                    },
                  ],
                  options: {
                    bottomTab: {
                      animate: false,
                      backgroundColor: 'transparent',
                      //  text: 'Crecimiento',
                      icon: icons[2],
                      testID: 'ADD_PRODUCT_BAR_BUTTON',
                    },
                  },
                },
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        id: 'findComponent',
                        name: FIND_SCREEN.name,
                        options: {},
                        passProps: {},
                      },
                    },
                  ],
                  options: {
                    bottomTab: {
                      animate: false,
                      backgroundColor: 'transparent',
                      //  text: 'Vacunación',
                      icon: icons[3],
                      testID: 'ADD_PRODUCT_BAR_BUTTON',
                    },
                  },
                },
              },
            ],
          },
        },
        options: {
          sideMenu: {
            left: {
            },
          },
        },
      },
    },
  });
}
