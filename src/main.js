import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/base.css";

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");

// FOR DEVELOPMENT ONLY (ACCESS THE STORE IN THE BROWSER)
if (import.meta.env.DEV) {
  window.store = store;
}
