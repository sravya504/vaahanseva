import React from "react";
import "./styling/feature.scss";
import {
  FaQrcode,
  FaFingerprint,
  FaEye,
  FaBolt,
  FaFolderOpen,
  FaMobileAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaQrcode />,
    title: "Secure QR Generation",
    desc: "Generate encrypted QR codes containing all your vehicle documents with military-grade security.",
  },
  {
    icon: <FaFingerprint />,
    title: "Biometric Protection",
    desc: "Documents protected by iris scan and unique officer ID — only authorized personnel can access.",
  },
  
  {
    icon: <FaBolt />,
    title: "Instant Verification",
    desc: "Officers can verify documents in seconds, reducing traffic stops and improving efficiency.",
  },
  {
    icon: <FaFolderOpen />,
    title: "All Documents in One",
    desc: "Driving license, RC book, insurance, pollution certificate — everything in one QR code.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Always Available",
    desc: "No more forgotten documents. Your QR code works even without internet connectivity.",
  },
];

const Features = () => {
  return (
    <section className="why-choose">
      <h2>
        Why Choose <span>VehiScan?</span>
      </h2>
      <p className="subtitle">
        The most secure and convenient way to carry your vehicle documents digitally.
      </p>

      <div className="features">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
