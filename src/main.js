import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";

import Card from "primevue/card";
import Rating from "primevue/rating";
import Tag from "primevue/tag";
import Carousel from "primevue/carousel";
import Menubar from "primevue/menubar";
import Divider from "primevue/divider";
import Badge from "primevue/badge";
import Button from "primevue/button";

const app = createApp(App);

app.use(PrimeVue);

app.component("CardPrime", Card);
app.component("RatingPrime", Rating);
app.component("TagPrime", Tag);
app.component("CarouselPrime", Carousel);
app.component("MenubarPrime", Menubar);
app.component("DividerPrime", Divider);
app.component("BadgePrime", Badge);
app.component("ButtonPrime", Button);

app.use(router);
app.mount("#app");

