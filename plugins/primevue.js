import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Menubar from "primevue/menubar";
import InputText from "primevue/inputtext";
import Galleria from 'primevue/galleria';
import Carousel from 'primevue/carousel';
import Tag from "primevue/tag";
import Rating from 'primevue/rating';
import Textarea from 'primevue/textarea';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true });
    nuxtApp.vueApp.component("Button", Button);
    nuxtApp.vueApp.component("Menubar",Menubar);
    nuxtApp.vueApp.component("InputText",InputText);
    nuxtApp.vueApp.component("PhotoService",Galleria);
    nuxtApp.vueApp.component("Carousel",Carousel);
    nuxtApp.vueApp.component("Tag",Tag);
    nuxtApp.vueApp.component("Rating",Rating);
    nuxtApp.vueApp.component("Textarea",Textarea);
    

});