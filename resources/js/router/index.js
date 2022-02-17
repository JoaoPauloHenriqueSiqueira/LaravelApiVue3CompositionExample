import { createRouter, createWebHistory } from "vue-router";

import ProductsIndex from '../components/products/ProductsIndex'
import ProductsCreate from '../components/products/ProductsCreate'
import ProductsEdit from '../components/products/ProductsEdit'

import ClientsIndex from '../components/clients/ClientsIndex'

const routes = [
    {
        path: '/products',
        name: 'products.index',
        component: ProductsIndex
    },
    {
        path: '/products/create',
        name: 'products.create',
        component: ProductsCreate
    },
    {
        path: '/products/:id/edit',
        name: 'products.edit',
        component: ProductsEdit,
        props:true
    },
     {
        path: '/clients',
        name: 'clients.index',
        component: ClientsIndex
    }
]

export default createRouter({
    history: createWebHistory('schedule-oficial-application/public'),
    routes
})