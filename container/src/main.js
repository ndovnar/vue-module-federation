import { createApp } from 'vue';
import appComponent from './app';
import router from './router';

const app = createApp(appComponent);

app.use(router).mount('#app');
