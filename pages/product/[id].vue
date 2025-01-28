<template>
  <div>
  <ProductDetail :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params
const uri = `https://fakestoreapi.com/products/${id}`

//fetch the product
const { data: product } = await useFetch(uri, { key: 'id' })

if(!product){
  const error = new Error('Product not found')
  error.statusCode = 404
  throw error
}

definePageMeta({
  layout:'product '
})
</script>

<style lang="scss" scoped>

</style>