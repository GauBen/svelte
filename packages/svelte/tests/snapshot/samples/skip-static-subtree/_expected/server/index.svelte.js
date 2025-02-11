import * as $ from "svelte/internal/server";

export default function Skip_static_subtree($$payload, $$props) {
	let { title, content } = $$props;

	$$payload.out += `<header><nav><a href="/">Home</a> <a href="/away">Away</a></nav></header> <main><h1>${$.escape(title)}</h1> <div class="static"><p>we don't need to traverse these nodes</p></div> <p>or</p> <p>these</p> <p>ones</p> ${$.html(content)}</main>`;
}