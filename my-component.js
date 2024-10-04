import { SvelteComponent as a, init as f, safe_not_equal as p, element as m, text as c, insert as _, append as d, listen as w, set_data as v, noop as u, detach as $ } from "svelte/internal";
const C = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(C);
function S(o) {
  let e, i, t, s, r;
  return {
    c() {
      e = m("button"), i = c("count is "), t = c(
        /*count*/
        o[0]
      );
    },
    m(n, l) {
      _(n, e, l), d(e, i), d(e, t), s || (r = w(
        e,
        "click",
        /*increment*/
        o[1]
      ), s = !0);
    },
    p(n, [l]) {
      l & /*count*/
      1 && v(
        t,
        /*count*/
        n[0]
      );
    },
    i: u,
    o: u,
    d(n) {
      n && $(e), s = !1, r();
    }
  };
}
function b(o, e, i) {
  let t = 0;
  return [t, () => {
    i(0, t += 1);
  }];
}
class x extends a {
  constructor(e) {
    super(), f(this, e, b, S, p, {});
  }
}
export {
  x as default
};
