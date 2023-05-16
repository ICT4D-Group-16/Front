import './assets/main.css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import * as VueRouter from 'vue-router'
import 'element-plus/dist/index.css'
import App from './App.vue'
import Dashboard from "@/components/Dashboard.vue";
import Welcome from "@/components/TheWelcome.vue";
import allProducts from "@/components/allProducts.vue";
import myAccount    from "@/components/myAccount.vue";
import myOrder from "@/components/myOrder.vue";


const app = createApp(App)
//const PORT = process.env.PORT || 5001
const routes =[
    {path:'/',component: Welcome},
    {path:'/dashboard',component:Dashboard},
    {path:'/allProducts',component:allProducts},
    {path:'/myAccount',component:myAccount},
    {path:'/myOrder',component:myOrder},
]
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})
app.use(ElementPlus)
app.use(router)
//app.listen(PORT, '0.0.0.0', () => console.log(`Listening on ${ PORT }`))
app.mount('#app')


