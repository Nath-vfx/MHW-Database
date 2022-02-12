<template>
  <ion-page>
    <ion-header translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="listeMonstres" color="primary"></ion-back-button>
        </ion-buttons>
        <ion-title>Monstre</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <ion-card-header>
          <ion-card-title>
            {{monstre.name}}
          </ion-card-title>
          <ion-card-subtitle>
            Type : {{monstre.type}} / Species : {{monstre.species}}
          </ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          {{monstre.description}}
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">

import { IonPage, IonToolbar, IonButtons, IonTitle, IonHeader, IonMenuButton, IonBackButton, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCardContent, IonCard, IonContent } from '@ionic/vue';

import {} from 'ionicons/icons';

import {defineComponent} from "vue";

import axios from "axios";

import {param} from "@/data/param";

export default defineComponent({
  data() {
    return {
      monstre:{
        name: null,
        type: null,
        species: null,
        description: null
      }
    }
  },
  components: {
    IonPage, IonToolbar, IonButtons, IonTitle, IonHeader, IonMenuButton, IonBackButton, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCardContent, IonCard, IonContent
  },
  setup(){
    return{}
  },
  mounted() {
    let id = ''+this.$route.params.id;

    let request = param.getMonster.replace('{{id}}', id);
    console.log("request", request);

    axios
    .get(request)
    .then((response)=> {
      console.log("monstre", response.data);
      this.monstre = response.data;
      console.log("le monstre en question : ", this.monstre)
    })


  }
});

</script>