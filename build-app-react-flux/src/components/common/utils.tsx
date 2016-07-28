import 'core-js';

export function clone<T extends {}>(obj:T):T {
  return Object.assign({}, obj) as T;
}
export function mixin<T extends {}, U extends {}>(obj1:T,  obj2:U) : T & U {
  return Object.assign({}, obj1, obj2) as (T & U);
}