import { createApp, h } from "vue";
import { createPinia } from "pinia";
import VueFeather from "vue-feather";

import App from "./App.vue";
import router from "./router";

import "./main.css";

const app = createApp({
  setup() {},

  render: () => h(App),
});

app.use(createPinia());
app.use(router);
app.component(VueFeather.name, VueFeather);

app.mount("#app");
