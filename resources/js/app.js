require('./bootstrap');

require('alpinejs');

import { createApp } from "vue";
import router from './router'

import ProductsIndex from './components/products/ProductsIndex'
import ClientsIndex from './components/clients/ClientsIndex'

createApp({
    components: {
        ProductsIndex,
        ClientsIndex
    }
}).use(router).mount('#app')