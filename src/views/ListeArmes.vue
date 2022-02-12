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
                <ion-fab>
                  <ion-fab-button color="success">
                    <img src="../../public/assets/icon/Weapons/great-sword.png" :alt="weapon.name" v-if="weapon.type === 'great-sword'">
                    <img src="../../public/assets/icon/Weapons/long-sword.png" :alt="weapon.name" v-else-if="weapon.type === 'long-sword'">
                    <img src="../../public/assets/icon/Weapons/sword-and-shield.png" :alt="weapon.name" v-else-if="weapon.type === 'sword-and-shield'">
                    <img src="../../public/assets/icon/Weapons/dual-blades.png" :alt="weapon.name" v-else-if="weapon.type === 'dual-blades'">
                    <img src="../../public/assets/icon/Weapons/hammer.png" :alt="weapon.name" v-else-if="weapon.type === 'hammer'">
                    <img src="../../public/assets/icon/Weapons/hunting-horn.png" :alt="weapon.name" v-else-if="weapon.type === 'hunting-horn'">
                    <img src="../../public/assets/icon/Weapons/lance.png" :alt="weapon.name" v-else-if="weapon.type === 'lance'">
                    <img src="../../public/assets/icon/Weapons/gunlance.png" :alt="weapon.name" v-else-if="weapon.type === 'gunlance'">
                    <img src="../../public/assets/icon/Weapons/switch-axe.png" :alt="weapon.name" v-else-if="weapon.type === 'switch-axe'">
                    <img src="../../public/assets/icon/Weapons/charge-blade.png" :alt="weapon.name" v-else-if="weapon.type === 'charge-blade'">
                    <img src="../../public/assets/icon/Weapons/insect-glaive.png" :alt="weapon.name" v-else-if="weapon.type === 'insect-glaive'">
                    <img src="../../public/assets/icon/Weapons/light-bowgun.png" :alt="weapon.name" v-else-if="weapon.type === 'light-bowgun'">
                    <img src="../../public/assets/icon/Weapons/heavy-bowgun.png" :alt="weapon.name" v-else-if="weapon.type === 'heavy-bowgun'">
                    <img src="../../public/assets/icon/Weapons/bow.png" :alt="weapon.name" v-else-if="weapon.type === 'bow'">
                  </ion-fab-button>
                </ion-fab>
              </ion-thumbnail>
              <ion-buttons>
                <h6>
                  &nbsp;
                  {{ weapon.name }}
                </h6>
              </ion-buttons>

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
      liste: [],
      icon: null
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
    fiche(id: number) {
      this.$router.push({name: 'Arme', params: {id}})
    }
  }

});
</script>

<style scoped>
@font-face {
  font-family: MonsterHunter;
  src: url("../../public/assets/Fonts/monsterhunter.ttf");
}

ion-fab-button > img {
  width: 38px;
  height: auto;
}

h6 {
  font-weight: normal;
  font-size: 2rem;
  font-family: MonsterHunter, serif;
}

</style>