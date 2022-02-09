<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Liste des armures</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Liste des Armures</ion-card-title>
          <ion-card-subtitle>Les armures disponibles</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <ion-list>
            <ion-item v-for="armorSet in liste" :key="armorSet.id" @click="fiche(armorSet.id)">
              &nbsp; {{armorSet.name}}
              &nbsp;
                <ion-card-subtitle>Rank : {{armorSet.rank}}</ion-card-subtitle>

            </ion-item>
            <div v-if="!liste.length > 0">
              <ion-item v-for="item in 20">
                &nbsp; <ion-skeleton-text animated style="width: 6vw"></ion-skeleton-text>
                &nbsp;
                <ion-card-subtitle><ion-skeleton-text animated style="width: 10vw"></ion-skeleton-text></ion-card-subtitle>

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
  IonPage, IonToolbar, IonHeader, IonButtons, IonMenuButton, IonTitle, IonContent, IonCard, IonCardHeader,
  IonCardTitle, IonCardSubtitle, IonCardContent, IonImg, IonItem, IonList, IonSkeletonText
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
    IonCardTitle, IonCardSubtitle, IonCardContent, IonImg, IonItem, IonList, IonSkeletonText
  },
  setup() {
    return {
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  mounted() {
    console.log('mounted Armor', param.getWeapons);

    axios
    .get(param.getArmorsSets)
    .then((response) => {
      console.log("Reponse : ", response.data);
      this.liste = response.data;
      console.log("Liste des armures : ", this.liste)
    })
  },
  methods: {
    fiche(id:number){
      this.$router.push({name: 'Armure', params: {id} })
    }
  }

});
</script>

<style scoped>
#imgIcon {
  width: 80px;
  height: auto;
  object-fit: cover;
}


</style>