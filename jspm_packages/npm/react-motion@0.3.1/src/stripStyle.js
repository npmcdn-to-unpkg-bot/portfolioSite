/* */ 
"format cjs";
/* @flow */
// turn {x: {val: 1, config: [1, 2]}, y: 2} generated by
// `{x: spring(1, [1, 2]), y: 2}` into {x: 1, y: 2}

import type {Style} from './Types';

export default function stripStyle(style: Style): Object {
  let ret = {};
  for (let key in style) {
    if (!style.hasOwnProperty(key)) {
      continue;
    }
    ret[key] = style[key] == null || style[key].val == null ? style[key] : style[key].val;
  }
  return ret;
}
