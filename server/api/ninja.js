export default defineEventHandler(async (event) => {

  // handle query  params
  const { name } = getQuery(event)

  //  handle post data
  const { age } = await readBody(event)

  return {
    message: `Hello from the ${name}! your age is ${age}`
  }
})