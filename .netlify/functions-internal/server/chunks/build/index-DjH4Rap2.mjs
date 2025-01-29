import { _ as __nuxt_component_0$1 } from './nuxt-link-C5HYLscJ.mjs';
import { useSSRContext, withAsyncContext, unref, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { u as useFetch } from './fetch-BABrbEfB.mjs';
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

const _sfc_main$1 = {
  __name: "ProductCard",
  __ssrInlineRender: true,
  props: ["product"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card text-center" }, _attrs))} data-v-5257ef47><img${ssrRenderAttr("src", __props.product.image)} alt="product thumb" class="thumb" data-v-5257ef47><p class="font-bold text-gray-500 m-4 truncate" data-v-5257ef47>${ssrInterpolate(__props.product.title)}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/product/${__props.product.id}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="btn my-4" data-v-5257ef47${_scopeId}>View Detail</p>`);
          } else {
            return [
              createVNode("p", { class: "btn my-4" }, "View Detail")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5257ef47"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: product } = ([__temp, __restore] = withAsyncContext(() => useFetch("https://fakestoreapi.com/products", "$ldLbOWDTw1")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProductCard = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-e53d1799><div class="grid grid-cols-4 gap-5" data-v-e53d1799><!--[-->`);
      ssrRenderList(unref(product), (p) => {
        _push(`<div data-v-e53d1799>`);
        _push(ssrRenderComponent(_component_ProductCard, { product: p }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e53d1799"]]);

export { index as default };
//# sourceMappingURL=index-DjH4Rap2.mjs.map
