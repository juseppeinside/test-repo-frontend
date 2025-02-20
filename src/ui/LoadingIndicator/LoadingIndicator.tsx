import { Accessor } from "solid-js";

const LoadingIndicator = ({ progress }: { progress: Accessor<number> }) => {
  return (
    <div class="flex flex-col items-center justify-center space-y-4">
      <div class="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          class="h-full bg-blue-500 rounded-full transition-all"
          style={{ width: `${progress()}%` }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingIndicator;
