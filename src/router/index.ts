import {createRouter, createWebHistory} from '@ionic/vue-router';
import {RouteRecordRaw} from 'vue-router';

import HomePage from "@/views/HomePage.vue";
import SearchPage from "@/views/SearchPage.vue";
import Monstres from "@/views/ListeMonstres.vue";
import ListeArmes from "@/views/ListeArmes.vue";
import ListeArmures from "@/views/ListeArmures.vue";
import LeMonstre from "@/views/VoirMonstre.vue";
import LArme from "@/views/VoirArme.vue";


const routes: Array<RouteRecordRaw> = [
    {path: '/', name: 'Accueil', component: HomePage},
    {path: '/listeMonstres', name: 'ListeMonstres', component: Monstres},
    {path: '/monster/:id', name: 'Monstre', component: LeMonstre},
    {path: '/listeArmes', name: 'ListeArmes', component: ListeArmes},
    {path: '/weapon/:id', name: 'Arme', component: LArme},
    {path: '/listeArmures', name: 'ListeArmures', component: ListeArmures},
    {path: '/rechercher', name: 'Rechercher', component: SearchPage}
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
