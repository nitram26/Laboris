<template>
  <div class="bg-teal-lighten-2 text-white text-center py-5">
    <h1>ProbatioVue</h1>
    <h2>{{ mensaje }}</h2>
  </div>
</template>
<!-- +++++++++++++++++++++++++++++++++++++ -->
<script setup>

let num1 = 10
let num2 = 20
let mensaje = `El resultado de la suma ${num1} + ${num2} es: ${num1 + num2}`
</script>
<!-- +++++++++++++++++++++++++++++++++++++ -->
<style scoped></style>
