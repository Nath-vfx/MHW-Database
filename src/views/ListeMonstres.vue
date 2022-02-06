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
                      :detail="false">
              <ion-icon :icon="pawOutline"></ion-icon>
              &nbsp; {{monster.name}}
            </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage, IonToolbar, IonHeader, IonButtons, IonMenuButton, IonTitle, IonContent, IonCard, IonCardHeader,
  IonCardTitle, IonCardSubtitle, IonCardContent, IonIcon, IonItem, IonList
} from '@ionic/vue';

import {pawOutline} from 'ionicons/icons'

import {defineComponent} from "vue";

import {param} from "@/data/param";

import axios from "axios";

export default defineComponent({
  data() {
    return {
      liste:[]
    }
  },
  components: {
    IonPage, IonToolbar, IonHeader, IonButtons, IonMenuButton, IonTitle, IonContent, IonCard, IonCardHeader,
    IonCardTitle, IonCardSubtitle, IonCardContent, IonIcon, IonItem, IonList
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
    })
  },
  methods: {
    refresh: (ev: CustomEvent) => {
      setTimeout(() => {
        ev.detail.complete();
      }, 3000);
    }
  },

});
</script>

<style scoped>

</style>