var P = Object.defineProperty;
var A = (t, e, n) => e in t ? P(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var m = (t, e, n) => A(t, typeof e != "symbol" ? e + "" : e, n);
function h() {
}
function L(t) {
  return t();
}
function C() {
  return /* @__PURE__ */ Object.create(null);
}
function p(t) {
  t.forEach(L);
}
function B(t) {
  return typeof t == "function";
}
function R(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function T(t) {
  return Object.keys(t).length === 0;
}
function N(t, e) {
  t.appendChild(e);
}
function U(t, e, n) {
  t.insertBefore(e, n || null);
}
function I(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function V(t) {
  return document.createElement(t);
}
function O(t) {
  return document.createTextNode(t);
}
function q(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function z(t) {
  return Array.from(t.childNodes);
}
function D(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
let x;
function _(t) {
  x = t;
}
const l = [], S = [];
let a = [];
const j = [], F = /* @__PURE__ */ Promise.resolve();
let y = !1;
function G() {
  y || (y = !0, F.then(M));
}
function b(t) {
  a.push(t);
}
const g = /* @__PURE__ */ new Set();
let s = 0;
function M() {
  if (s !== 0)
    return;
  const t = x;
  do {
    try {
      for (; s < l.length; ) {
        const e = l[s];
        s++, _(e), H(e.$$);
      }
    } catch (e) {
      throw l.length = 0, s = 0, e;
    }
    for (_(null), l.length = 0, s = 0; S.length; ) S.pop()();
    for (let e = 0; e < a.length; e += 1) {
      const n = a[e];
      g.has(n) || (g.add(n), n());
    }
    a.length = 0;
  } while (l.length);
  for (; j.length; )
    j.pop()();
  y = !1, g.clear(), _(t);
}
function H(t) {
  if (t.fragment !== null) {
    t.update(), p(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(b);
  }
}
function J(t) {
  const e = [], n = [];
  a.forEach((r) => t.indexOf(r) === -1 ? e.push(r) : n.push(r)), n.forEach((r) => r()), a = e;
}
const K = /* @__PURE__ */ new Set();
function Q(t, e) {
  t && t.i && (K.delete(t), t.i(e));
}
function W(t, e, n) {
  const { fragment: r, after_update: c } = t.$$;
  r && r.m(e, n), b(() => {
    const i = t.$$.on_mount.map(L).filter(B);
    t.$$.on_destroy ? t.$$.on_destroy.push(...i) : p(i), t.$$.on_mount = [];
  }), c.forEach(b);
}
function X(t, e) {
  const n = t.$$;
  n.fragment !== null && (J(n.after_update), p(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Y(t, e) {
  t.$$.dirty[0] === -1 && (l.push(t), G(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Z(t, e, n, r, c, i, u = null, d = [-1]) {
  const $ = x;
  _(t);
  const o = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: h,
    not_equal: c,
    bound: C(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || ($ ? $.$$.context : [])),
    // everything else
    callbacks: C(),
    dirty: d,
    skip_bound: !1,
    root: e.target || $.$$.root
  };
  u && u(o.root);
  let w = !1;
  if (o.ctx = n ? n(t, e.props || {}, (f, k, ...v) => {
    const E = v.length ? v[0] : k;
    return o.ctx && c(o.ctx[f], o.ctx[f] = E) && (!o.skip_bound && o.bound[f] && o.bound[f](E), w && Y(t, f)), k;
  }) : [], o.update(), w = !0, p(o.before_update), o.fragment = r ? r(o.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = z(e.target);
      o.fragment && o.fragment.l(f), f.forEach(I);
    } else
      o.fragment && o.fragment.c();
    e.intro && Q(t.$$.fragment), W(t, e.target, e.anchor), M();
  }
  _($);
}
class tt {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    m(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    m(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    X(this, 1), this.$destroy = h;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!B(n))
      return h;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const c = r.indexOf(n);
      c !== -1 && r.splice(c, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !T(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const et = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(et);
function nt(t) {
  let e, n, r, c, i;
  return {
    c() {
      e = V("button"), n = O("count is "), r = O(
        /*count*/
        t[0]
      );
    },
    m(u, d) {
      U(u, e, d), N(e, n), N(e, r), c || (i = q(
        e,
        "click",
        /*increment*/
        t[1]
      ), c = !0);
    },
    p(u, [d]) {
      d & /*count*/
      1 && D(
        r,
        /*count*/
        u[0]
      );
    },
    i: h,
    o: h,
    d(u) {
      u && I(e), c = !1, i();
    }
  };
}
function rt(t, e, n) {
  let r = 0;
  return [r, () => {
    n(0, r += 1);
  }];
}
class ct extends tt {
  constructor(e) {
    super(), Z(this, e, rt, nt, R, {});
  }
}
export {
  ct as default
};
