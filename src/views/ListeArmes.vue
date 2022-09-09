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
          <ion-card-title>Liste des différents types d'armes</ion-card-title>
          <ion-card-subtitle>Les différents types disponibles</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <ion-list>
            <ion-item v-for="weapon in weaponList" :key="weapon.id" :routerLink="'/listeSpeArmes/' + weapon.type"
                      :detail="false" @click="fiche(weapon.type)">
              <ion-thumbnail>
                <ion-fab>
                  <ion-fab-button color="success">
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
        <div v-if="!weaponList.length > 0">
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
      icon: null,
      weaponList: [
        {
          id: 1,
          type: 'great-sword',
          name: 'Great Sword'
        },
        {
          id: 2,
          type: 'long-sword',
          name: 'Long Sword'
        },
        {
          id: 3,
          type: 'sword-and-shield',
          name: 'Sword and Shield'
        },
        {
          id: 4,
          type: 'dual-blades',
          name: 'Dual Blades'
        },
        {
          id: 5,
          type: 'hammer',
          name: 'Hammer'
        },
        {
          id: 6,
          type: 'hunting-horn',
          name: 'Hunting Horn'
        },
        {
          id: 7,
          type: 'lance',
          name: 'Lance'
        },
        {
          id: 8,
          type: 'gunlance',
          name: 'Gunlance'
        },
        {
          id: 9,
          type: 'switch-axe',
          name: 'Switch Axe'
        },
        {
          id: 10,
          type: 'charge-blade',
          name: 'Charge Blade'
        },
        {
          id: 11,
          type: 'insect-glaive',
          name: 'Insect Glaive'
        },
        {
          id: 12,
          type: 'light-bowgun',
          name: 'Light Bowgun'
        },
        {
          id: 13,
          type: 'heavy-bowgun',
          name: 'Heavy Bowgun'
        },
        {
          id: 14,
          type: 'bow',
          name: 'Bow'
        }

      ]

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
    //
    // console.log('mounted Weapons', param.getWeapons);
    //
    // axios
    //     .get(param.getWeapons)
    //     .then((response) => {
    //       console.log("Reponse : ", response.data);
    //       this.liste = response.data;
    //       console.log("Liste des armes : ", this.liste)
    //     });
  },
  methods: {
    fiche(type: string) {
      this.$router.push({name: 'ListeSpeArmes', params: {type}})
    }
  }

});
</script>

<style scoped>

ion-fab-button > img {
  width: 40px;
  height: auto;
}


</style>