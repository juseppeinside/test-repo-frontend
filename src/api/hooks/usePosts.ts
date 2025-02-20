import { createQuery } from "@tanstack/solid-query";

export type IPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export async function fetchPosts({ signal }: { signal?: AbortSignal }) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    signal,
  });

  if (!response.ok) {
    alert(
      `Произошла ошибка: ${response.status}, ${response.statusText}, ${response.type}`
    );
    throw new Error("Network response was not ok");
  }

  return await response.json();
}

const usePosts = () => {
  return createQuery<IPost[], Error, Promise<IPost[]>>(
    () => ["get", "posts"],
    (context) => fetchPosts({ signal: context.signal })
  );
};

export default usePosts;
