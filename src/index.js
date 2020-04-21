import App from './containers/App.svelte';
import registerServiceWorker from './registerServiceWorker';

const app = new App({
  target: document.querySelector('main')
});
registerServiceWorker();

export default app;
