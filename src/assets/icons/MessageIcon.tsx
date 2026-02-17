import { MessageCircle } from "lucide-react";

type MessageIconProps = {
  count: number;
};

export function MessageIcon({ count }: MessageIconProps) {
  return (
    <div className="relative">
      <MessageCircle className="w-6 h-6 text-gray-600 cursor-pointer" />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
          {count}
        </span>
      )}
    </div>
  );
}
