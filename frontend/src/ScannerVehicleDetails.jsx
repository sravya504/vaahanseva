// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const ScannerVehicleDetails = () => {
//   const { id } = useParams();
//   const [vehicle, setVehicle] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchVehicle = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:5000/api/vehicle/${id}`
//         );
//         setVehicle(res.data);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchVehicle();
//   }, [id]);

//   if (loading) return <h2>Loading vehicle details...</h2>;
//   if (!vehicle) return <h2>Vehicle not found</h2>;

//   return (
//     <div className="vehicle-details">
//       <h2>Vehicle Information</h2>

//       <p><strong>Owner:</strong> {vehicle.ownerName}</p>
//       <p><strong>Vehicle Number:</strong> {vehicle.vehicleNumber}</p>
//       <p><strong>Type:</strong> {vehicle.vehicleType}</p>
//       <p><strong>Mobile:</strong> {vehicle.mobile}</p>

//       <h3>Documents</h3>

//       {Object.entries(vehicle.documents).map(([key, url]) => (
//         <div key={key}>
//           <p>{key.toUpperCase()}</p>

//           {url.endsWith(".pdf") ? (
//             <a href={url} target="_blank" rel="noreferrer">
//               View PDF
//             </a>
//           ) : (
//             <img src={url} alt={key} width="250" />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ScannerVehicleDetails;


import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./styling/ScannerVehicleDetails.scss";

const ScannerVehicleDetails = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const res = await axios.get(
          `https://vaahanseva-backend02.onrender.com/api/vehicle/${id}`
        );
        setVehicle(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicle();
  }, [id]);

  if (loading) return <h2>Loading vehicle details...</h2>;
  if (!vehicle) return <h2>Vehicle not found</h2>;

  return (
    <div className="auth-page">
      <div className="glass-card scanner-card">
        <h2>Vehicle Information</h2>
        <p className="subtitle">Verified via QR Code</p>

        <div className="info-grid">
          <div><span>Owner</span>{vehicle.ownerName}</div>
          <div><span>Vehicle Number</span>{vehicle.vehicleNumber}</div>
          <div><span>Type</span>{vehicle.vehicleType}</div>
          <div><span>Mobile</span>{vehicle.mobile}</div>
        </div>

        <h3>Documents</h3>

        <div className="docs-grid">
          {Object.entries(vehicle.documents).map(([key, url]) => (
            <div className="doc-card" key={key}>
              <p>{key.toUpperCase()}</p>

              {url.endsWith(".pdf") ? (
                <a href={url} target="_blank" rel="noreferrer">
                  View PDF
                </a>
              ) : (
                <img src={url} alt={key} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScannerVehicleDetails;
