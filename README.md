# Nuxt Minimal Starter

## About Axios
##### Axios হল একটি জনপ্রিয় HTTP ক্লায়েন্ট যা API থেকে ডাটা ফেচ করার জন্য ব্যবহার করা হয়। Nuxt.js এ Axios ব্যবহার করা খুবই সহজ, এবং এটি SSR (Server-Side Rendering) এবং CSR (Client-Side Rendering) উভয় ক্ষেত্রেই কাজ করে।

#### For Install axios you please command
```
npm install @nuxtjs/axios
```
### After Install axios then axios set in Nuxt Config
```
export default defineNuxtConfig({
  modules: ['@nuxtjs/axios'],
  axios: {
    baseURL: 'https://jsonplaceholder.typicode.com', // ডিফল্ট API URL
  }
});

```
*If you set the `baseURL` here, it will be used every time an API call is made.
### API call using Axios
```
const { $axios } = useNuxtApp();
const posts = ref([]);
async () => {
  try {
    const response = await $axios.get('/posts');
    posts.value = response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}
```
*If you use `useNuxtApp().$axios`, the `baseURL` provided in `nuxt.config.ts` will be automatically included.

### Handling Axios with a composable file (Best Practice)
#### Nuxt 3 Composable - `useApi.ts`

Nuxt 3 এ Composable ফাইল ব্যবহার করলে কোড ক্লিন এবং রিপিটিশন কম হয়।

## ✅ একটি নতুন `useApi.ts` Composable তৈরি করুন:
```
export default function useApi() {
  const { $axios } = useNuxtApp();

  const getPosts = async () => {
    try {
      const response = await $axios.get('/posts');
      return response.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
    }
  };

  return { getPosts };
}
```
✅ এখন Vue কম্পোনেন্টে ব্যবহার করুন:

```
<script setup>
import useApi from '@/composables/useApi';

const { getPosts } = useApi();
const posts = ref([]);

onMounted(async () => {
  posts.value = await getPosts();
});
</script>

<template>
  <div>
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>
```
✅ **Axios** ব্যবহার করলে `useNuxtApp().$axios` দিয়ে API কল করা যায়।  
✅ **Composable (useApi.ts)** ব্যবহার করলে কোড আরও ক্লিন হয়।

============ UseFetch()=========
##### useFetch() হল Nuxt.js এ data fetching করার জন্য একটি built-in কম্পোজেবল (Composable)। এটি server-side rendering (SSR) এবং client-side rendering (CSR) উভয় ক্ষেত্রে কাজ করে।
```
const { data: posts, pending, error } = useFetch('https://jsonplaceholder.typicode.com/posts');
```
🔍 কোড ব্যাখ্যা:
✅ useFetch() API থেকে ডাটা ফেচ করে।
✅ pending লোডিং অবস্থা চেক করে।
✅ error থাকলে তা দেখায়।
✅ data: posts দ্বারা ফেচ করা ডাটা reactive হয়।

##### Set baseURL from Nuxt Config and use useFetch().
In **Nuxt.js**, you can set a global API `baseURL` in the `nuxt.config.ts` file.

📌 **Step 1:** Set `baseURL` in `nuxt.config.ts`
```
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: 'https://jsonplaceholder.typicode.com'
    }
  }
});

```
*Now, when we use useFetch(), the baseURL will be automatically included.

##### Using `baseURL` with `useFetch()`.
```
<script setup>
const config = useRuntimeConfig();
const { data: posts, pending, error } = useFetch(`${config.public.apiBase}/posts`);
</script>
```
🔍 **Code Explanation:**

✅ Using `useRuntimeConfig()`, I retrieved `apiBase` from `nuxt.config.ts`.

✅ In `useFetch()`, I used `${config.public.apiBase}/posts` to make the API call.

##### Query Parameter Usage (Dynamic Fetching)

Sometimes, we need to send dynamic data. You can send query parameters with `useFetch()`.

📌 **Example 3:** Using Dynamic Query Parameters with `useFetch()`

```
const userId = ref(1);
const { data: posts, pending, error } = useFetch('https://jsonplaceholder.typicode.com/posts', {
  query: { userId }
});
```




============ Error Handeling ===============

## Step -1 : To create a error.vue page in the root directory.

```
<p>{{ error.statusCode }}</p>
<p>{{error.message}}</p>
<button class="btn my-7" @click="handelClearError"> clear error.</button>
<script setup>

defineProps(['error'])
const handelClearError = () => clearError({ redirect: '/' })

</script>
```

###### and we can see error when we can't find our products/elements. then we can use belows code which is connected in error.vue page. these codes are set in the <script/> tag.
```
if(!product.value){
  // const error = new Error('Product not found')
  // error.statusCode = 404
  // throw error
throw createError({statusCode:404,message:'Product not found'})

}
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
