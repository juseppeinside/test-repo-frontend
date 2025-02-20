import { IPost } from "../../api/hooks/usePosts";
import {
  IconBell,
  IconBook,
  IconInfo,
  IconPencil,
  IconTelegram,
} from "../../assets";
import { Switch, Tooltip } from "../../ui";

const Post = ({ post }: { post: IPost }) => {
  return (
    <div class="border border-neutral-500 rounded-lg p-2 min-w-[400px] max-w-[400px]">
      <div class="flex gap-4 items-center">
        <div class="bg-yellow-300 rounded-lg p-1">
          <IconBook class="size-5 text-yellow-600" />
        </div>
        <p class="text-sm font-semibold">Ожидаю сообщений</p>
      </div>
      <div class="flex justify-between gap-10 items-center">
        <p class="truncate">{post.title}</p>
        <div class="p-1 bg-green-300 rounded-full">
          <IconBell class="size-5 text-green-600" />
        </div>
      </div>

      <div class="flex justify-between mt-2">
        <div class="flex flex-col gap-1">
          <p class="text-xs font-semibold">Сообщений</p>
          <p class="text-xl font-semibold">{Math.floor(Math.random() * 300)}</p>
        </div>
        <figure class="w-0.5 bg-gray-200" />
        <div class="flex flex-col gap-1">
          <p class="text-xs font-semibold">Обработано</p>
          <p class="text-xl font-semibold">{Math.floor(Math.random() * 300)}</p>
        </div>
        <figure class="w-0.5 bg-gray-200" />
        <div class="flex flex-col gap-1">
          <p class="text-xs font-semibold">Эффективность</p>
          <p class="text-xl font-semibold">
            {Math.floor(Math.random() * 100)}%
          </p>
        </div>
      </div>
      <button class="bg-[#1a1a1a] w-full rounded-lg mt-2 text-white flex items-center justify-center py-2 gap-1 hover:bg-[#2a2a2a]">
        <IconPencil class="size-4 text-white mt-0.5" />
        Настройка чат бота
      </button>
      <div class="flex gap-1 text-gray-500 items-center mt-2">
        <p class="uppercase text-xs font-semibold">Каналы</p>

        <Tooltip text="Информационная панель о статусе канала">
          <IconInfo class="size-4" />
        </Tooltip>
      </div>

      <div class="w-full bg-blue-100 rounded-lg p-2 flex justify-between mt-2">
        <div class="flex gap-2 items-center">
          <IconTelegram class="size-5" />
          <p>Telegram</p>
        </div>
        <p class="text-sm font-semibold text-gray-400">@savvvvi_bot</p>
        <Switch />
      </div>
    </div>
  );
};

export default Post;
