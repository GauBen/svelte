import "svelte/internal/disclose-version";
import * as $ from "svelte/internal/client";

var root = $.template(`<header><nav><a href="/">Home</a> <a href="/away">Away</a></nav></header> <main><h1> </h1> <div class="static"><p>we don't need to traverse these nodes</p></div> <p>or</p> <p>these</p> <p>ones</p> <!></main>`, 1);

export default function Skip_static_subtree($$anchor, $$props) {
	var fragment = root();
	var main = $.sibling($.first_child(fragment), 2);
	var h1 = $.child(main);
	var text = $.child(h1);

	$.reset(h1);

	var node = $.sibling(h1, 10);

	$.html(node, () => $$props.content, false, false);
	$.reset(main);
	$.template_effect(() => $.set_text(text, $$props.title));
	$.append($$anchor, fragment);
}