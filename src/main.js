import { createApp } from "vue"

import App from "./App.vue"
import PageHeader from "./components/PageHeader.vue";
import AboutMe from "./components/AboutMe.vue";
import Skills from "./components/Skills.vue";

const app = createApp(App);
app.component("page-header", PageHeader);
app.component("about-me", AboutMe);
app.component("skills", Skills);

app.mount("#app");
