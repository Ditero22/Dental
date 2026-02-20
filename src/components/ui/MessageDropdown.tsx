import { Link, useNavigate } from "react-router-dom";
import type { Conversation } from "@/types";

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
  const topConversations = conversations.slice(0, 5);
  const navigate = useNavigate();

  const handleSelectUser = (convId: number) => {
    onSelectUser?.(convId);
    navigate(`/patient-dashboard/messages/${convId}`);
    onClose();
  };

  return (
    <div className="absolute right-0 mt-3 w-80 bg-white rounded-xl shadow-2xl border z-50">
      <div className="px-4 py-3 border-b font-semibold text-gray-700">Messages</div>

      <div className="max-h-80 overflow-y-auto">
        {topConversations.length === 0 ? (
          <div className="p-4 text-sm text-gray-500 text-center">No messages</div>
        ) : (
          topConversations.map((conv) => (
            <div
              key={conv.id}
              onClick={() => handleSelectUser(conv.id)}
              className={`px-4 py-3 cursor-pointer hover:bg-gray-100 transition ${
                conv.id === selectedUserId ? "bg-blue-100 font-semibold" : ""
              }`}
            >
              <div className="flex justify-between">
                <span className="font-medium text-sm">{conv.user}</span>
                <span className="text-xs text-gray-400">{conv.lastTime}</span>
              </div>
              <div className="text-sm text-gray-600 truncate">{conv.lastMessage}</div>
            </div>
          ))
        )}
      </div>

      <div className="border-t">
        <Link
          to="/patient-dashboard/messages"
          onClick={onClose}
          className="block text-center py-3 text-sm font-medium text-blue-600 hover:bg-gray-100 transition"
        >
          View all messages
        </Link>
      </div>
    </div>
  );
}
