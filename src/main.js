import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import Toaster from "@meforma/vue-toaster";

createApp(App).use(store).use(Toaster).mount("#app");
