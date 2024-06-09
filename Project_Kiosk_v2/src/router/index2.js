import {createRouter, createWebHistory} from "vue-router";
import ButtonHome from '@/views/ButtonHome.vue';
import Popupivew from "@/views/Popupivew.vue";
import Popupivew2 from "@/views/Popupivew2.vue";
import RootRouter from '@/views/RootRouter.vue';


const router = createRouter({

    history : createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: ButtonHome
        },
        {
            path: '/popup1',
            name: 'popup1',
            component: Popupivew
        },
        {
            path: '/popup2',
            name: 'popup2',
            component: Popupivew2
        }


    ]

});

export default router;
