import { JSX } from "preact";
import { useState } from "preact/hooks";
// import { IS_BROWSER } from "$fresh/runtime.ts";

export default function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  const [like, setLike] = useState(false);
  return (
    <button
      {...props}
      // disabled={!IS_BROWSER || props.disabled}
      class="px-2 py-1 border(gray-100 2) hover:bg-gray-200"
      onClick={() => setLike(!like)}
    >
      {like ? "❤️" : "🖤"}
    </button>
  );
}
