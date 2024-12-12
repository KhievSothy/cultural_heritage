import { createRouter, createWebHistory } from 'vue-router'

// import Home from "@/pages/Home.vue"
// import About from "@/pages/About.vue"
// import Deals from '@/pages/Historical_Sites.vue'
// import Contact from "@/pages/Museum.vue"
// import Login from "@/pages/Event.vue"
// import Signup from '@/pages/Arts.vue'

import Home from "@/pages/Home.vue"
import Historical_Sites from '@/pages/Historical_Sites.vue'
import Museum from "@/pages/Museum.vue"
import Event from "@/pages/Event.vue"
import Arts from '@/pages/Arts.vue'
import About from "@/pages/About.vue"

const routes = [
    { path: '/', component: Home },
    { path: '/historical_Sites', component: Historical_Sites },
    { path: '/museum', component: Museum },
    { path: '/event', component: Event },
    { path: '/arts', component: Arts },
    { path: '/about', component: About },

    // { path: '/', component: Home },
    // { path: '/about', component: About },
    // { path: '/deals', component: Deals },
    // { path: '/contact', component: Contact },
    // { path: '/login', component: Login },
    // { path: '/signup', component: Signup },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router