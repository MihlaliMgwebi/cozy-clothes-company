import {InjectionToken} from '@angular/core';
import {IEnvironment} from '@abstractions/models';

// [Angular Environment Setup - Safe & Testable | Nils Mehlhorn (Environment Injection Token](https://nils-mehlhorn.de/posts/angular-environment-setup-testing/)
export const ENV = new InjectionToken<IEnvironment>('env');

type DefaultValueType = boolean | string;
export default function getEnv(
  name: EnvironmentKeyType,
  defaultValue?: DefaultValueType,
): DefaultValueType | undefined {
  return window['env'][name] || defaultValue;
}
