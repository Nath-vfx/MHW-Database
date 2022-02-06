<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Accueil</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Monster Hunter World</ion-card-title>
          <ion-card-subtitle>Capcom</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          Utilisation de l'API MHW-DB
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage, IonToolbar, IonHeader, IonButtons, IonMenuButton, IonTitle, IonContent, IonCard, IonCardHeader,
  IonCardTitle, IonCardSubtitle, IonCardContent
} from '@ionic/vue';

import {} from 'ionicons/icons'

import {defineComponent} from "vue";

export default defineComponent({
  data() {
    return {}
  },
  components: {
    IonPage, IonToolbar, IonHeader, IonButtons, IonMenuButton, IonTitle, IonContent, IonCard, IonCardHeader,
    IonCardTitle, IonCardSubtitle, IonCardContent
  },
  setup() {
    return {}
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  mounted() {

  },
  methods: {}

});
</script>

<style scoped>

</style>