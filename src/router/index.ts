import {createRouter, createWebHistory} from '@ionic/vue-router';
import {RouteRecordRaw} from 'vue-router';

import HomePage from "@/views/HomePage.vue";
import SearchPage from "@/views/SearchPage.vue";
import Monstres from "@/views/ListeMonstres.vue";
import ListeArmes from "@/views/ListeArmes.vue";
import ListeArmures from "@/views/ListeArmures.vue";
import LeMonstre from "@/views/VoirMonstre.vue";


const routes: Array<RouteRecordRaw> = [
    {path: '/', name: 'Accueil', component: HomePage},
    {path: '/listeMonstres', name: 'ListeMonstres', component: Monstres},
    {path: '/monstre/:name', name: 'Monstre', component: LeMonstre},
    {path: '/listeArmes', name: 'ListeArmes', component: ListeArmes},
    {path: '/listeArmures', name: 'ListeArmures', component: ListeArmures},
    {path: '/rechercher', name: 'Rechercher', component: SearchPage}
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
