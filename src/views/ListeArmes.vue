<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Liste des armes</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Liste des Armes</ion-card-title>
          <ion-card-subtitle>Les armes disponibles</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <ion-list>
            <ion-item v-for="weapon in liste" :key="weapon.id">
              <ion-img id="imgIcon" :src="weapon.assets.icon"></ion-img>
              {{weapon.name}}
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
  IonCardTitle, IonCardSubtitle, IonCardContent, IonImg, IonItem, IonList
} from '@ionic/vue';


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
    IonCardTitle, IonCardSubtitle, IonCardContent, IonImg, IonItem, IonList
  },
  setup() {
    return {
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  mounted() {
    console.log('mounted Weapons', param.getWeapons);

    axios
    .get(param.getWeapons)
    .then((response) => {
      console.log("Reponse : ", response.data);
      this.liste = response.data;
      console.log("Liste des armes : ", this.liste)
    })
  },
  methods: {}

});
</script>

<style scoped>
#imgIcon {
  width: 40px;
  height: auto;
  object-fit: cover;
}


</style>