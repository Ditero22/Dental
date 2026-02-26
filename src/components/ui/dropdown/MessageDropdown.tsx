import { Link, useNavigate } from "react-router-dom";
import type { Conversation } from "@/types";
import { getRelativeTime } from "@/lib";

type MessageDropdownProps = {
  conversations: Conversation[];
  selectedUserId?: number;
  onSelectUser?: (userId: number) => void;
  onClose: () => void;
};

export function MessageDropdown({
  conversations,
  selectedUserId,
  onSelectUser,
  onClose,
}: MessageDropdownProps) {
  const navigate = useNavigate();
  const topConversations = [...conversations]
    .sort((a, b) => {
      const aTime = new Date(a.messages[a.messages.length - 1].time).getTime();
      const bTime = new Date(b.messages[b.messages.length - 1].time).getTime();
      return bTime - aTime; 
    })
    .slice(0, 5);

  const handleSelectUser = (convId: number) => {
    onSelectUser?.(convId);
    navigate(`/patient-dashboard/messages/${convId}`);
    onClose();
  };

  return (
    <div
      className="
        absolute right-0 mt-3 w-80 bg-white rounded-xl z-50
        shadow-lg shadow-black/10
        backdrop-blur-sm
        overflow-hidden
        animate-in fade-in zoom-in-95 duration-150
      "
    >
      <div className="px-4 py-3 font-semibold text-gray-700 bg-white/80 backdrop-blur-sm">
        Messages
      </div>
      <div className="max-h-80 overflow-y-auto">
        {topConversations.length === 0 ? (
          <div className="p-4 text-sm text-gray-500 text-center">
            No messages
          </div>
        ) : (
          topConversations.map((conv) => {
            const latestMessage = conv.messages[conv.messages.length - 1];
            const isUnread = !latestMessage.read;

            return (
              <div
                key={conv.id}
                onClick={() => handleSelectUser(conv.id)}
                className={`
                  px-4 py-3 cursor-pointer
                  transition-all duration-150
                  hover:bg-gray-50
                  active:bg-gray-100
                  ${isUnread ? "bg-blue-50 font-semibold" : ""}
                  ${conv.id === selectedUserId ? "border-l-4 border-blue-600" : ""}
                `}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-sm text-gray-800">{conv.user}</span>
                  <span className="text-xs text-gray-400">
                    {getRelativeTime(latestMessage.time)}
                  </span>
                </div>
                <div className="text-sm text-gray-500 truncate mt-0.5">
                  {latestMessage.text}
                </div>
              </div>
            );
          })
        )}
      </div>
      <Link
        to="/patient-dashboard/messages"
        onClick={onClose}
        className="
          block text-center py-3 text-sm font-medium text-blue-600
          hover:bg-gray-50 hover:underline
          transition
        "
      >
        View all messages
      </Link>
    </div>
  );
}