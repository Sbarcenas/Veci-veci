/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import {startApp} from './src/navigation';
import messaging from '@react-native-firebase/messaging';

// Register background handler



Navigation.events().registerAppLaunchedListener(() => startApp());


