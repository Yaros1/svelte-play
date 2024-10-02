var S = Object.defineProperty;
var j = (t, e, n) => e in t ? S(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var h = (t, e, n) => j(t, typeof e != "symbol" ? e + "" : e, n);
function i() {
}
function k(t) {
  return t();
}
function b() {
  return /* @__PURE__ */ Object.create(null);
}
function _(t) {
  t.forEach(k);
}
function v(t) {
  return typeof t == "function";
}
function B(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function C(t) {
  return Object.keys(t).length === 0;
}
function N(t, e, n) {
  t.insertBefore(e, n || null);
}
function E(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function I(t) {
  return document.createElement(t);
}
function q(t) {
  return Array.from(t.childNodes);
}
let $;
function a(t) {
  $ = t;
}
const u = [], w = [];
let s = [];
const x = [];
function m(t) {
  s.push(t);
}
const g = /* @__PURE__ */ new Set();
let f = 0;
function A() {
  if (f !== 0)
    return;
  const t = $;
  do {
    try {
      for (; f < u.length; ) {
        const e = u[f];
        f++, a(e), L(e.$$);
      }
    } catch (e) {
      throw u.length = 0, f = 0, e;
    }
    for (a(null), u.length = 0, f = 0; w.length; ) w.pop()();
    for (let e = 0; e < s.length; e += 1) {
      const n = s[e];
      g.has(n) || (g.add(n), n());
    }
    s.length = 0;
  } while (u.length);
  for (; x.length; )
    x.pop()();
  g.clear(), a(t);
}
function L(t) {
  if (t.fragment !== null) {
    t.update(), _(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(m);
  }
}
function M(t) {
  const e = [], n = [];
  s.forEach((r) => t.indexOf(r) === -1 ? e.push(r) : n.push(r)), n.forEach((r) => r()), s = e;
}
const P = /* @__PURE__ */ new Set();
function R(t, e) {
  t && t.i && (P.delete(t), t.i(e));
}
function U(t, e, n) {
  const { fragment: r, after_update: c } = t.$$;
  r && r.m(e, n), m(() => {
    const l = t.$$.on_mount.map(k).filter(v);
    t.$$.on_destroy ? t.$$.on_destroy.push(...l) : _(l), t.$$.on_mount = [];
  }), c.forEach(m);
}
function V(t, e) {
  const n = t.$$;
  n.fragment !== null && (M(n.after_update), _(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function z(t, e, n, r, c, l, p = null, O = [-1]) {
  const d = $;
  a(t);
  const o = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: i,
    not_equal: c,
    bound: b(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (d ? d.$$.context : [])),
    // everything else
    callbacks: b(),
    dirty: O,
    skip_bound: !1,
    root: e.target || d.$$.root
  };
  if (p && p(o.root), o.ctx = [], o.update(), _(o.before_update), o.fragment = r ? r(o.ctx) : !1, e.target) {
    if (e.hydrate) {
      const y = q(e.target);
      o.fragment && o.fragment.l(y), y.forEach(E);
    } else
      o.fragment && o.fragment.c();
    e.intro && R(t.$$.fragment), U(t, e.target, e.anchor), A();
  }
  a(d);
}
class D {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    h(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    h(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    V(this, 1), this.$destroy = i;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!v(n))
      return i;
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
    this.$$set && !C(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const F = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(F);
function G(t) {
  let e;
  return {
    c() {
      e = I("div"), e.textContent = `${H}`;
    },
    m(n, r) {
      N(n, e, r);
    },
    p: i,
    i,
    o: i,
    d(n) {
      n && E(e);
    }
  };
}
let H = "B";
class K extends D {
  constructor(e) {
    super(), z(this, e, null, G, B, {});
  }
}
export {
  K as default
};
