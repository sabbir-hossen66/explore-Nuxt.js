import { _ as __nuxt_component_0 } from './nuxt-link-C5HYLscJ.mjs';
import { withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-f5f2324e><header data-v-f5f2324e><nav data-v-f5f2324e>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/product" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Test Dojo`);
      } else {
        return [
          createTextVNode("Test Dojo")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` | </nav></header><div data-v-f5f2324e>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div><div data-v-f5f2324e><footer data-v-f5f2324e><ul data-v-f5f2324e><li data-v-f5f2324e>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-f5f2324e>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-f5f2324e>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/product" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Product`);
      } else {
        return [
          createTextVNode("Product")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></footer></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/product.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const product = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f5f2324e"]]);

export { product as default };
//# sourceMappingURL=product-aSw4AIin.mjs.map
