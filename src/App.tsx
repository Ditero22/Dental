import { useState } from "react";
import { Navbar, LoginModal, ForgotPassword } from "@/components";
import { LandingPage } from "./pages";
import { useNavigate } from "react-router-dom";

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isForgotOpen, setIsForgotOpen] = useState(false);
  const navigate = useNavigate();

  return (
     <div className="absolute top-0 left-0 w-full h-full bg-[#f4f4f4] -z-30">
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar
          mode="landing"
          openLogin={() => setIsLoginOpen(true)}
        />
      </div>
      <LandingPage openLogin={() => setIsLoginOpen(true)} />
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onForgotPassword={() => {
          setIsLoginOpen(false); // close login modal
          setIsForgotOpen(true); // open forgot password modal
        }}
        onLoginSuccess={(user) => {
          // redirect based on role
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

      {/* Forgot Password Modal */}
      <ForgotPassword
        isOpen={isForgotOpen}
        onClose={() => setIsForgotOpen(false)}
      />
     </div>
     
  )
}