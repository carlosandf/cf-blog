import { Handlers, PageProps } from "$fresh/server.ts";
import { Post } from "../../types.d.ts";
import { loadPost } from "../../utils/posts.ts";
import { CSS } from "gfm";
import Button from "../../islands/Button.tsx";

export const handler: Handlers = {
  async GET(request, context) {
    const { id } = context.params;
    const post: Post | null = await loadPost(id);
    console.log(post);

    return context.render({ post });
  },
};

export default function PagePost(props: PageProps) {
  const post: Post = props.data?.post || {};

  return (
    <div class="p-4">
      <header>
        <h1 class="text-2xl">{post?.title}</h1>
        <time>{Intl.DateTimeFormat("es").format(post?.date)}</time>
      </header>
      <Button />
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div
        class="markdown-body"
        dangerouslySetInnerHTML={{ __html: post?.body }}
      />
    </div>
  );
}
