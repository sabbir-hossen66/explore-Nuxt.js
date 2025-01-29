export { default } from "./main.mjs";
export const config = {
  name: "server handler",
  generator: "nuxt@3.15.3",
  path: "/*",
  excludedPath: ["/.netlify/*","/_nuxt/builds/meta/*","/_nuxt/builds/*","/_nuxt/*"],
  preferStatic: true,
};