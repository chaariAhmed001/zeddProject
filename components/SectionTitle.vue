<template>
  <div class="sectionTitle ">
    <h1 class="text-primary_color__darkBlue">{{ title }}</h1>
    <h3 class="text-primary_color__darkBlue">{{ subTitle }}</h3>
  </div>
 
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  subTitle:{
    type: String,
    required: false,
  },
});
</script>

<style scoped></style>
