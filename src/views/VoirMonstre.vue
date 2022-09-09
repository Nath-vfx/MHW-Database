<template>
  <ion-page>
    <ion-header translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
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
            {{ monster.name }}
          </ion-card-title>
          <ion-card-subtitle>
            Type : {{ monster.type }} / Species : {{ monster.species }}
          </ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <ion-card>
            <ion-card-content>
              <img src="../../public/assets/icon/Monsters/teostra.png" :alt="monster.name"
                   v-if="monster.name === 'Teostra'">
              <img src="../../public/assets/icon/Monsters/aptonoth.png" :alt="monster.name"
                   v-if="monster.name === 'Aptonoth'">
              <img src="../../public/assets/icon/Monsters/jagras.png" :alt="monster.name"
                   v-if="monster.name === 'Jagras'">
              <img src="../../public/assets/icon/Monsters/mernos.png" :alt="monster.name"
                   v-if="monster.name === 'Mernos'">
              <img src="../../public/assets/icon/Monsters/vespoid.png" :alt="monster.name"
                   v-if="monster.name === 'Vespoid'">
              <img src="../../public/assets/icon/Monsters/mosswine.png" :alt="monster.name"
                   v-if="monster.name === 'Mosswine'">
              <img src="../../public/assets/icon/Monsters/apceros.png" :alt="monster.name"
                   v-if="monster.name === 'Apceros'">
              <img src="../../public/assets/icon/Monsters/kestodon.png" :alt="monster.name"
                   v-if="monster.name === 'Kestodon'">
              <img src="../../public/assets/icon/Monsters/noios.png" :alt="monster.name"
                   v-if="monster.name === 'Noios'">
              <img src="../../public/assets/icon/Monsters/gajau.png" :alt="monster.name"
                   v-if="monster.name === 'Gajau'">
              <img src="../../public/assets/icon/Monsters/kelbi.png" :alt="monster.name"
                   v-if="monster.name === 'Kelbi'">
              <img src="../../public/assets/icon/Monsters/raphinos.png" :alt="monster.name"
                   v-if="monster.name === 'Raphinos'">
              <img src="../../public/assets/icon/Monsters/shamos.png" :alt="monster.name"
                   v-if="monster.name === 'Shamos'">
              <img src="../../public/assets/icon/Monsters/girros.png" :alt="monster.name"
                   v-if="monster.name === 'Girros'">
              <img src="../../public/assets/icon/Monsters/hornetaur.png" :alt="monster.name"
                   v-if="monster.name === 'Hornetaur'">
              <img src="../../public/assets/icon/Monsters/gastodon.png" :alt="monster.name"
                   v-if="monster.name === 'Gastodon'">
              <img src="../../public/assets/icon/Monsters/barnos.png" :alt="monster.name"
                   v-if="monster.name === 'Barnos'">
              <img src="../../public/assets/icon/Monsters/great-jagras.png" :alt="monster.name"
                   v-if="monster.name === 'Great Jagras'">
              <img src="../../public/assets/icon/Monsters/kulu-ya-ku.png" :alt="monster.name"
                   v-if="monster.name === 'Kulu-Ya-Ku'">
              <img src="../../public/assets/icon/Monsters/pukei-pukei.png" :alt="monster.name"
                   v-if="monster.name === 'Pukei-Pukei'">
              <img src="../../public/assets/icon/Monsters/barroth.png" :alt="monster.name"
                   v-if="monster.name === 'Barroth'">
              <img src="../../public/assets/icon/Monsters/jyuratodus.png" :alt="monster.name"
                   v-if="monster.name === 'Jyuratodus'">
              <img src="../../public/assets/icon/Monsters/tobi-kadachi.png" :alt="monster.name"
                   v-if="monster.name === 'Tobi-Kadachi'">
              <img src="../../public/assets/icon/Monsters/anjanath.png" :alt="monster.name"
                   v-if="monster.name === 'Anjanath'">
              <img src="../../public/assets/icon/Monsters/azure-rathalos.png" :alt="monster.name"
                   v-if="monster.name === 'Azure Rathalos'">
              <img src="../../public/assets/icon/Monsters/bazelgeuse.png" :alt="monster.name"
                   v-if="monster.name === 'Bazelgeuse'">
              <img src="../../public/assets/icon/Monsters/behemoth.png" :alt="monster.name"
                   v-if="monster.name === 'Behemoth'">
              <img src="../../public/assets/icon/Monsters/deviljho.png" :alt="monster.name"
                   v-if="monster.name === 'Deviljho'">
              <img src="../../public/assets/icon/Monsters/diablos.png" :alt="monster.name"
                   v-if="monster.name === 'Diablos'">
              <img src="../../public/assets/icon/Monsters/black-diablos.png" :alt="monster.name"
                   v-if="monster.name === 'Black Diablos'">
              <img src="../../public/assets/icon/Monsters/dodogama.png" :alt="monster.name"
                   v-if="monster.name === 'Dodogama'">
              <img src="../../public/assets/icon/Monsters/great-girros.png" :alt="monster.name"
                   v-if="monster.name === 'Great Girros'">
              <img src="../../public/assets/icon/Monsters/kirin.png" :alt="monster.name"
                   v-if="monster.name === 'Kirin'">
              <img src="../../public/assets/icon/Monsters/kulve-taroth.png" :alt="monster.name"
                   v-if="monster.name === 'Kulve Taroth'">
              <img src="../../public/assets/icon/Monsters/kushala-daora.png" :alt="monster.name"
                   v-if="monster.name === 'Kushala Daora'">
              <img src="../../public/assets/icon/Monsters/lavasioth.png" :alt="monster.name"
                   v-if="monster.name === 'Lavasioth'">
              <img src="../../public/assets/icon/Monsters/legiana.png" :alt="monster.name"
                   v-if="monster.name === 'Legiana'">
              <img src="../../public/assets/icon/Monsters/lunastra.png" :alt="monster.name"
                   v-if="monster.name === 'Lunastra'">
              <img src="../../public/assets/icon/Monsters/nergigante.png" :alt="monster.name"
                   v-if="monster.name === 'Nergigante'">
              <img src="../../public/assets/icon/Monsters/odogaron.png" :alt="monster.name"
                   v-if="monster.name === 'Odogaron'">
              <img src="../../public/assets/icon/Monsters/paolumu.png" :alt="monster.name"
                   v-if="monster.name === 'Paolumu'">
              <img src="../../public/assets/icon/Monsters/radobaan.png" :alt="monster.name"
                   v-if="monster.name === 'Radobaan'">
              <img src="../../public/assets/icon/Monsters/rathalos.png" :alt="monster.name"
                   v-if="monster.name === 'Rathalos'">
              <img src="../../public/assets/icon/Monsters/rathian.png" :alt="monster.name"
                   v-if="monster.name === 'Rathian'">
              <img src="../../public/assets/icon/Monsters/pink-rathian.png" :alt="monster.name"
                   v-if="monster.name === 'Pink Rathian'">
              <img src="../../public/assets/icon/Monsters/tzitzi-ya-ku.png" :alt="monster.name"
                   v-if="monster.name === 'Tzitzi-Ya-Ku'">
              <img src="../../public/assets/icon/Monsters/uragaan.png" :alt="monster.name"
                   v-if="monster.name === 'Uragaan'">
              <img src="../../public/assets/icon/Monsters/vaal-hazak.png" :alt="monster.name"
                   v-if="monster.name === 'Vaal Hazak'">
              <img src="../../public/assets/icon/Monsters/xeno-jiva.png" :alt="monster.name"
                   v-if="monster.name === 'Xeno\'jiiva'">
              <img src="../../public/assets/icon/Monsters/zorah-magdaros.png" :alt="monster.name"
                   v-if="monster.name === 'Zorah Magdaros'">
              <img src="../../public/assets/icon/Monsters/leshen.png" :alt="monster.name"
                   v-if="monster.name === 'Leshen'">
              <img src="../../public/assets/icon/Monsters/ancient-leshen.png" :alt="monster.name"
                   v-if="monster.name === 'Ancient Leshen'">
              <img src="../../public/assets/icon/Monsters/safi-jiva.png" :alt="monster.name"
                   v-if="monster.name === 'Safi\'jiiva'">
              <img src="../../public/assets/icon/Monsters/stygian-zinogre.png" :alt="monster.name"
                   v-if="monster.name === 'Stygian Zinogre'">
              <img src="../../public/assets/icon/Monsters/rajang.png" :alt="monster.name"
                   v-if="monster.name === 'Rajang'">
              <img src="../../public/assets/icon/Monsters/viper-tobi-kadachi.png" :alt="monster.name"
                   v-if="monster.name === 'Viper Tobi-Kadachi'">
              <img src="../../public/assets/icon/Monsters/namielle.png" :alt="monster.name"
                   v-if="monster.name === 'Namielle'">
              <img src="../../public/assets/icon/Monsters/zinogre.png" :alt="monster.name"
                   v-if="monster.name === 'Zinogre'">
            </ion-card-content>
          </ion-card>
          {{ monster.description }}
        </ion-card-content>
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
  IonContent
} from '@ionic/vue';

import {defineComponent} from "vue";

import axios from "axios";

import {param} from "@/data/param";

export default defineComponent({
  data() {
    return {
      monster: {
        name: null,
        type: null,
        species: null,
        description: null
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
    IonContent
  },
  setup() {
    return {}
  },
  mounted() {
    let id = '' + this.$route.params.id;

    let request = param.getMonster.replace('{{id}}', id);
    console.log("request", request);

    axios
        .get(request)
        .then((response) => {
          console.log("monstre", response.data);
          this.monster = response.data;
          console.log("le monstre en question : ", this.monster)
        })
  },
  methods: {}
});

</script>