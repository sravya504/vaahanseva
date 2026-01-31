

// import "./styling/home.scss";
// import Footer from "./Footer.jsx";
// import { useNavigate, NavLink } from "react-router-dom";

// const Home = () => {
//   const navigate = useNavigate();

//   const goToLogin = () => navigate("/login");
//   const goToGenerate = () => navigate("/upload-documents");

//   return (
//     <div className="home">
//       <header className="navbar">
//         <div className="logo">
//           <span className="icon">▣</span> VaahanSeva
//         </div>

//         {/* ✅ REPLACED HERE */}
//         <nav className="menu">
//           <NavLink to="/features">Features</NavLink>
//           <NavLink to="/steps">How it Works</NavLink>
//           <NavLink to="/upload-documents">Generate QR</NavLink>
//         </nav>

//         <div className="nav-buttons">
//           <button className="btn-outline" onClick={goToLogin}>
//             Sign In
//           </button>
//           <button className="btn-primary" onClick={goToLogin}>
//             Get Started
//           </button>
//         </div>
//       </header>

//       {/* Hero */}
//       <section className="hero">
//         <h1>Smarter Vehicle Verification</h1>
//         <h3>Secured in One Scan</h3>
//         <p>
//           Never worry about forgetting your driving license or RC documents
//           again. Generate secure QR codes with biometric authentication.
//         </p>

//         <div className="hero-buttons generate-btn">
//           <button className="btn-primary" onClick={goToGenerate}>
//             Generate Your QR Code
//           </button>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Home;




import "./styling/home.scss";
import Footer from "./Footer.jsx";
import { useNavigate, NavLink } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // 🔐 Always go to login first
  const goToLogin = () => navigate("/login");

  return (
    <div className="home">
      <header className="navbar">
        <div className="logo">
          <span className="icon">▣</span> VaahanSeva
        </div>

        <nav className="menu">
          <NavLink to="/features">Features</NavLink>
          <NavLink to="/steps">How it Works</NavLink>

          {/* Generate QR → Login first */}
          <NavLink to="/login">Generate QR</NavLink>
        </nav>

        <div className="nav-buttons">
          {/* <button className="btn-outline" onClick={goToLogin}>
            Sign In
          </button> */}
          <button className="btn-primary" onClick={goToLogin}>
            Get Started
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <h1>Smarter Vehicle Verification</h1>
        <h3>Secured in One Scan</h3>
        <p>
          Never worry about forgetting your driving license or RC documents
          again. Generate secure QR codes with biometric authentication.
        </p>

        <div className="hero-buttons generate-btn">
          <button className="btn-primary" onClick={goToLogin}>
            Generate Your QR Code
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
