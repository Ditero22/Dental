import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { LoginModal, ForgotPassword } from "./modal";
import { ModalImg } from "@/assets";
import { Bell, User } from "lucide-react";
import { useAuth } from "@/context";
import { MessageIcon } from "@/assets";
import { ConfirmModal } from "./modal";

type NavbarProps = {
  mode: "landing" | "dashboard";
  userName?: string;
  openLogin?: () => void;
};

export function Navbar({ mode, userName, openLogin }: NavbarProps) {
  const { loggedUser, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isForgotOpen, setIsForgotOpen] = useState(false);
  const [confirmLogout, setConfirmLogout] = useState(false);

  const [currentDateTime, setCurrentDateTime] = useState({
    date: "",
    time: ""
  });

  const navigate = useNavigate();
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mode === "dashboard") {
      const interval = setInterval(() => {
        const now = new Date();
        setCurrentDateTime({
          date: now.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          }),
          time: now.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }),
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [mode]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const openLogoutConfirm = () => {
    setIsUserMenuOpen(false);
    setIsOpen(false);
    setConfirmLogout(true);
  };

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-8xl mx-auto px-4 h-14 md:h-14 lg:h-16 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex h-full items-center">
            <img
              src={ModalImg.logo3}
              alt="Logo"
              className="w-40 h-20 object-contain"
            />
          </Link>

          {mode === "dashboard" && (
            <div className="hidden sm:flex items-center space-x-2 text-gray-700 font-medium">
              <span className="h-6 w-px bg-gray-300"></span>
              <span className="border border-gray-300 px-2 py-1 rounded">
                {currentDateTime.date}
              </span>
              <span className="h-6 w-px bg-gray-300"></span>
              <span className="font-mono">{currentDateTime.time}</span>
            </div>
          )}
        </div>
        {mode === "landing" && (
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            <Link to="/service" className="hover:text-blue-600 transition">Service</Link>
            <Link to="/appointment" className="hover:text-blue-600 transition">Appointment</Link>

            {!loggedUser && openLogin ? (
              <button
                className="bg-[#2F80C1] text-white px-6 py-1 rounded-2xl hover:bg-[#add8e6] transition"
                onClick={openLogin}
              >
                Login
              </button>
            ) : loggedUser ? (
              <div className="relative" ref={userMenuRef}>
                <User
                  className="w-8 h-8 text-gray-600 cursor-pointer rounded-full border border-gray-300 p-1 ml-[30px] mr-[25px]"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                />

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-2xl z-50">
                    <Link
                      to="/patient-dashboard/profile"
                      className="block px-6 py-3 hover:bg-gray-100"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Profile
                    </Link>

                    <div className="border-t border-gray-200 mx-4"></div>

                    <button
                      onClick={openLogoutConfirm}
                      className="w-full text-left px-6 py-3 text-red-600 hover:bg-red-50"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : null}
          </div>
        )}
        {mode === "dashboard" && (
          <div className="flex items-center space-x-4 md:space-x-6">
            <MessageIcon count={99} />
            <span className="h-6 w-px bg-gray-300"/>
            <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
            <span className="hidden sm:inline">
              Welcome, <strong>{userName}</strong>!
            </span>
            <span className="h-6 w-px bg-gray-300"/>

            <div className="relative" ref={userMenuRef}>
              <User
                className="w-8 h-8 text-gray-600 cursor-pointer rounded-full border border-gray-300 p-1"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              />

              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-2xl z-50">
                  <Link
                    to="/patient-dashboard/profile"
                    className="block px-6 py-3 hover:bg-gray-100"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    Profile
                  </Link>

                  <div className="border-t border-gray-200 mx-4"></div>

                  <button
                    onClick={openLogoutConfirm}
                    className="w-full text-left px-6 py-3 text-red-600 hover:bg-red-50"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
        {mode === "landing" && (
          <button
            className="md:hidden text-2xl ml-auto"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        )}
      </div>
      {isOpen && mode === "dashboard" && (
        <div className="md:hidden bg-white shadow-md px-6 pb-6 space-y-3">
          <Link
            to="/patient-dashboard/profile"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Profile
          </Link>

          <button
            onClick={openLogoutConfirm}
            className="w-full text-left px-4 py-2 hover:bg-red-100 text-red-600"
          >
            Logout
          </button>
        </div>
      )}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onForgotPassword={() => {
          setIsLoginOpen(false);
          setIsForgotOpen(true);
        }}
        onLoginSuccess={(user) => {
          switch (user.role) {
            case "Admin":
              navigate("/admin-dashboard");
              break;
            case "Staff":
              navigate("/staff-dashboard");
              break;
            case "Patient":
              navigate("/patient-dashboard");
              break;
            default:
              navigate("/");
          }
          setIsLoginOpen(false);
        }}
      />

      <ForgotPassword
        isOpen={isForgotOpen}
        onClose={() => setIsForgotOpen(false)}
      />
      <ConfirmModal
        isOpen={confirmLogout}
        title="Please Confirm"
        message="Are you sure you want to logout?"
        confirmText="Logout"
        onConfirm={() => {
          setConfirmLogout(false);
          handleLogout();
        }}
        onCancel={() => setConfirmLogout(false)}
      />
    </nav>
  );
}
