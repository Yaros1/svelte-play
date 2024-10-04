import { SvelteComponent, init, safe_not_equal, element, space, text, attr, insert, set_input_value, append, listen, action_destroyer, set_data, is_function, noop, detach, run_all } from "svelte/internal";
import tippy from "https://unpkg.com/tippy.js@6.3.7/dist/tippy.esm.js";
const PUBLIC_VERSION = "4";
if (typeof window !== "undefined")
  (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(PUBLIC_VERSION);
function create_fragment(ctx) {
  let input;
  let t0;
  let div;
  let t1;
  let banana_action;
  let mounted;
  let dispose;
  return {
    c() {
      input = element("input");
      t0 = space();
      div = element("div");
      t1 = text(
        /*upper*/
        ctx[1]
      );
      attr(input, "type", "text");
    },
    m(target, anchor) {
      insert(target, input, anchor);
      set_input_value(
        input,
        /*name*/
        ctx[0]
      );
      insert(target, t0, anchor);
      insert(target, div, anchor);
      append(div, t1);
      if (!mounted) {
        dispose = [
          listen(
            input,
            "input",
            /*input_input_handler*/
            ctx[3]
          ),
          action_destroyer(banana_action = /*banana*/
          ctx[2].call(null, div, { content: (
            /*name*/
            ctx[0]
          ) }))
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*name*/
      1 && input.value !== /*name*/
      ctx2[0]) {
        set_input_value(
          input,
          /*name*/
          ctx2[0]
        );
      }
      if (dirty & /*upper*/
      2) set_data(
        t1,
        /*upper*/
        ctx2[1]
      );
      if (banana_action && is_function(banana_action.update) && dirty & /*name*/
      1) banana_action.update.call(null, { content: (
        /*name*/
        ctx2[0]
      ) });
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(input);
        detach(t0);
        detach(div);
      }
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let name = "B";
  let upper = 0;
  const banana = (element2, options) => {
    const tip = tippy(element2, options);
    return {
      update(options2) {
        $$invalidate(1, upper++, upper);
        tip.setProps(options2);
        console.log("im updating", options2);
      },
      destroy() {
        tip.destroy();
      }
    };
  };
  function input_input_handler() {
    name = this.value;
    $$invalidate(0, name);
  }
  return [name, upper, banana, input_input_handler];
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
