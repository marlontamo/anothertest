import Vue from 'vue';
import router from './router';
import App from '.components/App';

require('./bootstrap');

const app= new Vue({
    el:'#app',
    components:{
        App
    },
    router
});

{/* <App></App> use this in your blade.php file 
   edit the laravel routes.php
   

require('./bootstrap');

window.Vue = require('vue');

Vue.component('example-component', require('./components/ExampleComponent.vue').default);


const app = new Vue({
    el: '#app',
});

*/}