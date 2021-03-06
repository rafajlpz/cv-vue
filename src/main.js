import { createApp, VueElement } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia';
//Para cargar iconos
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


library.add(fas);

createApp(App).use(createPinia()).use(router).component('fonticon', FontAwesomeIcon).mount('#app')
