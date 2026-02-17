import { useState } from "react";
import { ModalImg } from "@/assets";
import { useAuth } from "@/context";
import type { User } from "@/types";
import { useNavigate } from "react-router-dom";

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onForgotPassword: () => void;
  onLoginSuccess: (user: User) => void;
};

export function LoginModal({ isOpen, onClose, onForgotPassword, onLoginSuccess }: LoginModalProps) {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth(); // only need login function
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleLogin = () => {
    const user: User | null = login(identifier, password); // login returns user or null

    if (user) {
      setError("");

      // Role-based navigation
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

      onLoginSuccess(user);
      onClose();
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.50)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 50,
      }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "1rem",
          width: "24rem",
          padding: "2rem",
          position: "relative",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={ModalImg.logo1}
          alt="Dental Clinic Logo"
          style={{ width: "180px", height: "100px", marginBottom: "1rem" }}
        />
        <p style={{ color: "#6b7280", textAlign: "center", marginBottom: "1rem" }}>
          Welcome back! Sign in to continue
        </p>

        {/* START FORM */}
        <form
          style={{ width: "100%", display: "flex", flexDirection: "column" }}
          onSubmit={(e) => {
            e.preventDefault(); // prevent page reload
            handleLogin();
          }}
        >
          <label htmlFor="email" style={{ alignSelf: "flex-start", marginBottom: "0.25rem" }}>
            Email
          </label>
          <input
            type="text"
            id="email"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            placeholder="Enter your email or contact"
            style={{
              width: "100%",
              marginBottom: "0.75rem",
              padding: "0.5rem",
              borderRadius: "0.5rem",
              border: "1px solid #d1d5db",
              outline: "none",
            }}
          />

          <label htmlFor="password" style={{ alignSelf: "flex-start", marginBottom: "0.25rem" }}>
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            style={{
              width: "100%",
              marginBottom: "1rem",
              padding: "0.5rem",
              borderRadius: "0.5rem",
              border: "1px solid #d1d5db",
              outline: "none",
            }}
          />

          {error && <p style={{ color: "red", marginBottom: "0.5rem" }}>{error}</p>}

          <button
            type="submit"
            style={{
              width: "100%",
              backgroundColor: "#3b82f6",
              color: "white",
              padding: "0.5rem",
              borderRadius: "0.5rem",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#3b82f6")}
          >
            Login
          </button>
        </form>
        {/* END FORM */}

        <p
          style={{
            textAlign: "center",
            color: "#3b82f6",
            marginTop: "1rem",
            cursor: "pointer",
            textDecoration: "underline",
            fontSize: "0.875rem",
          }}
          onClick={onForgotPassword}
        >
          Forgot Password?
        </p>

        <button
          style={{
            position: "absolute",
            top: "0.75rem",
            right: "0.75rem",
            color: "#9ca3af",
            background: "transparent",
            border: "none",
            fontSize: "1rem",
            cursor: "pointer",
          }}
          onClick={onClose}
          onMouseOver={(e) => (e.currentTarget.style.color = "#6b7280")}
          onMouseOut={(e) => (e.currentTarget.style.color = "#9ca3af")}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
