   <template>
    <div class="bg-teal-lighten-2 text-white text-center py-5">
      <h1>ProbatioVue</h1>
      <h2>Ejemplo de V-for</h2>
      <ul>
        <li v-for="(nombre, index) in nombres" :key="index">{{ nombre }}</li>
      </ul>
    </div>
  </template>
<!-- +++++++++++++++++++++++++++++++++++++ -->
<script setup>

let nombres = ['Juan', 'Pedro', 'Maria', 'Jose', 'Luis', 'Ana', 'Laura', 'Carlos', 'Javier', 'Sofia'];

</script>
<!-- +++++++++++++++++++++++++++++++++++++ -->
<style scoped></style>
