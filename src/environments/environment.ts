import {IEnvironment} from '@abstractions/models';
import getEnv from './environment.provider';

export const environment: IEnvironment = {
  apiUrl: getEnv('apiUrl', ''),
  production: !!getEnv('debug', ''),
  webUrl: getEnv('webUrl', ''),
};
