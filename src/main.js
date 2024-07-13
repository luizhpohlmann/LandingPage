import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import PhosphorIcons from "@phosphor-icons/vue";
import router from './router';

let app = createApp(App)

app.use(PhosphorIcons);
app.use(router);

app.mount('#app')
