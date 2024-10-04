import { SvelteComponent, init, safe_not_equal, element, text, insert, append, listen, set_data, noop, detach } from "svelte/internal";
const PUBLIC_VERSION = "4";
if (typeof window !== "undefined")
  (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(PUBLIC_VERSION);
function create_fragment(ctx) {
  let button;
  let t0;
  let t1;
  let mounted;
  let dispose;
  return {
    c() {
      button = element("button");
      t0 = text("count is ");
      t1 = text(
        /*count*/
        ctx[0]
      );
    },
    m(target, anchor) {
      insert(target, button, anchor);
      append(button, t0);
      append(button, t1);
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*increment*/
          ctx[1]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*count*/
      1) set_data(
        t1,
        /*count*/
        ctx2[0]
      );
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(button);
      }
      mounted = false;
      dispose();
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let count = 0;
  const increment = () => {
    $$invalidate(0, count += 1);
  };
  return [count, increment];
}
class MyComponent extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  MyComponent as default
};
