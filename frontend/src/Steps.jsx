import React, { useEffect, useRef } from "react";
import "./styling/steps.scss";
import { FaFileAlt, FaQrcode, FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    step: "1",
    icon: <FaFileAlt />,
    title: "Upload Documents",
    desc: "Upload your driving license, RC book, and other vehicle documents securely.",
    side: "left",
  },
  {
    step: "2",
    icon: <FaQrcode />,
    title: "Generate QR Code",
    desc: "Our system encrypts and generates a unique QR code for your documents.",
    side: "right",
  },
  {
    step: "3",
    icon: <FaCheckCircle />,
    title: "Verified Access",
    desc: "After biometric verification, officer views your documents instantly.",
    side: "left",
  },
];

const Steps = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    itemsRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <p className="subtitle">
        Simple Three-step process to secure and verify your vehicle documents.
      </p>

      <div className="timeline">
        <div className="center-line"></div>

        {steps.map((item, index) => (
          <div
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            className={`timeline-item ${item.side}`}
          >
            <div className="content">
              <div className="icon-box">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>

            <div className="step-number">{item.step}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
