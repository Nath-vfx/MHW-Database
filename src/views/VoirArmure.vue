<template>
  <ion-page>
    <ion-header translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button color="primary"></ion-back-button>
        </ion-buttons>
        <ion-title>Arme</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <ion-card-header>
          <ion-item slot="start">
          </ion-item>
          <ion-card-title>
            {{ armor.name }}
          </ion-card-title>
          <ion-card-subtitle>
            Rank : {{ armor.rank }}
          </ion-card-subtitle>
          <ion-card-content>
            <ion-row>
              <ion-col>
                Male Armor parts :
                <ion-row v-for="piece in armor.pieces" :key="piece.id">
                  <img :src="piece.assets.imageMale" alt="">
                </ion-row>
              </ion-col>
              <ion-col>
                Female Armor parts :
                <ion-row v-for="piece in armor.pieces" :key="piece.id">
                  <img :src="piece.assets.imageFemale" alt="">
                </ion-row>
              </ion-col>
            </ion-row>
            <ion-card>
              <ion-card-header>
                Talents
              </ion-card-header>
              <ion-card-content>
                <ion-col v-for="piece in armor.pieces" :key="piece.id">
                  <ion-row v-for="skill in piece.skills" :key="skill.id">
                    <ion-card color="light">
                      <ion-card-header><ion-button color="success" size="small">{{ skill.skillName }}</ion-button>
                        <br> Lvl : {{ skill.level }}</ion-card-header>
                      <ion-card-content>{{ skill.description }}</ion-card-content>
                    </ion-card>
                  </ion-row>
                </ion-col>
              </ion-card-content>
            </ion-card>


          </ion-card-content>
        </ion-card-header>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">

import {
  IonPage,
  IonToolbar,
  IonButtons,
  IonTitle,
  IonHeader,
  IonMenuButton,
  IonBackButton,
  IonCardTitle,
  IonCardSubtitle,
  IonCardHeader,
  IonCardContent,
  IonCard,
  IonContent,
  IonImg,
  IonItem,
  IonRow,
  IonCol
} from '@ionic/vue';

import {} from 'ionicons/icons';

import {defineComponent} from "vue";

import axios from "axios";

import {param} from "@/data/param";

export default defineComponent({
  data() {
    return {
      armor: {
        name: null,
        rank: null,
        pieces: []
      }
    }
  },
  components: {
    IonPage,
    IonToolbar,
    IonButtons,
    IonTitle,
    IonHeader,
    IonMenuButton,
    IonBackButton,
    IonCardTitle,
    IonCardSubtitle,
    IonCardHeader,
    IonCardContent,
    IonCard,
    IonContent,
    IonImg,
    IonItem,
    IonRow,
    IonCol
  },
  setup() {
    return {}
  },
  mounted() {
    let id = '' + this.$route.params.id;

    let request = param.getArmorSet.replace('{{id}}', id);
    console.log("request", request);

    axios
        .get(request)
        .then((response) => {
          console.log("armure", response.data);
          this.armor = response.data;
          console.log("l'armure en question : ", this.armor)
        })

  }
});

</script>