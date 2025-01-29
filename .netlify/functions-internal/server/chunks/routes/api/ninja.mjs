import { d as defineEventHandler, g as getQuery, r as readBody } from '../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';

const ninja = defineEventHandler(async (event) => {
  const { name } = getQuery(event);
  const { age } = await readBody(event);
  return {
    message: `Hello from the ${name}! your age is ${age}`
  };
});

export { ninja as default };
//# sourceMappingURL=ninja.mjs.map
