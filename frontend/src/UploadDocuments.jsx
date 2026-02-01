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
  // Vehicle info state
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleType, setVehicleType] = useState("Two Wheeler");
  const [ownerName, setOwnerName] = useState("");
  const [mobile, setMobile] = useState("");

  // File state for 6 documents
  const [rc, setRc] = useState(null);
  const [license, setLicense] = useState(null);
  const [aadhar, setAadhar] = useState(null);
  const [pollution, setPollution] = useState(null);
  const [vehicleDoc, setVehicleDoc] = useState(null);
  const [insurance, setInsurance] = useState(null);
  const [loading, setLoading] = useState(false);


  // QR code state
  const [qrCode, setQrCode] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true); // 👈 start loading

  const formData = new FormData();
  formData.append("vehicleNumber", vehicleNumber);
  formData.append("vehicleType", vehicleType);
  formData.append("ownerName", ownerName);
  formData.append("mobile", mobile);

  if (rc) formData.append("rc", rc);
  if (license) formData.append("license", license);
  if (aadhar) formData.append("aadhar", aadhar);
  if (pollution) formData.append("pollution", pollution);
  if (vehicleDoc) formData.append("vehicleDoc", vehicleDoc);
  if (insurance) formData.append("insurance", insurance);

  try {
    const res = await axios.post(
      "https://vaahanseva-backend02.onrender.com/api/upload-docs",
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    if (res.data.success) {
      setQrCode(res.data.qrCode);
    }
  } catch (err) {
    console.error("Upload failed:", err);
  } finally {
    setLoading(false); // 👈 stop loading ALWAYS
  }
};

  return (
    <section className="upload-docs">
      <h2>Upload Vehicle Documents</h2>
      <p className="subtitle">
        Securely upload your vehicle documents to generate a verified QR code.
      </p>

      <form className="upload-form" onSubmit={handleSubmit}>
        {/* Vehicle Info */}
        <div className="form-group">
          <label>Vehicle Number</label>
          <input
            type="text"
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value)}
            placeholder="AP 09 AB 1234"
            required
          />
        </div>

        <div className="form-group">
          <label>Vehicle Type</label>
          <select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)}>
            <option>Two Wheeler</option>
            <option>Four Wheeler</option>
            <option>Commercial</option>
          </select>
        </div>

        <div className="form-group">
          <label>Owner Name</label>
          <input
            type="text"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            placeholder="Enter owner name"
            required
          />
        </div>

        <div className="form-group">
          <label>Mobile Number</label>
          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter mobile number"
            required
          />
        </div>

        {/* Document Uploads */}
        <div className="form-group file">
          <label>RC</label>
          <input type="file" onChange={(e) => setRc(e.target.files[0])} required />
        </div>

        <div className="form-group file">
          <label>Driving License</label>
          <input type="file" onChange={(e) => setLicense(e.target.files[0])} required />
        </div>

        <div className="form-group file">
          <label>Aadhar</label>
          <input type="file" onChange={(e) => setAadhar(e.target.files[0])} required />
        </div>

        <div className="form-group file">
          <label>Pollution Certificate</label>
          <input type="file" onChange={(e) => setPollution(e.target.files[0])} required />
        </div>

        <div className="form-group file">
          <label>Vehicle Registration Document</label>
          <input type="file" onChange={(e) => setVehicleDoc(e.target.files[0])} required />
        </div>

        <div className="form-group file">
          <label>Insurance</label>
          <input type="file" onChange={(e) => setInsurance(e.target.files[0])} required />
        </div>

      <button type="submit" className="btn-submit" disabled={loading}>
  {loading ? "Generating QR..." : "Upload & Generate QR"}
</button>


      </form>

      {/* Show QR Code */}
      {qrCode && (
        <div className="qr-code">
          <h3>Scan this QR</h3>
          <img src={qrCode} alt="QR Code" />
        </div>
      )}
    </section>
  );
};

export default UploadDocuments;


