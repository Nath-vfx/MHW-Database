<template>
  <ion-page>
    <ion-header translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Arme</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <ion-card-header>
          <ion-item slot="start">
            <img :src="weapon.assets.icon">
          </ion-item>
          <ion-card-title>
            {{weapon.name}}
          </ion-card-title>
          <ion-card-subtitle>
            Type : {{weapon.type}} / Rarity : {{weapon.rarity}}
          </ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <img :src="weapon.assets.image" :alt="weapon.name">
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">

import { IonPage, IonToolbar, IonButtons, IonTitle, IonHeader, IonMenuButton, IonBackButton, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCardContent, IonCard, IonContent, IonImg, IonItem } from '@ionic/vue';

import {} from 'ionicons/icons';

import {defineComponent} from "vue";

import axios from "axios";

import {param} from "@/data/param";

export default defineComponent({
  data() {
    return {
      weapon:{
        name: null,
        type: null,
        rarity: null,
        assets: {
          image: null,
          icon: null
        }
      }
    }
  },
  components: {
    IonPage, IonToolbar, IonButtons, IonTitle, IonHeader, IonMenuButton, IonBackButton, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCardContent, IonCard, IonContent, IonImg, IonItem
  },
  setup(){
    return{}
  },
  mounted() {
    let id = ''+this.$route.params.id;

    let request = param.getWeapon.replace('{{id}}', id);
    console.log("request", request);

    axios
    .get(request)
    .then((response)=> {
      console.log("arme", response.data);
      this.weapon = response.data;
      console.log("l'arme en question : ", this.weapon)
    })

  }
});

</script>