import initSwiper from "./modules/init-swiper.js";
import Faq from "./modules/faq.js";

initSwiper();
const faq = new Faq("[data-faq] dt");
AOS.init();