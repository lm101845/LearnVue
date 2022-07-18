/*
 * @Author: liming
 * @Date: 2021-09-23 15:05:01
 * @LastEditTime: 2021-10-08 10:00:57
 * @FilePath: \Demo\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import FuzzyQuery from '../views/fuzzyquery/FuzzyQuery'
import AddParams from '../views/addparams/AddParams'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: "/01"
    },
    {
        path: '/01',
        name: 'fuzzyquery',
        component: FuzzyQuery
    },
    {
        path: '/02',
        name: 'addparams',
        component: AddParams
    }
]

const router = new VueRouter({
    routes
})

export default router
