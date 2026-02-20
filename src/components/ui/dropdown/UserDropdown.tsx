import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react";

type UserDropdownProps = {
  onLogout: () => void;
  profilePath: string;
  iconClassName?: string;
};

export default function UserDropdown({
  onLogout,
  profilePath,
  iconClassName = "",
}: UserDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <User
        className={`w-8 h-8 text-gray-600 cursor-pointer rounded-full border border-gray-300 p-1 ${iconClassName}`}
        onClick={() => setIsOpen(!isOpen)}
      />

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-2xl z-50">
          <Link
            to={profilePath}
            className="block px-6 py-3 text-gray-700 text-base hover:bg-gray-100 rounded-t-xl transition"
            onClick={() => setIsOpen(false)}
          >
            Profile
          </Link>

          <div className="border-t border-gray-200 mx-4"></div>

          <button
            onClick={() => {
              setIsOpen(false);
              onLogout();
            }}
            className="w-full text-left px-6 py-3 text-red-600 text-base hover:bg-red-50 rounded-b-xl transition"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}