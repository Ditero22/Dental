import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { conversations as initialConversations, type Conversation, type Message } from "@/types";
import { Send } from "lucide-react";
import { Navbar } from "@/components";
import { useAuth } from "@/context";
import { getRelativeTime } from "@/lib";

export function Messages() {
  const { loggedUser } = useAuth();
  const userName = loggedUser?.name || "User";
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();

  const [conversations, setConversations] = useState<Conversation[]>(
    [...initialConversations].sort((a, b) => new Date(b.lastTime).getTime() - new Date(a.lastTime).getTime())
  );
  const [selectedUserId, setSelectedUserId] = useState<number | null>(
    userId ? parseInt(userId) : conversations[0]?.id || null
  );
  const [newMessageText, setNewMessageText] = useState("");
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const selectedConversation = conversations.find(c => c.id === selectedUserId);

  useEffect(() => {
    if (userId) setSelectedUserId(parseInt(userId));
  }, [userId]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedConversation?.messages]);

  const handleSendMessage = () => {
    if (!selectedConversation || !newMessageText.trim()) return;

    const now = new Date();
    const newMessage: Message = {
      id: Date.now(),
      sender: "You",
      text: newMessageText,
      time: now.toISOString(),
      read: true,
    };

    const updatedConversations = conversations.map(c =>
      c.id === selectedConversation.id
        ? {
            ...c,
            messages: [...c.messages, newMessage],
            lastMessage: newMessage.text,
            lastTime: newMessage.time,
          }
        : c
    ).sort((a, b) => new Date(b.lastTime).getTime() - new Date(a.lastTime).getTime());

    setConversations(updatedConversations);
    setNewMessageText("");
  };

  const handleSelectUser = (id: number) => {
    setSelectedUserId(id);
    navigate(`/patient-dashboard/messages/${id}`);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Navbar mode="dashboard" userName={userName} />
      <div className="flex flex-1 mt-20 mb-4 mx-4 gap-4">
        <div className="w-1/4 bg-white rounded-xl shadow-md border overflow-y-auto">
          <h2 className="p-4 font-semibold text-lg border-b">Users</h2>
          {conversations.map(conv => (
            <div
              key={conv.id}
              className={`p-4 cursor-pointer hover:bg-gray-100 transition ${
                conv.id === selectedUserId ? "bg-blue-100 font-semibold" : ""
              }`}
              onClick={() => handleSelectUser(conv.id)}
            >
              <div className="flex justify-between">
                <span className="font-medium">{conv.user}</span>
                <span className="text-xs text-gray-400">{getRelativeTime(conv.lastTime)}</span>
              </div>
              <div className="text-sm text-gray-600 truncate">{conv.lastMessage}</div>
            </div>
          ))}
        </div>

        <div className="w-3/4 flex flex-col bg-white rounded-xl shadow-md border">
          <div className="flex-1 p-4 overflow-y-auto space-y-2">
            {selectedConversation ? (
              [...selectedConversation.messages]
                .sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime())
                .map(msg => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === "You" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`px-4 py-2 rounded-lg max-w-xs break-words ${
                        msg.sender === "You"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      <div className="text-sm">{msg.text}</div>
                      <div className="text-xs text-gray-400 mt-1 text-right">
                        {getRelativeTime(msg.time)}
                      </div>
                    </div>
                  </div>
                ))
            ) : (
              <div className="text-gray-500 text-center mt-10">
                Select a user to start chatting
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="p-4 border-t flex items-center gap-2 bg-gray-50">
            <input
              type="text"
              className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Type a message..."
              value={newMessageText}
              onChange={e => setNewMessageText(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSendMessage()}
            />
            <button
              onClick={handleSendMessage}
              className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
