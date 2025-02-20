import { createEffect, createSignal, onCleanup, Show } from "solid-js";

import { LoadingIndicator } from "./ui";
import Posts from "./Posts";
import { usePosts } from "./api/hooks";

function App() {
  const posts = usePosts();

  const [progress, setProgress] = createSignal(0);

  const interval = setInterval(() => {
    setProgress((prev) => (prev < 100 ? prev + 10 : 0));
  }, 300);

  onCleanup(() => clearInterval(interval));

  createEffect(() => {
    if (progress() === 100) {
      clearInterval(interval);
    }
  });

  const loadingIndicator = (
    <Show when={progress() !== 100}>
      <div class="absolute h-full w-full top-1/2">
        <LoadingIndicator progress={progress} />
      </div>
    </Show>
  );

  return (
    <>
      {loadingIndicator}
      <Show when={progress() === 100}>
        <Posts posts={posts} />
      </Show>
    </>
  );
}

export default App;
