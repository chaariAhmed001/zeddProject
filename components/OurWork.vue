<template>
  <section id="ourwork" class="ourwork-container">
    <div class="ourWork-content">
      <SectionTitle title="Some of Our Previous Work" />
      <div class="ourwork-options">
        <p
          class="option text-primary_color__darkBlue bg-hover-primary_color__pinky"
          @click="selectOption(option.id)"
          :class="{ selected: selectedOp === option.id }"
          v-for="option in options"
          :key="option.id"
        >
          {{ option.title }}
        </p>
      </div>
      <Galery :slectedOp="selectedOp" />
      <div class="btn-container">
        <Button
          class="btn bg-primary_color__darkBlue bg-hover-primary_color__darkBlue"
          label="See more"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const selectedOp = ref("all");
const options = [
  {
    id: "all",
    title: "All",
  },
  {
    id: "illustration",
    title: "Illustration",
  },
  {
    id: "app",
    title: "App",
  },
  {
    id: "branding",
    title: "Branding",
  },
];

const selectOption = (optionId: string) => {
  selectedOp.value = optionId;
};
</script>
