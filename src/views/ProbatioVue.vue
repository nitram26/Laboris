<template>
  <div class="bg-teal-lighten-2 text-white  ">
    <h1 class="text-center">V-Bind</h1>
    <div class="uno">
      <h3 :class="{ tres: active, dos: !active }">Cambia de Formato</h3>

      <v-btn @click="active = !active" class="bg-purple">Botón Formato</v-btn>
    </div>
  </div>
</template>
<!-- ++++++++++++++++++++++++++++++++++++++++++ -->
<script setup>
import { ref } from 'vue';

const active = ref(true);

</script>
<!-- ++++++++++++++++++++++++++++++++++++++++++ -->
<style scoped>
.uno {
  padding: 20px;
  border-radius: 8px;
  margin-left: 40%;
  color: white;
}

.tres {
  color: #ff0000;
  font-size: 20px;
  font-weight: bold;
}

.dos {
  color: blue;
  font-size: 20px;
  font-weight: bold;
}
</style>
