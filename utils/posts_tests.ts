import { loadPost } from "./posts.ts";
import { assertEquals } from "$std/testing/asserts.ts";

Deno.test(
  "loadPost() returns null if the post does not exist",
  async (): Promise<void> => {
    const post = await loadPost("non-existent");
    assertEquals(post, null);
    if (post !== null) throw new Error("Expected null");
  },
);

Deno.test(
  "loadPost() returns a post object if post does exist",
  async (): Promise<void> => {
    const post = await loadPost("hello-world");
    assertEquals(post?.id, "hello-world");
    assertEquals(post?.title, "Hello World");
  },
);
