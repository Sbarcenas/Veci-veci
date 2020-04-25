import {client} from './config';

//FEATHERS SERVICES

// AUTH METHODS
export const login = async (email, password) => {
  try {
    // First try to log in with an     JWT
    return await client.reAuthenticate();
  } catch (error) {
    // If that errors, log in with email/password
    // Here we would normally show a login page
    // to get the login information
    return await client.authenticate({
      email,
      password,
      strategy: 'local',
    });
  }
};

export const logout = async () => {
  await client.logout();
};
