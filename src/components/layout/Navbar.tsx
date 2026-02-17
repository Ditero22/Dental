import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { LoginModal, ForgotPassword } from "./modal";
import { ModalImg } from "@/assets";
import { Bell, User } from "lucide-react";
import { useAuth } from "@/context";

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
  const [currentDate, setCurrentDate] = useState("");
  const navigate = useNavigate();
  const userMenuRef = useRef<HTMLDivElement>(null);

  // Dashboard date
  useEffect(() => {
    if (mode === "dashboard") {
      const interval = setInterval(() => {
        const date = new Date();
        setCurrentDate(
          date.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })
        );
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [mode]);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
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

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-8xl mx-auto px-4 h-14 md:h-14 lg:h-16 flex justify-between items-center">
        <Link to="/" className="flex h-full">
          <img src={ModalImg.logo3} alt="Logo" className="h-full w-auto object-contain" />
        </Link>
        {mode === "landing" && (
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            <Link to="/service" className="hover:text-blue-600 transition">Service</Link>
            <Link to="/appointment" className="hover:text-blue-600 transition">Appointment</Link>

            {!loggedUser && openLogin && (
              <button
                className="bg-[#2F80C1] text-white px-6 py-1 rounded-2xl hover:bg-[#add8e6] transition"
                onClick={openLogin}
              >
                Login
              </button>
            )}
          </div>
        )}
        {mode === "dashboard" && (
          <div className="flex items-center space-x-4 md:space-x-8 ml-auto relative">
            <span className="hidden sm:inline">{currentDate}</span>
            <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
            <span className="hidden sm:inline">
              Welcome, <strong>{userName}</strong>!
            </span>

            <div className="relative" ref={userMenuRef}>
              <User
                className="w-8 h-8 text-gray-600 cursor-pointer rounded-full border border-gray-300 p-1"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              />

              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-2xl z-50">
                  <Link
                    to="/profile"
                    className="block px-6 py-3 text-gray-700 text-base hover:bg-gray-100 rounded-t-xl transition"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <div className="border-t border-gray-200 mx-4"></div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-6 py-3 text-red-600 text-base hover:bg-red-50 rounded-b-xl transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {(mode === "landing") && (
          <button
            className="md:hidden text-2xl ml-auto"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        )}
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-6 space-y-3">
          {mode === "landing" && (
            <>
              <Link to="/" className="block">Home</Link>
              <Link to="/service" className="block">Service</Link>
              <Link to="/appointment" className="block">Appointment</Link>
              {!loggedUser && openLogin && (
                <button
                  className="block bg-blue-600 text-white px-4 py-2 rounded-lg w-full text-center"
                  onClick={openLogin}
                >
                  Login
                </button>
              )}
            </>
          )}
          {mode === "dashboard" && (
            <>
              <Link
                to="/profile"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 hover:bg-red-100 text-red-600"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}

      {/* Modals */}
      <>
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
      </>
    </nav>
  );
}
