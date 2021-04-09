// Project: https://github.com/vueComponent/ant-design-vue
// Definitions by: akki-jat <https://github.com/akki-jat>
// Definitions: https://github.com/vueComponent/ant-design-vue/types

import Vue from 'vue';


import { Button } from './button/button';

import { Message } from './message';
import { Notification } from './notification';

/**
 * Install all ant-design-vue components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(Antd)` to install.
 */
export function install(vue: typeof Vue): void;

// declare const message: Message;
// declare const notification: Notification;

export {
  Button,
};
