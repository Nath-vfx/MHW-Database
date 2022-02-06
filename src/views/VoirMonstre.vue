<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :text="getBackButtonText()" default-href="/"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" v-if="monstre">
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-thumbnail>
              <ion-img :src="villageois.image"></ion-img>
            </ion-thumbnail>
          </ion-col>
          <ion-col>
            <ion-label class="ion-text-wrap">
              <h1>
                {{ monstre.name }}
                <br/>
                {{ monstre.description }}
              </h1>
              <h3>
                <ion-note>{{ monstre.species }}</ion-note>
              </h3>
            </ion-label>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
/*es-lint disable*/
import {useRoute} from 'vue-router';
import {param} from "@/data/param";

import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonLabel,
  IonNote,
  IonPage,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonThumbnail,
  IonImg
} from '@ionic/vue';

import {defineComponent} from 'vue';

import axios from "axios";

export default defineComponent({
  data() {
    return {
      getBackButtonText: () => {
        const win = window as any;
        const mode = win && win.Ionic && win.Ionic.mode;
        return mode === 'ios' ? 'Inbox' : '';
      },
      id: 0,
      personne: null
    }
  },
  mounted() {
    const route = useRoute();
    console.log("mounted fiche id route", route.params.id);
    this.id = parseInt(route.params.id as string, 10);
    console.log("mounted fiche", this.id);

    axios
        .get(param.getMonsters + this.id)
        .then((response) => {
          this.personne = response.data;
          console.log("Villageois : ", this.personne);
        })
  },
  components: {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonLabel,
    IonNote,
    IonPage,
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
    IonThumbnail,
    IonImg
  },
});
</script>

<style scoped>
ion-item {
  --inner-padding-end: 0;
  --background: transparent;
}

ion-label {
  margin-top: 12px;
  margin-bottom: 12px;
}

ion-item h2 {
  font-weight: 600;
}

ion-item .date {
  float: right;
  align-items: center;
  display: flex;
}

ion-item ion-icon {
  font-size: 42px;
  margin-right: 8px;
}

ion-item ion-note {
  font-size: 15px;
  margin-right: 12px;
  font-weight: normal;
}

h1 {
  margin: 0;
  font-weight: bold;
  font-size: 22px;
}

p {
  line-height: 22px;
}

ion-thumbnail {
  width: 150px;
  height: 150px;
}

img {
  width: auto !important;
  height: auto !important;
}

</style>