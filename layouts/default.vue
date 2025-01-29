<template>
  <NuxtLoadingIndicator />
  <div>
     <header class="shadow-md bg-gray-100 ">
      <nav class="flex justify-between items-center p-4 container mx-auto">
        <NuxtLink to="/">Test</NuxtLink>
        <ul class="flex space-x-4 p-4 font-bold">
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
           <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
           <li>
            <NuxtLink to="/product" class="btn">Product</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

<div>
  <slot/>
</div>
  </div>
</template>

<style scoped >
.router-link-active{
  color: blue;
}
</style>