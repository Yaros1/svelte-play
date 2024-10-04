import { n as m, i as w, a as C, l as S, c as j, d as q, b as D, g as R, s as b, e as O, t as T, f as z, h as A, j as B, k as H, r as M, m as G, o as I } from "./svelte-DDQto9az.js";
import { at as pt, au as Ft, ao as mt, bF as ft, b$ as ht, c0 as yt, bD as gt, bu as vt, a$ as kt, ak as Et, b6 as xt, a_ as $t, aM as wt, u as Ct, bH as St, x as jt, y as qt, bI as Dt, v as Rt, b5 as Ot, R as Tt, bQ as zt, av as At, aK as Bt, bx as Ht, aX as Mt, aT as Gt, a2 as It, a7 as Nt, bz as Ut, a3 as Xt, a8 as Lt, a6 as Yt, a4 as Jt, a5 as Kt, aU as Pt, K as Qt, bh as Vt, bo as Wt, bp as Zt, ay as te, b_ as ee, bw as se, aO as ae, b4 as ne, by as oe, bE as re, b2 as ce, b3 as le, bi as _e, aq as ie, bS as ue, aE as de, bB as be, C as pe, B as Fe, bO as me, bN as fe, bM as he, bL as ye, aV as ge, bG as ve, D as ke, E as Ee, J as xe, q as $e, bW as we, bn as Ce, aG as Se, aH as je, b0 as qe, aR as De, aQ as Re, bm as Oe, Z as Te, ax as ze, w as Ae, bj as Be, bg as He, Y as Me, aD as Ge, aS as Ie, bt as Ne, as as Ue, bC as Xe, _ as Le, $ as Ye, z as Je, bJ as Ke, A as Pe, bK as Qe, aW as Ve, az as We, aj as Ze, bd as ts, b8 as es, b1 as ss, L as as, bP as ns, c1 as os, bA as rs, bc as cs, br as ls, F as _s, aN as is, aL as us, bq as ds, aF as bs, M as ps, bR as Fs, ar as ms, aA as fs, am as hs, al as ys, an as gs, b7 as vs, b9 as ks, aY as Es, ai as xs, af as $s, ag as ws, ah as Cs, P as Ss, aP as js, S as qs, V as Ds, U as Rs, a9 as Os, aa as Ts, bU as zs, bT as As, ab as Bs, bV as Hs, W as Ms, ad as Gs, ac as Is, aB as Ns, aC as Us, bs as Xs, ae as Ls, T as Ys, I as Js, bv as Ks, ba as Ps, bb as Qs, p as Vs, O as Ws, N as Zs, aw as ta, bf as ea, G as sa, H as aa, aZ as na, a1 as oa, a0 as ra, ap as ca, Q as la, aI as _a, bl as ia, bk as ua, bY as da, aJ as ba, bX as pa, be as Fa, bZ as ma, X as fa } from "./svelte-DDQto9az.js";
function Q(e, t, s, a) {
  if (!t) return m;
  const n = e.getBoundingClientRect();
  if (t.left === n.left && t.right === n.right && t.top === n.top && t.bottom === n.bottom)
    return m;
  const {
    delay: o = 0,
    duration: r = 300,
    easing: c = w,
    // @ts-ignore todo: should this be separated from destructuring? Or start/end added to public api and documentation?
    start: l = C() + o,
    // @ts-ignore todo:
    end: _ = l + r,
    tick: u = m,
    css: i
  } = s(e, { from: t, to: n }, a);
  let d = !0, p = !1, y;
  function x() {
    i && (y = j(e, 0, 1, r, o, c, i)), o || (p = !0);
  }
  function g() {
    i && q(e, y), d = !1;
  }
  return S((F) => {
    if (!p && F >= l && (p = !0), p && F >= _ && (u(1, 0), g()), !d)
      return !1;
    if (p) {
      const $ = F - l, v = 0 + 1 * c($ / r);
      u(v, 1 - v);
    }
    return !0;
  }), x(), u(0, 1), g;
}
function V(e) {
  const t = getComputedStyle(e);
  if (t.position !== "absolute" && t.position !== "fixed") {
    const { width: s, height: a } = t, n = e.getBoundingClientRect();
    e.style.position = "absolute", e.style.width = s, e.style.height = a, N(e, n);
  }
}
function N(e, t) {
  const s = e.getBoundingClientRect();
  if (t.left !== s.left || t.top !== s.top) {
    const a = getComputedStyle(e), n = a.transform === "none" ? "" : a.transform;
    e.style.transform = `${n} translate(${t.left - s.left}px, ${t.top - s.top}px)`;
  }
}
function W(e, t) {
  const s = t.token = {};
  function a(n, o, r, c) {
    if (t.token !== s) return;
    t.resolved = c;
    let l = t.ctx;
    r !== void 0 && (l = l.slice(), l[r] = c);
    const _ = n && (t.current = n)(l);
    let u = !1;
    t.block && (t.blocks ? t.blocks.forEach((i, d) => {
      d !== o && i && (O(), T(i, 1, 1, () => {
        t.blocks[d] === i && (t.blocks[d] = null);
      }), z());
    }) : t.block.d(1), _.c(), A(_, 1), _.m(t.mount(), t.anchor), u = !0), t.block = _, t.blocks && (t.blocks[o] = _), u && B();
  }
  if (D(e)) {
    const n = R();
    if (e.then(
      (o) => {
        b(n), a(t.then, 1, t.value, o), b(null);
      },
      (o) => {
        if (b(n), a(t.catch, 2, t.error, o), b(null), !t.hasCatch)
          throw o;
      }
    ), t.current !== t.pending)
      return a(t.pending, 0), !0;
  } else {
    if (t.current !== t.then)
      return a(t.then, 1, t.value, e), !0;
    t.resolved = /** @type {T} */
    e;
  }
}
function Z(e, t, s) {
  const a = t.slice(), { resolved: n } = e;
  e.current === e.then && (a[e.value] = n), e.current === e.catch && (a[e.error] = n), e.block.p(a, s);
}
function tt(e, t) {
  const s = {}, a = {}, n = { $$scope: 1 };
  let o = e.length;
  for (; o--; ) {
    const r = e[o], c = t[o];
    if (c) {
      for (const l in r)
        l in c || (a[l] = 1);
      for (const l in c)
        n[l] || (s[l] = c[l], n[l] = 1);
      e[o] = c;
    } else
      for (const l in r)
        n[l] = 1;
  }
  for (const r in a)
    r in s || (s[r] = void 0);
  return s;
}
function et(e) {
  return typeof e == "object" && e !== null ? e : {};
}
const U = (
  /** @type {const} */
  [
    "allowfullscreen",
    "allowpaymentrequest",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "defer",
    "disabled",
    "formnovalidate",
    "hidden",
    "inert",
    "ismap",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "selected"
  ]
), X = /* @__PURE__ */ new Set([...U]), L = /[&"<]/g, Y = /[&<]/g;
function k(e, t = !1) {
  const s = String(e), a = t ? L : Y;
  a.lastIndex = 0;
  let n = "", o = 0;
  for (; a.test(s); ) {
    const r = a.lastIndex - 1, c = s[r];
    n += s.substring(o, r) + (c === "&" ? "&amp;" : c === '"' ? "&quot;" : "&lt;"), o = r + 1;
  }
  return n + s.substring(o);
}
const J = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
function st(e, t) {
  const s = Object.assign({}, ...e);
  if (t) {
    const n = t.classes, o = t.styles;
    n && (s.class == null ? s.class = n : s.class += " " + n), o && (s.style == null ? s.style = h(o) : s.style = h(
      K(s.style, o)
    ));
  }
  let a = "";
  return Object.keys(s).forEach((n) => {
    if (J.test(n)) return;
    const o = s[n];
    o === !0 ? a += " " + n : X.has(n.toLowerCase()) ? o && (a += " " + n) : o != null && (a += ` ${n}="${o}"`);
  }), a;
}
function K(e, t) {
  const s = {};
  for (const a of e.split(";")) {
    const n = a.indexOf(":"), o = a.slice(0, n).trim(), r = a.slice(n + 1).trim();
    o && (s[o] = r);
  }
  for (const a in t) {
    const n = t[a];
    n ? s[a] = n : delete s[a];
  }
  return s;
}
function E(e) {
  return typeof e == "string" || e && typeof e == "object" ? k(e, !0) : e;
}
function at(e) {
  const t = {};
  for (const s in e)
    t[s] = E(e[s]);
  return t;
}
function nt(e, t) {
  e = H(e);
  let s = "";
  for (let a = 0; a < e.length; a += 1)
    s += t(e[a], a);
  return s;
}
const ot = {
  $$render: () => ""
};
function rt(e, t) {
  if (!e || !e.$$render)
    throw t === "svelte:component" && (t += " this={...}"), new Error(
      `<${t}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${t}>.`
    );
  return e;
}
function ct(e, t, s, a) {
  return console.log(`{@debug} ${e ? e + " " : ""}(${t}:${s})`), console.log(a), "";
}
let f;
function lt(e) {
  function t(s, a, n, o, r) {
    const c = I, l = {
      on_destroy: f,
      context: new Map(r || (c ? c.$$.context : [])),
      // these will be immediately discarded
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: G()
    };
    b({ $$: l });
    const _ = e(s, a, n, o);
    return b(c), _;
  }
  return {
    render: (s = {}, { $$slots: a = {}, context: n = /* @__PURE__ */ new Map() } = {}) => {
      f = [];
      const o = { title: "", head: "", css: /* @__PURE__ */ new Set() }, r = t(o, s, {}, a, n);
      return M(f), {
        html: r,
        css: {
          code: Array.from(o.css).map((c) => c.code).join(`
`),
          map: null
          // TODO
        },
        head: o.title + o.head
      };
    },
    $$render: t
  };
}
function _t(e, t, s) {
  if (t == null || s && !t) return "";
  const a = s && t === !0 ? "" : `="${k(t, !0)}"`;
  return ` ${e}${a}`;
}
function it(e) {
  return e ? ` class="${e}"` : "";
}
function h(e) {
  return Object.keys(e).filter((t) => e[t] != null && e[t] !== "").map((t) => `${t}: ${E(e[t])};`).join(" ");
}
function ut(e) {
  const t = h(e);
  return t ? ` style="${t}"` : "";
}
export {
  pt as HtmlTag,
  Ft as HtmlTagHydration,
  mt as ResizeObserverSingleton,
  ft as SvelteComponent,
  ht as SvelteComponentDev,
  yt as SvelteComponentTyped,
  gt as SvelteElement,
  vt as action_destroyer,
  _t as add_attribute,
  it as add_classes,
  kt as add_flush_callback,
  Et as add_iframe_resize_listener,
  xt as add_location,
  $t as add_render_callback,
  ut as add_styles,
  N as add_transform,
  wt as afterUpdate,
  Ct as append,
  St as append_dev,
  jt as append_empty_stylesheet,
  qt as append_hydration,
  Dt as append_hydration_dev,
  Rt as append_styles,
  Ot as assign,
  Tt as attr,
  zt as attr_dev,
  At as attribute_to_object,
  Bt as beforeUpdate,
  Ht as bind,
  Mt as binding_callbacks,
  G as blank_object,
  Gt as bubble,
  z as check_outros,
  It as children,
  Nt as claim_comment,
  Ut as claim_component,
  Xt as claim_element,
  Lt as claim_html_tag,
  Yt as claim_space,
  Jt as claim_svg_element,
  Kt as claim_text,
  Pt as clear_loops,
  Qt as comment,
  Vt as component_subscribe,
  Wt as compute_rest_props,
  Zt as compute_slots,
  te as construct_svelte_component,
  ee as construct_svelte_component_dev,
  se as contenteditable_truthy_values,
  ae as createEventDispatcher,
  Q as create_animation,
  ne as create_bidirectional_transition,
  oe as create_component,
  re as create_custom_element,
  ce as create_in_transition,
  le as create_out_transition,
  _e as create_slot,
  lt as create_ssr_component,
  I as current_component,
  ie as custom_event,
  ue as dataset_dev,
  ct as debug,
  de as destroy_block,
  be as destroy_component,
  pe as destroy_each,
  Fe as detach,
  me as detach_after_dev,
  fe as detach_before_dev,
  he as detach_between_dev,
  ye as detach_dev,
  ge as dirty_components,
  ve as dispatch_dev,
  nt as each,
  ke as element,
  Ee as element_is,
  xe as empty,
  $e as end_hydrating,
  H as ensure_array_like,
  we as ensure_array_like_dev,
  k as escape,
  E as escape_attribute_value,
  at as escape_object,
  Ce as exclude_internal_props,
  Se as fix_and_destroy_block,
  je as fix_and_outro_and_destroy_block,
  V as fix_position,
  B as flush,
  qe as flush_render_callbacks,
  De as getAllContexts,
  Re as getContext,
  Oe as get_all_dirty_from_scope,
  Te as get_binding_group_value,
  R as get_current_component,
  ze as get_custom_elements_slots,
  Ae as get_root_for_style,
  Be as get_slot_changes,
  et as get_spread_object,
  tt as get_spread_update,
  He as get_store_value,
  Me as get_svelte_dataset,
  Ge as globals,
  O as group_outros,
  W as handle_promise,
  Ie as hasContext,
  Ne as has_prop,
  Ue as head_selector,
  w as identity,
  Xe as init,
  Le as init_binding_group,
  Ye as init_binding_group_dynamic,
  Je as insert,
  Ke as insert_dev,
  Pe as insert_hydration,
  Qe as insert_hydration_dev,
  Ve as intros,
  J as invalid_attribute_name_character,
  We as is_client,
  Ze as is_crossorigin,
  ts as is_empty,
  es as is_function,
  D as is_promise,
  ss as is_void,
  as as listen,
  ns as listen_dev,
  S as loop,
  os as loop_guard,
  K as merge_ssr_styles,
  ot as missing_component,
  rs as mount_component,
  m as noop,
  cs as not_equal,
  C as now,
  ls as null_to_empty,
  _s as object_without_properties,
  is as onDestroy,
  us as onMount,
  ds as once,
  bs as outro_and_destroy_block,
  ps as prevent_default,
  Fs as prop_dev,
  ms as query_selector_all,
  fs as raf,
  hs as resize_observer_border_box,
  ys as resize_observer_content_box,
  gs as resize_observer_device_pixel_content_box,
  vs as run,
  M as run_all,
  ks as safe_not_equal,
  Es as schedule_update,
  xs as select_multiple_value,
  $s as select_option,
  ws as select_options,
  Cs as select_value,
  Ss as self,
  js as setContext,
  qs as set_attributes,
  b as set_current_component,
  Ds as set_custom_element_data,
  Rs as set_custom_element_data_map,
  Os as set_data,
  Ts as set_data_contenteditable,
  zs as set_data_contenteditable_dev,
  As as set_data_dev,
  Bs as set_data_maybe_contenteditable,
  Hs as set_data_maybe_contenteditable_dev,
  Ms as set_dynamic_element_data,
  Gs as set_input_type,
  Is as set_input_value,
  Ns as set_now,
  Us as set_raf,
  Xs as set_store_value,
  Ls as set_style,
  Ys as set_svg_attributes,
  Js as space,
  Ks as split_css_unit,
  st as spread,
  Ps as src_url_equal,
  Qs as srcset_url_equal,
  Vs as start_hydrating,
  Ws as stop_immediate_propagation,
  Zs as stop_propagation,
  ta as stringify_spread,
  ea as subscribe,
  sa as svg_element,
  aa as text,
  na as tick,
  oa as time_ranges_to_array,
  ra as to_number,
  ca as toggle_class,
  A as transition_in,
  T as transition_out,
  la as trusted,
  Z as update_await_block_branch,
  _a as update_keyed_each,
  ia as update_slot,
  ua as update_slot_base,
  rt as validate_component,
  da as validate_dynamic_element,
  ba as validate_each_keys,
  pa as validate_slots,
  Fa as validate_store,
  ma as validate_void_dynamic_element,
  fa as xlink_attr
};
