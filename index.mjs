import { SvelteComponent, init, safe_not_equal, element, insert, noop, detach } from 'svelte/internal';
import 'svelte/internal/disclose-version';

/* src/Component.svelte generated by Svelte v4.2.19 */

function create_fragment(ctx) {
	let h1;

	return {
		c() {
			h1 = element("h1");
			h1.textContent = `I'm a svelte ${name} component`;
		},
		m(target, anchor) {
			insert(target, h1, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) {
				detach(h1);
			}
		}
	};
}

let name = "dynamic";

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export { Component as default };
