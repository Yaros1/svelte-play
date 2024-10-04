var MyComponent = function(internal) {
  "use strict";
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
        button = internal.element("button");
        t0 = internal.text("count is ");
        t1 = internal.text(
          /*count*/
          ctx[0]
        );
      },
      m(target, anchor) {
        internal.insert(target, button, anchor);
        internal.append(button, t0);
        internal.append(button, t1);
        if (!mounted) {
          dispose = internal.listen(
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
        1) internal.set_data(
          t1,
          /*count*/
          ctx2[0]
        );
      },
      i: internal.noop,
      o: internal.noop,
      d(detaching) {
        if (detaching) {
          internal.detach(button);
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
  class MyComponent2 extends internal.SvelteComponent {
    constructor(options) {
      super();
      internal.init(this, options, instance, create_fragment, internal.safe_not_equal, {});
    }
  }
  return MyComponent2;
}(window["svelte/internal"]);
