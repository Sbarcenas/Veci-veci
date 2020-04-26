import io from 'socket.io-client';
import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';
import auth from '@feathersjs/authentication-client';
import {AsyncStorage} from 'react-native';

const socket = io('http://api.veciveci.com/', {
  transports: ['websocket'],
  forceNew: true,
});

export const client = feathers();

client.configure(socketio(socket));

client.configure(
  auth({
    storage: AsyncStorage,
    storageKey: 'accessToken',
  }),
);
