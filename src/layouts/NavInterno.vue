<template>
    <v-row class="bg-teal-darken-2 pt-4 mt-4" >
      <v-col cols="11" class="text-center">
          <h2><slot name="main"></slot> </h2>
      </v-col>
    <v-col cols="1" >
<v-btn icon @click="toggleDrawer" >
    <img src="../assets/image/home/CERVERA.png" alt="" class="img"></v-btn>
    </v-col>
  </v-row>
  <!-- ********************************************* -->
  <v-navigation-drawer v-model="drawer" class="br-teal-darken-4" theme="dark">
    <v-list>
     <v-list-item link to="/" title="HOME" prepend-icon="mdi-grid"></v-list-item>

        <v-list-item ><v-btn @click="scrollTo('section1')" prepend-icon="mdi-arrange-bring-to-front"><slot name="title1"></slot></v-btn></v-list-item>

        <v-list-item><v-btn @click="scrollTo('section2')" prepend-icon="mdi-store"><slot name="title2"></slot></v-btn></v-list-item>

        <v-list-item><v-btn @click="scrollTo('section3')" prepend-icon="mdi-store"><slot name="title3"></slot></v-btn></v-list-item>

        <v-list-item><v-btn @click="scrollTo('section4')" prepend-icon="mdi-store"><slot name="title4"></slot></v-btn></v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>
<!-- ************************************* -->
<script setup>
  import { ref } from 'vue';

const drawer = ref(false);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
}
// NAV

const scrollTo = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>
<!-- ************************************* -->
<style scoped>

</style>