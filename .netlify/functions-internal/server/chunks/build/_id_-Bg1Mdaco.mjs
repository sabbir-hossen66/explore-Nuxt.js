import { withAsyncContext, unref, useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { u as useRoute, _ as _export_sfc } from './server.mjs';
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
  __name: "ProductDetail",
  __ssrInlineRender: true,
  props: ["product"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))} data-v-4e352484><div class="grid grid-cols-2 gap-10" data-v-4e352484><div class="p-7" data-v-4e352484><img${ssrRenderAttr("src", __props.product.image)} alt="product img" class="mx-auto my-7" data-v-4e352484></div><div class="p-7" data-v-4e352484><h2 class="text-4xl my-7" data-v-4e352484>${ssrInterpolate(__props.product.title)}</h2><p class="text-xl my-7" data-v-4e352484>price -$${ssrInterpolate(__props.product.price)}</p><h3 class="font-bold border-b-2 mb-4 pb-2" data-v-4e352484>product description:</h3><p class="mb-7" data-v-4e352484>${ssrInterpolate(__props.product.description)}</p></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductDetail.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4e352484"]]);
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { id } = useRoute().params;
    const uri = `https://fakestoreapi.com/products/${id}`;
    const { data: product } = ([__temp, __restore] = withAsyncContext(() => useFetch(uri, { key: "id" }, "$wpXHD4Yxv9")), __temp = await __temp, __restore(), __temp);
    if (!product) {
      const error = new Error("Product not found");
      error.statusCode = 404;
      throw error;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProductDetail = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_ProductDetail, { product: unref(product) }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-Bg1Mdaco.mjs.map
