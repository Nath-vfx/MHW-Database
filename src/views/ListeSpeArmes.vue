<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ $route.params.type }} list</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <ion-card-content>
          <ion-list>
            <ion-item v-for="weapon in liste" :key="weapon.id" v-show="weapon.type === $route.params.type"
                      :routerLink="'/weapon/' + weapon.id" :detail="false" @click="fiche(weapon.id)">
              <img src="../../public/assets/icon/Weapons/great-sword.png" :alt="weapon.name"
                   v-if="weapon.type === 'great-sword'">
              <img src="../../public/assets/icon/Weapons/long-sword.png" :alt="weapon.name"
                   v-else-if="weapon.type === 'long-sword'">
              <img src="../../public/assets/icon/Weapons/sword-and-shield.png" :alt="weapon.name"
                   v-else-if="weapon.type === 'sword-and-shield'">
              <img src="../../public/assets/icon/Weapons/dual-blades.png" :alt="weapon.name"
                   v-else-if="weapon.type === 'dual-blades'">
              <img src="../../public/assets/icon/Weapons/hammer.png" :alt="weapon.name"
                   v-else-if="weapon.type === 'hammer'">
              <img src="../../public/assets/icon/Weapons/hunting-horn.png" :alt="weapon.name"
                   v-else-if="weapon.type === 'hunting-horn'">
              <img src="../../public/assets/icon/Weapons/lance.png" :alt="weapon.name"
                   v-else-if="weapon.type === 'lance'">
              <img src="../../public/assets/icon/Weapons/gunlance.png" :alt="weapon.name"
                   v-else-if="weapon.type === 'gunlance'">
              <img src="../../public/assets/icon/Weapons/switch-axe.png" :alt="weapon.name"
                   v-else-if="weapon.type === 'switch-axe'">
              <img src="../../public/assets/icon/Weapons/charge-blade.png" :alt="weapon.name"
                   v-else-if="weapon.type === 'charge-blade'">
              <img src="../../public/assets/icon/Weapons/insect-glaive.png" :alt="weapon.name"
                   v-else-if="weapon.type === 'insect-glaive'">
              <img src="../../public/assets/icon/Weapons/light-bowgun.png" :alt="weapon.name"
                   v-else-if="weapon.type === 'light-bowgun'">
              <img src="../../public/assets/icon/Weapons/heavy-bowgun.png" :alt="weapon.name"
                   v-else-if="weapon.type === 'heavy-bowgun'">
              <img src="../../public/assets/icon/Weapons/bow.png" :alt="weapon.name"
                   v-else-if="weapon.type === 'bow'">
              <ion-buttons>
                <h6>
                  &nbsp;
                  {{ weapon.name }}
                </h6>
              </ion-buttons>
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
  IonImg,
  IonSkeletonText,
  IonFab,
  IonFabButton
} from '@ionic/vue';

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
    IonImg,
    IonSkeletonText,
    IonFab,
    IonFabButton
  },
  setup() {
    return {}
  },
  mounted() {
    axios.get(param.getWeapons)
        .then((response) => {
          console.log("Reponse : ", response.data);
          this.liste = response.data;
          console.log("response", this.liste)
        })
  },
  methods: {
    fiche(id: number) {
      this.$router.push({name: 'Arme', params: {id}})
    }
  }
})
</script>

<style scoped>

img {
  width: 60px;
}

</style>