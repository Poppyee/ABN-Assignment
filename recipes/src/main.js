import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
// import { BootstrapVue } from "bootstrap-vue";

import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

createApp(App)
    .use(router)
    // .use(BootstrapVue)
    .mount('#app')
