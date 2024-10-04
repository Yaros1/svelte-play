import { SvelteComponent, init, safe_not_equal, element, text, space, insert, append, listen, set_data, noop, detach } from "svelte/internal";
import { onDestroy } from "svelte";
const PUBLIC_VERSION = "4";
if (typeof window !== "undefined")
  (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(PUBLIC_VERSION);
function create_fragment(ctx) {
  let button;
  let t0;
  let t1;
  let t2;
  let t3;
  let mounted;
  let dispose;
  return {
    c() {
      button = element("button");
      t0 = text("count is ");
      t1 = text(
        /*count*/
        ctx[1]
      );
      t2 = space();
      t3 = text(
        /*name*/
        ctx[0]
      );
    },
    m(target, anchor) {
      insert(target, button, anchor);
      append(button, t0);
      append(button, t1);
      append(button, t2);
      append(button, t3);
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*increment*/
          ctx[2]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*count*/
      2) set_data(
        t1,
        /*count*/
        ctx2[1]
      );
      if (dirty & /*name*/
      1) set_data(
        t3,
        /*name*/
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
  let { name = "x" } = $$props;
  const increment = () => {
    $$invalidate(1, count += 1);
  };
  onDestroy(() => {
    console.log("im being destoryed");
    $$invalidate(1, count = 0);
  });
  $$self.$$set = ($$props2) => {
    if ("name" in $$props2) $$invalidate(0, name = $$props2.name);
  };
  return [name, count, increment];
}
class MyComponent extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { name: 0 });
  }
}
export {
  MyComponent as default
};
