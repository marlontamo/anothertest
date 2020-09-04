import Vue from 'vue';
import VueRouter from 'vue-router';
import  Example  from './components/ExampleComponent';


Vue.use(VueRouter);

export default new VueRouter({
    mode: 'abstract',
    routes:[
        {
          path: '/',
          component: Example  
        }
    ],
    
    
});