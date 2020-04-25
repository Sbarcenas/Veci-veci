import {
  FriendsIcon,
  MessageIcon,
  QrIcon,
  QuestionIcon,
  ReservationIcon,
  UserIcon,
} from '../../../assets/media/icons';
import {ACCOUNT_SCREEN, showOverlay} from '../../../navigation';

export const MenuItems = [
  {
    title: '',
    data: [
      {
        title: 'Mi perfil',
        Icon: UserIcon,
        onPress: (item, dispatch) => {
          showOverlay(ACCOUNT_SCREEN.name, {});
        },
      },
      {
        title: 'Mis reservaciones',
        Icon: ReservationIcon,
        onPress: (item, dispatch) => {},
      },
      {
        title: 'Referir amigos',
        Icon: FriendsIcon,
        onPress: (item, dispatch) => {},
      },
    ],
  },
  {
    title: 'MI RESTAURANTE',
    data: [
      {
        title: 'Leer código QR',
        Icon: QrIcon,
        onPress: (item, dispatch) => {},
      },
    ],
  },
  {
    title: 'SOPORTE',
    data: [
      {
        title: 'Escribenos',
        Icon: MessageIcon,
        onPress: (item, dispatch) => {},
      },
      {
        title: 'Preguntas Frecuentes',
        Icon: QuestionIcon,
        onPress: (item, dispatch) => {},
      },
    ],
  },
];
