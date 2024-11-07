// https://mariusschulz.com/blog/declaring-global-variables-in-typescript

type EnvironmentKeyType = 'apiUrl' | 'debug';

type EnvironmentType = Record<EnvironmentKeyType, string>;

interface Window {
  env: EnvironmentType;
  configs: Record<string, string>;
}
