/* @remove-on-es-build-begin */
// this file is not used if use https://github.com/ant-design/babel-plugin-import
const ENV = process.env.NODE_ENV;
if (
  ENV !== 'production' &&
  ENV !== 'test' &&
  typeof console !== 'undefined' &&
  console.warn &&
  typeof window !== 'undefined'
) {
  console.warn(
    'You are using a whole package of antd, ' +
      'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.',
  );
}
/* @remove-on-es-build-end */

import { default as Button } from './button';

import { default as version } from './version';

const components = [

  Button,
  
];

const install = function(Vue) {
  components.map(component => {
    Vue.use(component);
  });

  // Vue.prototype.$message = message;
  // Vue.prototype.$notification = notification;
  // Vue.prototype.$info = Modal.info;
  // Vue.prototype.$success = Modal.success;
  // Vue.prototype.$error = Modal.error;
  // Vue.prototype.$warning = Modal.warning;
  // Vue.prototype.$confirm = Modal.confirm;
  // Vue.prototype.$destroyAll = Modal.destroyAll;
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  version,
  install,
  Button,
};

export default {
  version,
  install,
};
