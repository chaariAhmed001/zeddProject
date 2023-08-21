<template>
  <div class="Carousel-card">
    <Carousel
      :value="products"
      :numVisible="5"
      :numScroll="3"
      :responsiveOptions="responsiveOptions"
    >
      <template #item="slotProps">
        <div class="card-container">
          <div class="card-header">
            <img
              :src="
                'https://primefaces.org/cdn/primevue/images/product/' +
                slotProps.data.image
              "
              :alt="slotProps.data.name"
            />
            <Rating v-model="value" readonly :cancel="false" />
          </div>
          <div class="card-body">
            <p>
              "My experience with Mark is a complete success, from customer
              service, wide rang of products, clean store, purchasing
              experience"
            </p>
          </div>
          <div class="card-footer">
            <p>Samantha Kate</p>
            <p>CEO of Floatcom</p>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ProductService } from "@/service/ProductService";
import Carousel from "primevue/carousel";
onMounted(() => {
  ProductService.getProductsSmall().then(
    (data) => (products.value = data.slice(0, 9))
  );
});

const products = ref();
const value = ref(5);

const responsiveOptions = ref([
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 3,
  },
  {
    breakpoint: "991px",
    numVisible: 2,
    numScroll: 2,
  },
  {
    breakpoint: "767px",
    numVisible: 1,
    numScroll: 1,
  },
]);

const getSeverity = (status) => {
  switch (status) {
    case "INSTOCK":
      return "success";

    case "LOWSTOCK":
      return "warning";

    case "OUTOFSTOCK":
      return "danger";

    default:
      return null;
  }
};
</script>

<style>
.Carousel-card {
  background: var(--surface-card);
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 1rem;
}
</style>
