<template>
  <v-app>
    <v-app-bar
      app
      color="teal-darken-4"
      scroll-target="#scrolling-container"
    >
    
      <!-- botón de menú lateral -->
      <v-btn icon @click="toggleDrawer">📘</v-btn>
      <v-app-bar-title>OPUS</v-app-bar-title>
      <!-- botones de enlace a páginas -->
      <!-- home -->
      <v-app-bar-nav-icon>
        <v-btn to="/">
          <img src="./assets/image/home/CERVERA.png" alt="CERVERA" class="img">
        </v-btn>
      </v-app-bar-nav-icon>
      <!-- homeFront -->
      <v-app-bar-nav-icon class="ma-14">
        <v-btn icon="mdi-arrange-bring-to-front" to=""></v-btn>
        <a href="https://translate.google.com.pe/?sl=es&tl=en&op=translate" class="text-white" target="_blank">Traductor</a>
        
      </v-app-bar-nav-icon>
      <!-- Back -->
      <v-app-bar-nav-icon class="ma-14">
        <v-btn icon="mdi-arrange-send-to-back" to=""></v-btn>
        <a href="https://chatgpt.com/?oai-dm=1" class="text-white" target="_blank"> Chat GPT</a>
      </v-app-bar-nav-icon>
      <!-- Data -->
      <v-app-bar-nav-icon class="ma-14">
        <v-btn icon="mdi-database-cog-outline" to=""></v-btn>
        <a href="https://vuetifyjs.com/en/" class="text-white" target="_blank">  Vuetify</a>
       
      </v-app-bar-nav-icon>
      <!-- Store -->
      <v-app-bar-nav-icon class="ma-14">
        <v-btn icon="mdi-store" to=""></v-btn>
        <a href="https://pictogrammers.com/library/mdi/" class="text-white" target="_blank">M Design</a>
      </v-app-bar-nav-icon>
    </v-app-bar>
    <!-- /////////////////////////////////////// -->
    <!-- Navigation Drawer -->
    <v-navigation-drawer v-model="drawer" color="teal-darken-4" dark>
      <v-list-item link to="/homeFront" title=" FRONT" prepend-icon="mdi-grid" @click="handle"></v-list-item>
      <v-list-item link to="/" title="BACK" prepend-icon="mdi-store" @click="handle"></v-list-item>
      <v-list-item link to="/" title="DATA" prepend-icon="mdi-database-cog-outline" @click="handle"></v-list-item>
      <v-list-item link to="/" title="FRAMEWORK" prepend-icon="mdi-database-cog-outline" @click="handle"></v-list-item>
      <v-list-item link to="/" title="STUDIUM" prepend-icon="mdi-arrange-send-to-back" @click="handle"></v-list-item>
      <v-list-item link to="/" title="PROYECTOS" prepend-icon="mdi-arrange-bring-to-front"  @click="handle"></v-list-item>
      <v-list-item link to="/" title="STORE" prepend-icon="mdi-cart"  @click="handle"></v-list-item>
      <v-list-item link to="/" title="PRÁCTICAS" prepend-icon="mdi-briefcase-outline"  @click="handle"></v-list-item>
    </v-navigation-drawer>
    <!-- Main y router -->
    <v-main>
      <div id="scrolling-container">
        <router-view />
      </div>
     
    </v-main>
  </v-app>

</template>
<!-- ********************************************************* -->
<script setup>
import { ref } from 'vue';

// navigation-drawer
const drawer = ref(false);
const toggleDrawer = () => {
  drawer.value = !drawer.value;
 
}
const handle = () => {
  drawer.value = false;
};
</script>

<style scoped>
.fixed-top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000
}
#scrolling-container {
  height: 100vh;
  overflow-y: auto;
}

.v-app-bar{
border: 1px solid white;
border-radius: 1em;
}
</style>