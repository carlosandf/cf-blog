import { Handlers, PageProps } from "$fresh/server.ts";
import { Post } from "../types.d.ts";
import { listPosts } from "../utils/posts.ts";

export const handler: Handlers = {
  async GET(req, context) {
    const posts = await listPosts();

    return context.render({ posts });
  },
};

export default function Home(props: PageProps) {
  const { data } = props;
  const posts: Post[] = data.posts;

  return (
    <>
      <main class="p-4">
        <h1 class="text-4xl font-bold">CfBlog</h1>
        {posts.map((post) => (
          <article class="p-4">
            <h2 class="text-2xl font-bold">
              <a class="hover:text-blue-600" href={`/blog/${post.id}`}>
                {post.title}
              </a>
            </h2>
            <time>{Intl.DateTimeFormat("es").format(post.date)}</time>
          </article>
        ))}
      </main>
    </>
  );
}
