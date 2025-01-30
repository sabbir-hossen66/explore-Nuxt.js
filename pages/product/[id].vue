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

if(!product.value){
  // const error = new Error('Product not found')
  // error.statusCode = 404
  // throw error
throw createError({statusCode:404,message:'Product not found'})

}

definePageMeta({
  layout:'product '
})
</script>

<style lang="scss" scoped>

</style>