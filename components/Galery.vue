<template>
  <div class="card flex justify-content-center">
    <Galleria
      v-model:activeIndex="activeIndex"
      v-model:visible="displayCustom"
      :value="images"
      :responsiveOptions="responsiveOptions"
      :numVisible="2"
      containerStyle="max-width: 100%"
      :circular="true"
      :fullScreen="true"
      :showItemNavigators="true"
      :showThumbnails="false"
    >
      <template #item="slotProps">
        <img
          :src="slotProps.item.itemImageSrc"
          :alt="slotProps.item.alt"
          style="width: 100%; display: block"
        />
      </template>
      <template #thumbnail="slotProps">
        <img
          :src="slotProps.item.itemImageSrc"
          :alt="slotProps.item.alt"
          style="display: block"
        />
      </template>
    </Galleria>

    <div v-if="images" class="images" style="max-width: 100%">
      <div v-for="(image, index) of images" :key="index" class="image" >
        <img
          v-if="slectedOp !== 'all' ? image.type === slectedOp : slectedOp"
          :src="image.itemImageSrc"
          :alt="image.alt"
          :style="{ cursor: 'pointer', flexGrow: image.grow }"
          @click="imageClick(index)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { PhotoService } from "@/service/PhotoService";
import Galleria from "primevue/galleria";
onMounted(() => {
  PhotoService.getImages().then((data) => (images.value = data));
});

defineProps({
  slectedOp: {
    type: String,
    required: true,
  },
});

const images = ref();
const activeIndex = ref(0);
const responsiveOptions = ref([
  {
    breakpoint: "1024px",
    numVisible: 3,
  },
  {
    breakpoint: "768px",
    numVisible: 2,
  },
  {
    breakpoint: "560px",
    numVisible: 1,
  },
]);
const displayCustom = ref(false);

const imageClick = (index) => {
  activeIndex.value = index;
  displayCustom.value = true;
};
</script>

<style lang="scss">
.images {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 32px;
  justify-content: center;
  .image {
    max-width: 500px;
    flex-grow: 1;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover !important;
    }
  }
}
</style>
