   <template>
    <div class="bg-teal-lighten-2 text-white text-center py-5">
      <h1>ProbatioVue</h1>
      <h2 v-show="color === true" class="text-red">EL color es rojo</h2>
      <h2 v-show="color === false" class="text-purple">EL color es purpura</h2>

      <v-btn @click="color = !color" class="bg-purple">Color</v-btn>
    </div>
  </template>
<!-- +++++++++++++++++++++++++++++++++++++ -->
<script setup>
import { ref } from 'vue';


let color = ref(true)
</script>
<!-- +++++++++++++++++++++++++++++++++++++ -->
<style scoped></style>
