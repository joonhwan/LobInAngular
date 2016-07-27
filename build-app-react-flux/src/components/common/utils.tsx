import 'core-js';

export function clone<T extends {}>(obj:T) {
  return Object.assign({}, obj) as T;
}