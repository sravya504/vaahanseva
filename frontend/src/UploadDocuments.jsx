// import React from "react";
// import "./styling/UploadDocuments.scss";

// const UploadDocuments = () => {
//   return (
//     <section className="upload-docs">
//       <h2>Upload Vehicle Documents</h2>
//       <p className="subtitle">
//         Securely upload your vehicle documents to generate a verified QR code.
//       </p>

//       <form className="upload-form">
//         {/* Vehicle Info */}
//         <div className="form-group">
//           <label>Vehicle Number</label>
//           <input type="text" placeholder="AP 09 AB 1234" />
//         </div>

//         <div className="form-group">
//           <label>Vehicle Type</label>
//           <select>
//             <option>Two Wheeler</option>
//             <option>Four Wheeler</option>
//             <option>Commercial</option>
//           </select>
//         </div>

//         {/* Owner Info */}
//         <div className="form-group">
//           <label>Owner Name</label>
//           <input type="text" placeholder="Enter owner name" />
//         </div>

//         <div className="form-group">
//           <label>Mobile Number</label>
//           <input type="tel" placeholder="Enter mobile number" />
//         </div>

//         {/* Documents */}
//         <div className="form-group file">
//   <label>RC</label>
//   <input type="file" onChange={(e) => setRc(e.target.files[0])} required />
// </div>

// <div className="form-group file">
//   <label>Driving License</label>
//   <input type="file" onChange={(e) => setLicense(e.target.files[0])} required />
// </div>

// <div className="form-group file">
//   <label>Aadhar</label>
//   <input type="file" onChange={(e) => setAadhar(e.target.files[0])} required />
// </div>

// <div className="form-group file">
//   <label>Pollution Certificate</label>
//   <input type="file" onChange={(e) => setPollution(e.target.files[0])} required />
// </div>

// <div className="form-group file">
//   <label>Vehicle Registration Document</label>
//   <input type="file" onChange={(e) => setVehicleDoc(e.target.files[0])} required />
// </div>

// <div className="form-group file">
//   <label>Insurance</label>
//   <input type="file" onChange={(e) => setInsurance(e.target.files[0])} required />
// </div>

//         <button type="submit" className="btn-submit">
//           Upload & Generate QR
//         </button>
//       </form>
//     </section>
//   );
// };

// export default UploadDocuments;

import React, { useState } from "react";
import axios from "axios";
import "./styling/UploadDocuments.scss";

const UploadDocuments = () => {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleType, setVehicleType] = useState("Two Wheeler");
  const [ownerName, setOwnerName] = useState("");
  const [mobile, setMobile] = useState("");

  const [rc, setRc] = useState(null);
  const [license, setLicense] = useState(null);
  const [aadhar, setAadhar] = useState(null);
  const [pollution, setPollution] = useState(null);
  const [vehicleDoc, setVehicleDoc] = useState(null);
  const [insurance, setInsurance] = useState(null);

  const [qrCode, setQrCode] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("vehicleNumber", vehicleNumber);
    formData.append("vehicleType", vehicleType);
    formData.append("ownerName", ownerName);
    formData.append("mobile", mobile);

    formData.append("rc", rc);
    formData.append("license", license);
    formData.append("aadhar", aadhar);
    formData.append("pollution", pollution);
    formData.append("vehicleDoc", vehicleDoc);
    formData.append("insurance", insurance);

    try {
      const res = await axios.post(
        "https://vaahanseva-backend02.onrender.com/api/upload-docs",
        formData,
      );

      if (res.data.success) {
        setQrCode(res.data.qrCode);
      }
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  // ✅ WhatsApp Share (IMAGE LINK)
  const shareOnWhatsApp = () => {
    const message = `Vehicle QR Code:\n${qrCode}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="upload-docs">
      <h2>Upload Vehicle Documents</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Vehicle Number"
          value={vehicleNumber}
          onChange={(e) => setVehicleNumber(e.target.value)}
          required
        />

        <select
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
        >
          <option>Two Wheeler</option>
          <option>Four Wheeler</option>
          <option>Commercial</option>
        </select>

        <input
          placeholder="Owner Name"
          value={ownerName}
          onChange={(e) => setOwnerName(e.target.value)}
          required
        />

        <input
          placeholder="Mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />

        <input
          type="file"
          onChange={(e) => setRc(e.target.files[0])}
          required
        />
        <input
          type="file"
          onChange={(e) => setLicense(e.target.files[0])}
          required
        />
        <input
          type="file"
          onChange={(e) => setAadhar(e.target.files[0])}
          required
        />
        <input
          type="file"
          onChange={(e) => setPollution(e.target.files[0])}
          required
        />
        <input
          type="file"
          onChange={(e) => setVehicleDoc(e.target.files[0])}
          required
        />
        <input
          type="file"
          onChange={(e) => setInsurance(e.target.files[0])}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Generating QR..." : "Upload & Generate QR"}
        </button>
      </form>

      {qrCode && (
        <div className="qr-section">
          <h3>Scan this QR</h3>
          <img src={qrCode} alt="QR Code" />

          <button className="whatsapp-btn" onClick={shareOnWhatsApp}>
            Share on WhatsApp
          </button>
        </div>
      )}
    </section>
  );
};

export default UploadDocuments;
