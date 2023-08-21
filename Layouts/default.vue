<template>
  <div class="card relative z-2">
    <Menubar :model="items" class="navbar bg-secondary_color__white">
      <template #start>
        <img alt="logo" :src="logo" height="40" class="mr-2" />
      </template>
      <template #end>
        <Button
          class="btn bg-primary_color__darkBlue bg-hover-primary_color__darkBlue"
          label="contact us"
        />
      </template>
    </Menubar>
  </div>
  <slot />
</template>

<script setup>
import { ref } from "vue";
import logo from "../assets/svgs/Logo.svg";

const items = ref([
  { label: "Home", to: "#home" },
  { label: "About", to: "#about" },
  { label: "Services", to: "#Services" },
  { label: "Our work", to: "#ourwork" },
]);
</script>
