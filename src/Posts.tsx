import { createEffect } from "solid-js";
import { IPost } from "./api/hooks/usePosts";

import { Post } from "./components";
import { CreateQueryResult } from "@tanstack/solid-query";

const Posts = ({
  posts,
}: {
  posts: CreateQueryResult<Promise<IPost[]>, Error>;
}) => {
  const refetchPosts = () => {
    posts.refetch();
  };

  createEffect(() => {
    const interval = setInterval(() => {
      posts.refetch();
    }, 10 * 60 * 1000);

    return () => clearInterval(interval);
  });

  return (
    <div class=" px-0 md:px-10 py-5">
      <div class="flex justify-center mb-10">
        <button
          onClick={refetchPosts}
          class="bg-purple-300 hover:bg-purple-400 rounded-lg p-2 text-sm"
        >
          Обновить
        </button>
      </div>
      <div class="flex flex-wrap gap-5 justify-center">
        {posts.data?.map((post: IPost) => (
          <Post post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
