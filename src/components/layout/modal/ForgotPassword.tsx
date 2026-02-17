import { ModalImg } from "@/assets";

type ForgotPasswordProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function ForgotPassword({ isOpen, onClose,  }: ForgotPasswordProps) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.50)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 50,
      }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "1rem",
          width: "24rem",
          padding: "2.5rem 2rem",
          position: "relative",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={ModalImg.logo2}
          alt="Dental Clinic Logo"
          style={{ width: "60px", height: "60px", marginBottom: "1rem" }}
        />
        <h2 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "0.25rem" }}>
          Dental Clinic
        </h2>
        <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
          Forgot Password?
        </h3>
        <p style={{ color: "#6b7280", textAlign: "center", marginBottom: "1.5rem" }}>
          Enter your email or phone number to reset password.
        </p>
        <label style={{ alignSelf: "flex-start", marginBottom: "0.25rem" }}>Email</label>
        <input
          type="text"
          placeholder="Enter your email or phone number"
          style={{
            width: "100%",
            padding: "0.5rem",
            borderRadius: "0.5rem",
            border: "1px solid #d1d5db",
            marginBottom: "1rem",
            outline: "none",
          }}
        />
        <button
          style={{
            width: "100%",
            backgroundColor: "#3b82f6",
            color: "white",
            padding: "0.5rem",
            borderRadius: "0.5rem",
            cursor: "pointer",
            marginBottom: "0.75rem",
            fontWeight: "bold",
          }}
        >
          Confirm
        </button>
        <p style={{ fontSize: "0.875rem", color: "#3b82f6", textAlign: "center", cursor: "pointer" }}>
          Need help accessing your account? <span style={{ textDecoration: "underline" }}>Click here</span>
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
