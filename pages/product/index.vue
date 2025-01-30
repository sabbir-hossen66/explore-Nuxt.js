<template>
  <div>
  <div class="grid grid-cols-4 gap-5">
    <div v-for="p in product">
     <ProductCard :product="p" />
    </div>
  </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout:'product'
})

// fetch the product ---
// const { data: product } = await useFetch('https://fakestoreapi.com/products')

// try another practice
const {data:product}= await useAsyncData(()=>$fetch('https://fakestoreapi.com/products'))

</script>

<style scoped>
h2{
  color: red;
  font-size: 30;
}

</style>