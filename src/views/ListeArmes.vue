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
              <ion-item v-for="weapon in liste" :key="weapon.id" :routerLink="'/weapon/' + weapon.id"
                        :detail="false" @click="fiche(weapon.id)">
                <ion-thumbnail>

                </ion-thumbnail>
                <ion-buttons >
                  {{weapon.name}}
                </ion-buttons>
                &nbsp;
              </ion-item>
            </ion-list>
          </ion-card-content>
        <div v-if="!liste.length > 0">
          <ion-card-content>
            <ion-list>
              <ion-item v-for="item in 20">
                <ion-thumbnail slot="start">
                  <ion-skeleton-text animated style="width: 100%"></ion-skeleton-text>
                </ion-thumbnail>
                  <p>
                    <ion-skeleton-text animated style="width: 30vw"></ion-skeleton-text>
                  </p>
              </ion-item>
            </ion-list>
          </ion-card-content>
        </div>

      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage, IonToolbar, IonHeader, IonButtons, IonMenuButton, IonTitle, IonContent, IonCard, IonCardHeader,
  IonCardTitle, IonCardSubtitle, IonCardContent, IonIcon, IonItem, IonList, IonThumbnail, IonImg, IonSkeletonText
} from '@ionic/vue';

import {defineComponent} from "vue";

import {param} from "@/data/param";

import axios from "axios";

export default defineComponent({
  data() {
    return {
      liste:[],
      icon: null
    }
  },
  components: {
    IonPage, IonToolbar, IonHeader, IonButtons, IonMenuButton, IonTitle, IonContent, IonCard, IonCardHeader,
    IonCardTitle, IonCardSubtitle, IonCardContent, IonIcon, IonItem, IonList, IonThumbnail, IonImg, IonSkeletonText
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
        });
  },
  methods: {
    fiche(id:number){
      this.$router.push({name: 'Arme', params: {id} })
    }
  }

});
</script>

<style scoped>

</style>