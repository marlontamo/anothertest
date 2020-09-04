import Router from './router';
//import rawter from 'vue-router';
require('./bootstrap');

window.Vue = require('vue');

Vue.component('App', require('./components/App.vue').default);


const app = new Vue({
    el: '#app',
   router: Router,
   
});