import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
<<<<<<< HEAD
import { LoginModal, ForgotPassword } from "./modal";
import { ModalImg } from "@/assets";
import { Bell, User } from "lucide-react";
import { useAuth } from "@/context";
import { MessageIcon } from "@/assets";
import { ConfirmModal } from "./modal";
=======
import { LoginModal, ForgotPassword } from "../modal";
import { ModalImg, MessageIcon } from "@/assets";
import { Bell } from "lucide-react";
import { useAuth } from "@/context";
import { cn } from '@/lib';
import { MessageDropdown, UserDropdown, NotifDropdown } from "../ui";
import { conversations, notifications } from "@/types";
>>>>>>> main

type NavbarProps = {
  className?: string;
  mode: "landing" | "dashboard";
  userName?: string;
  openLogin?: () => void;
};
export default Navbar;

export function Navbar({ className, mode, userName, openLogin }: NavbarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const { loggedUser, logout } = useAuth();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isForgotOpen, setIsForgotOpen] = useState(false);
<<<<<<< HEAD
  const [confirmLogout, setConfirmLogout] = useState(false);
=======
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);

  const messageRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);

  const isOnMessagesPage =
    location.pathname.startsWith("/patient-dashboard/messages");
>>>>>>> main

  const [currentDateTime, setCurrentDateTime] = useState({
    date: "",
    time: "",
  });

<<<<<<< HEAD
  const navigate = useNavigate();
  const userMenuRef = useRef<HTMLDivElement>(null);
=======
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (messageRef.current && !messageRef.current.contains(event.target as Node)) {
        setIsMessageOpen(false);
      }
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setIsNotifOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
>>>>>>> main

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

<<<<<<< HEAD
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

=======
>>>>>>> main
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
    <nav className={cn('w-full bg-white shadow-md fixed top-0 left-0 z-50', className)}>
      <div className="max-w-8xl mx-auto px-4 h-14 md:h-14 lg:h-16 flex justify-between items-center">
        <div className="flex items-center space-x-4">
<<<<<<< HEAD
          <Link to="/" className="flex h-full items-center">
            <img
              src={ModalImg.logo3}
              alt="Logo"
              className="w-40 h-20 object-contain"
            />
=======
          <Link
            to={mode === "dashboard" ? "/patient-dashboard" : "/"}
            className="flex h-full items-center"
          >
            <img src={ModalImg.logo3} alt="Logo" className="w-40 h-20 object-contain" />
>>>>>>> main
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

        <div className="flex items-center space-x-4">
          {mode === "landing" && (
            <div className="hidden md:flex items-center space-x-8 ml-auto">
              <Link to="/" className="hover:text-blue-600 transition">Home</Link>
              <Link to="/service" className="hover:text-blue-600 transition">Service</Link>
              <Link to="/appointment" className="hover:text-blue-600 transition">Appointment</Link>
              {!loggedUser && openLogin ? (
                <button
                  onClick={openLogin}
                  className="px-5 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-sm hover:bg-blue-700 hover:shadow-md transition-all duration-200"
                >
                  Login
                </button>
              ) : loggedUser ? (
                <UserDropdown
                  onLogout={handleLogout}
                  profilePath="/patient-dashboard/profile"
                  settingsPath="/patient-dashboard/settings"
                />
              ) : null}
            </div>
          )}

<<<<<<< HEAD
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
=======
          {mode === "dashboard" && (
            <div className="flex items-center space-x-4 md:space-x-6">
              <div className="relative" ref={messageRef}>
                <div
                  onClick={() => {
                    if (!isOnMessagesPage) setIsMessageOpen(!isMessageOpen);
                  }}
                  className={`cursor-pointer ${isOnMessagesPage ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  <MessageIcon 
                      count={conversations.reduce(
                        (acc, conv) => acc + conv.messages.filter(msg => !msg.read).length,
                        0
                      )} 
                    />
                </div>
                {!isOnMessagesPage && isMessageOpen && (
                  <MessageDropdown conversations={conversations} onClose={() => setIsMessageOpen(false)} />
                )}
              </div>

              <div className="relative" ref={notifRef}>
                <div
                  onClick={() => setIsNotifOpen(!isNotifOpen)}
                  className="cursor-pointer"
                >
                  <Bell className="w-6 h-6 text-gray-600" />
>>>>>>> main
                </div>
                  <NotifDropdown
                    notifications={notifications}
                    isOpen={isNotifOpen}
                  />
              </div>

              <span className="hidden sm:inline">
                Welcome, <strong>{userName}</strong>!
              </span>

              <UserDropdown
                onLogout={handleLogout}
                profilePath="/patient-dashboard/profile"
                settingsPath="/patient-dashboard/settings"
                iconClassName="ml-[10px]"
              />
            </div>
          )}

          <button
            className="md:hidden flex flex-col justify-between w-6 h-6 ml-2"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            <span className={`block h-0.5 w-full bg-black transition ${isDrawerOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-full bg-black transition ${isDrawerOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-full bg-black transition ${isDrawerOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>
<<<<<<< HEAD
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
=======

      <div className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-xl z-40 transform transition-transform duration-300 ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col space-y-4 px-6 mt-16">
          {mode === "landing" && (
            <>
              <Link to="/" onClick={() => setIsDrawerOpen(false)}>Home</Link>
              <Link to="/service" onClick={() => setIsDrawerOpen(false)}>Service</Link>
              <Link to="/appointment" onClick={() => setIsDrawerOpen(false)}>Appointment</Link>
              {!loggedUser && openLogin && (
                <button onClick={openLogin} className="px-5 py-2 bg-blue-600 text-white rounded-lg">
                  Login
                </button>
              )}
            </>
          )}
          {mode === "dashboard" && (
            <>
              <Link to="/patient-dashboard/profile" onClick={() => setIsDrawerOpen(false)} className="block px-4 py-3 hover:bg-gray-100 rounded-lg transition">Profile</Link>
              <Link to="/patient-dashboard/settings" onClick={() => setIsDrawerOpen(false)} className="block px-4 py-3 hover:bg-gray-100 rounded-lg transition"></Link>
              <button onClick={handleLogout} className="text-red-600">Logout</button>
            </>
          )}
        </div>
      </div>

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onForgotPassword={() => {
          setIsLoginOpen(false);
          setIsForgotOpen(true);
        }}
        onLoginSuccess={(user) => {
          if (user.role === "Admin") navigate("/admin-dashboard");
          else if (user.role === "Staff") navigate("/staff-dashboard");
          else if (user.role === "Patient") navigate("/patient-dashboard");
          else navigate("/");
        }}
      />

      <ForgotPassword isOpen={isForgotOpen} onClose={() => setIsForgotOpen(false)} />
>>>>>>> main
    </nav>
  );
}