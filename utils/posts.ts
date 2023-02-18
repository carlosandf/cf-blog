export async function loadPost(id: string) {
  let raw: string;

  try {
    raw = await Deno.readTextFile(`./content/posts/${id}.md`);
  } catch {
    return null;
  }

  return raw;
}

loadPost("hello-world");
