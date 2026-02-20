import { getRelativeTime } from "@/lib";
import type { Notification } from "@/types";

export type NotifDropdownProps = {
  notifications: Notification[];
  isOpen: boolean;
};

export function NotifDropdown({ notifications, isOpen }: NotifDropdownProps) {
  if (!isOpen) return null;

  const sortedNotifications = [...notifications].sort((a, b) => b.id - a.id);

  return (
    <div className="absolute right-0 mt-3 w-80 bg-white rounded-xl shadow-2xl z-50">
      <div className="px-4 py-3 font-semibold text-gray-700">Notifications</div>
      <div className="max-h-80 overflow-y-auto">
        {sortedNotifications.length === 0 ? (
          <div className="p-4 text-sm text-gray-500 text-center">No notifications</div>
        ) : (
          sortedNotifications.map((notif) => (
            <div
              key={notif.id}
              className={`px-4 py-3 cursor-pointer hover:bg-gray-100 transition ${
                !notif.read ? "bg-blue-50" : ""
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium text-sm">{notif.title}</span>
                <span className="text-xs text-gray-400">{getRelativeTime(notif.date)}</span>
              </div>
              <div className="text-sm text-gray-600">{notif.message}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}