<template>
  <div>
     <header>
      <nav>
        <NuxtLink to="/product">Test Dojo</NuxtLink> |
       
      </nav>
    </header>

<div>
  <slot/>
</div>
<div>
  <footer>
     <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
           <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
           <li>
            <NuxtLink to="/product">Product</NuxtLink>
          </li>
        </ul>
  </footer>
</div>
  </div>
</template>

<style scoped >
.router-link-active{
  color: blue;
}
</style>