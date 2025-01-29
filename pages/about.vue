<template>
  <div>
  

<h2>About</h2>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quis porro facere vitae et, fuga nesciunt libero sapiente consequatur quibusdam.</p>
<h2>{{ data }}</h2>
  </div>
</template>

<script setup>

// fetch api
// const { data } = await useFetch('/api/ninja?name=sabbir', {
//   method: 'post',
//   body:{age:24}
// })

// check another practice
const { data } = await useAsyncData('users', () => $fetch('/api/ninja?name=sabbir', {
  method: 'post',
  body:{age:24}
}))


</script>

<style scoped>
h2{
  color: red;
  font-size: 30;
}
p{
  color: blue;
  font-size: 20;
}
</style>