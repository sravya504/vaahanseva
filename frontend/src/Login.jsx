
// import "./styling/Login.scss";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// export default function Login() {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [status, setStatus] = useState(""); // success | error

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (email === "vaahan@gmail.com" && password === "vaahanseva") {
//       setStatus("success");

//       setTimeout(() => {
//         navigate("/upload-documents");
//       }, 1200);
//     } else {
//       setStatus("error");
//     }
//   };

//   return (
//     <div className="auth-page">
//       <div className="glass-card">
//         <h2>Admin Login</h2>
//         <br />

//         {/* ✅ Message appears ONLY after login click */}
//         {status && (
//           <div className={`login-message ${status}`}>
//             {status === "success"
//               ? "Login successful"
//               : "Invalid credentials"}
//           </div>
//         )}

//         <form onSubmit={handleLogin}>
//           <div className="field">
//             <label>Email Address</label>
//             <input
//               type="email"
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="field">
//             <label>Password</label>
//             <input
//               type="password"
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <button className="btn-primary">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// }


import "./styling/Login.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(""); // success | error

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "vaahan@gmail.com" && password === "vaahanseva") {
      setStatus("success");

      // small delay so user sees success message
      setTimeout(() => {
        navigate("/upload-documents");
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
