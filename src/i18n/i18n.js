/*=========================================================================================
  File Name: i18n.js
  Description: i18n configuration file. Imports i18n data.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import VueI18n from 'vue-i18n'
import i18nData from './i18nData'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'zh', // 设置默认语言
  messages: i18nData,
})
