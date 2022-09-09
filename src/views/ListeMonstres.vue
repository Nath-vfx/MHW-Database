<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Liste des monstres</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Liste des Monstres</ion-card-title>
          <ion-card-subtitle>Les monstres disponibles</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <ion-list>
            <ion-item v-for="monster in liste" :key="monster.id" :routerLink="'/monster/' + monster.id"
                      :detail="false" @click="fiche(monster.id)">
              <img src="../../public/assets/icon/Monsters/teostra.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'teostra'">
              <img src="../../public/assets/icon/Monsters/aptonoth.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'aptonoth'">
              <img src="../../public/assets/icon/Monsters/jagras.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'jagras'">
              <img src="../../public/assets/icon/Monsters/mernos.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'mernos'">
              <img src="../../public/assets/icon/Monsters/vespoid.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'vespoid'">
              <img src="../../public/assets/icon/Monsters/mosswine.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'mosswine'">
              <img src="../../public/assets/icon/Monsters/apceros.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'apceros'">
              <img src="../../public/assets/icon/Monsters/kestodon.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'kestodon'">
              <img src="../../public/assets/icon/Monsters/noios.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'noios'">
              <img src="../../public/assets/icon/Monsters/gajau.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'gajau'">
              <img src="../../public/assets/icon/Monsters/kelbi.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'kelbi'">
              <img src="../../public/assets/icon/Monsters/raphinos.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'raphinos'">
              <img src="../../public/assets/icon/Monsters/shamos.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'shamos'">
              <img src="../../public/assets/icon/Monsters/girros.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'girros'">
              <img src="../../public/assets/icon/Monsters/hornetaur.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'hornetaur'">
              <img src="../../public/assets/icon/Monsters/gastodon.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'gastodon'">
              <img src="../../public/assets/icon/Monsters/barnos.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'barnos'">
              <img src="../../public/assets/icon/Monsters/great-jagras.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'great jagras'">
              <img src="../../public/assets/icon/Monsters/kulu-ya-ku.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'kulu-ya-ku'">
              <img src="../../public/assets/icon/Monsters/pukei-pukei.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'pukei-pukei'">
              <img src="../../public/assets/icon/Monsters/barroth.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'barroth'">
              <img src="../../public/assets/icon/Monsters/jyuratodus.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'jyuratodus'">
              <img src="../../public/assets/icon/Monsters/tobi-kadachi.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'tobi-kadachi'">
              <img src="../../public/assets/icon/Monsters/anjanath.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'anjanath'">
              <img src="../../public/assets/icon/Monsters/azure-rathalos.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'azure rathalos'">
              <img src="../../public/assets/icon/Monsters/bazelgeuse.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'bazelgeuse'">
              <img src="../../public/assets/icon/Monsters/behemoth.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'behemoth'">
              <img src="../../public/assets/icon/Monsters/deviljho.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'deviljho'">
              <img src="../../public/assets/icon/Monsters/diablos.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'diablos'">
              <img src="../../public/assets/icon/Monsters/black-diablos.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'black diablos'">
              <img src="../../public/assets/icon/Monsters/dodogama.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'dodogama'">
              <img src="../../public/assets/icon/Monsters/great-girros.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'great girros'">
              <img src="../../public/assets/icon/Monsters/kirin.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'kirin'">
              <img src="../../public/assets/icon/Monsters/kulve-taroth.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'kulve taroth'">
              <img src="../../public/assets/icon/Monsters/kushala-daora.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'kushala daora'">
              <img src="../../public/assets/icon/Monsters/lavasioth.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'lavasioth'">
              <img src="../../public/assets/icon/Monsters/legiana.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'legiana'">
              <img src="../../public/assets/icon/Monsters/lunastra.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'lunastra'">
              <img src="../../public/assets/icon/Monsters/nergigante.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'nergigante'">
              <img src="../../public/assets/icon/Monsters/odogaron.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'odogaron'">
              <img src="../../public/assets/icon/Monsters/paolumu.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'paolumu'">
              <img src="../../public/assets/icon/Monsters/radobaan.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'radobaan'">
              <img src="../../public/assets/icon/Monsters/rathalos.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'rathalos'">
              <img src="../../public/assets/icon/Monsters/rathian.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'rathian'">
              <img src="../../public/assets/icon/Monsters/pink-rathian.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'pink rathian'">
              <img src="../../public/assets/icon/Monsters/tzitzi-ya-ku.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'tzitzi-ya-ku'">
              <img src="../../public/assets/icon/Monsters/uragaan.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'uragaan'">
              <img src="../../public/assets/icon/Monsters/vaal-hazak.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'vaal hazak'">
              <img src="../../public/assets/icon/Monsters/xeno-jiva.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'xeno\'jiiva'">
              <img src="../../public/assets/icon/Monsters/zorah-magdaros.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'zorah magdaros'">
              <img src="../../public/assets/icon/Monsters/leshen.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'leshen'">
              <img src="../../public/assets/icon/Monsters/ancient-leshen.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'ancient leshen'">
              <img src="../../public/assets/icon/Monsters/safi-jiva.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'safi\'jiiva'">
              <img src="../../public/assets/icon/Monsters/stygian-zinogre.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'stygian zinogre'">
              <img src="../../public/assets/icon/Monsters/rajang.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'rajang'">
              <img src="../../public/assets/icon/Monsters/viper-tobi-kadachi.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'viper tobi-kadachi'">
              <img src="../../public/assets/icon/Monsters/namielle.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'namielle'">
              <img src="../../public/assets/icon/Monsters/zinogre.png" :alt="monster.name"
                   v-if="monster.name.toLowerCase() === 'zinogre'">
              &nbsp;

              &nbsp; {{ monster.name }}

            </ion-item>
            <div v-if="!liste.length > 0">
              <ion-item v-for="item in 20">
                <ion-thumbnail>
                  <ion-skeleton-text animated></ion-skeleton-text>
                </ion-thumbnail>
                &nbsp;
                <ion-skeleton-text animated style="width: 30%"></ion-skeleton-text>
              </ion-item>
            </div>
          </ion-list>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonToolbar,
  IonHeader,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonIcon,
  IonItem,
  IonList,
  IonThumbnail,
  IonSkeletonText,
  IonFab,
  IonFabButton
} from '@ionic/vue';

import {pawOutline} from 'ionicons/icons'

import {defineComponent} from "vue";

import {param} from "@/data/param";


import axios from "axios";

export default defineComponent({
  data() {
    return {
      liste: []
    }
  },
  components: {
    IonPage,
    IonToolbar,
    IonHeader,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonIcon,
    IonItem,
    IonList,
    IonThumbnail,
    IonSkeletonText,
    IonFab,
    IonFabButton
  },
  setup() {
    return {
      pawOutline
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  mounted() {
    console.log('mounted Monsters', param.getMonsters);
    axios
        .get(param.getMonsters)
        .then((response) => {
          console.log("Reponse : ", response.data);
          this.liste = response.data;
          console.log("Liste des monstres : ", this.liste)
        });
  },
  methods: {
    fiche(id: number) {
      this.$router.push({name: 'Monstre', params: {id}})
    },
  }

});
</script>

<style scoped>

img {
  width: 60px;
}

</style>