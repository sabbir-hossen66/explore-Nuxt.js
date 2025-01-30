# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
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

### and we can see error when we can't find our products/elements. then we can use belows code which is connected in error.vue page. these codes are set in the <script/> tag.
```
if(!product.value){
  // const error = new Error('Product not found')
  // error.statusCode = 404
  // throw error
throw createError({statusCode:404,message:'Product not found'})

}
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
