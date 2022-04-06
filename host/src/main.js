import { createApp } from 'vue';
import appComponent from './app';
import router from './router';
import appMenu from './app-menu';

const app = createApp(appComponent);

app.component('app-menu', appMenu);
app.use(router).mount('#app');
