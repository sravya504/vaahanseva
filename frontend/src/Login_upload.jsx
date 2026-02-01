
import "./styling/Login.scss";
import { useNavigate,useLocation} from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(""); // success | error

 const handleLogin = (e) => {
  e.preventDefault();

  if (email === "vaahan@gmail.com" && password === "vaahanseva") {
    setStatus("success");

    const { qrCode, from } = location.state || {};

    setTimeout(() => {
      // 👉 If coming from WhatsApp share
      if (qrCode) {
        const message = `Scan this QR to view vehicle documents:\n${qrCode}`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
      }

      // 👉 Go back after login
      navigate(from || "/upload-documents");
    }, 1200);
  } else {
    setStatus("error");
  }
};


  return (
    <div className="auth-page">
      <div className="glass-card">
        <h2>Admin Login</h2>
        <br />

        


        <form onSubmit={handleLogin}>
          <div className="field">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="field">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="btn-primary">Login</button>
        </form>
        {/* Login status message (bottom) */}
      {status && (
        <div className={`login-message-bottom ${status}`}>
        {status === "success"
            ? "LOGIN SUCCESSFUL"
            : "INVALID CREDENTIALS"}
        </div>
      )}
      </div>
    </div>
  );
}
