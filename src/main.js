import '@mdi/font/css/materialdesignicons.css'
import 'bootstrap'
import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import { registerGlobalComponents } from './registerGlobalComponents'
import { router } from './router'
import 'vuesax3/dist/vuesax.css'; //Vuesax styles
   import Vuesax from 'vuesax3';
const root = createApp(App)
registerGlobalComponents(root)

root
  .use(router).use(Vuesax)
  .mount('#app')

  
   
   //npm i vuesax3
   //root.use(router).use(Vuesax).mount('#app');