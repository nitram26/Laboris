<template>
  <v-row class="bg-teal-darken-2 pa-2" >
   <v-col cols="11" class="text-center">
       <slot name="main"></slot>
 </v-col>
 <v-col cols="1" >

<v-btn icon @click="toggleDrawer" >
 <img src="../assets/image/home/CERVERA.png" alt="My Image2" style="width: 39px; border-radius: 1em;"/></v-btn>
 </v-col>
</v-row>

<v-navigation-drawer v-model="drawer" class="br-teal-darken-4" theme="dark">
 <div class="container">
   <div class="dos">
   <img src="../assets/image/home/CERVERA.png" class="img">
   <slot name="image1"></slot>
 </div>
   <div class="dos">
   <img src="../assets/image/home/CERVERA.png" class="img">
   <slot name="image2"></slot>
 </div>
   <div class="dos">
   <img src="../assets/image/home/CERVERA.png" class="img">
   <slot name="image3"></slot>
 </div>
   <div class="dos">
   <img src="../assets/image/home/CERVERA.png" class="img">
   <slot name="image4"></slot>
 </div>
   <div class="dos">
   <img src="../assets/image/home/CERVERA.png" class="img">
   <slot name="image5"></slot>
 </div>
   <div class="dos">
   <img src="../assets/image/home/CERVERA.png" class="img">
   <slot name="image6"></slot>
 </div>
   <div class="dos">
   <img src="../assets/image/home/CERVERA.png" class="img">
   <slot name="image7"></slot>
 </div>
 </div>
 </v-navigation-drawer>
 
</template>
<!-- ************************************* -->
<script setup>
import { ref } from 'vue';
const drawer = ref(false);

const toggleDrawer = () => {
drawer.value = !drawer.value;
}

</script>
<!-- ************************************* -->
<style scoped>
.img{
max-width: 30px;
border-radius: 10px;
margin-left: 1em;
margin-right: 1em;

}
.container{
display: block;

}
.dos{
display: flex;
padding: 0.5em;
}


</style>
