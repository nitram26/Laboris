<template>
  <v-app class="probatio">
    <v-container class="bg-teal ma-5 pl-15">
      <h1>PROBATIO</h1>
      <h2>{{ usuario }}</h2>
    </v-container>
  </v-app>
</template>
<!-- ************************************* -->
<script setup>
import { computed, ref } from 'vue';


let precio = 1230
let descuento = precio * 0.10

let usuario = ref(computed(() => { return precio - descuento }))

</script>
<!-- ************************************* -->
<style scoped>
.probatio {
  background-color: antiquewhite;
  height: 25em;
}
</style>