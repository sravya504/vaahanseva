

// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./styling/ScannerVehicleDetails.scss";

// const ScannerVehicleDetails = () => {
//   const { id } = useParams();
//   const [vehicle, setVehicle] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchVehicle = async () => {
//       try {
//         const res = await axios.get(
//           `https://vaahanseva-backend02.onrender.com/api/vehicle/${id}`
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
//     <div className="auth-page">
//       <div className="glass-card scanner-card">
//         <h2>Vehicle Information</h2>
//         <p className="subtitle">Verified via QR Code</p>

//         <div className="info-grid">
//           <div><span>Owner</span>{vehicle.ownerName}</div>
//           <div><span>Vehicle Number</span>{vehicle.vehicleNumber}</div>
//           <div><span>Type</span>{vehicle.vehicleType}</div>
//           <div><span>Mobile</span>{vehicle.mobile}</div>
//         </div>

//         <h3>Documents</h3>

//         <div className="docs-grid">
//         {Object.entries(vehicle.documents).map(([key, url]) => (
//   <div className="doc-card" key={key}>
//     <p>{key.toUpperCase()}</p>

//     {url.endsWith(".pdf") ? (
//       <a href={url} target="_blank" rel="noreferrer">
//         View PDF
//       </a>
//     ) : (
//       <a href={url} target="_blank" rel="noreferrer">
//         <img src={url} alt={key} />
//       </a>
//     )}
//   </div>
// ))}

//         </div>
//       </div>
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
  const [modalImage, setModalImage] = useState(null); // <-- modal state

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
                <img
                  src={url}
                  alt={key}
                  style={{ cursor: "pointer" }}
                  onClick={() => setModalImage(url)} // <-- open modal
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal for full-screen image */}
      {modalImage && (
        <div
          className="modal"
          onClick={() => setModalImage(null)}
        >
          <img src={modalImage} alt="full" />
        </div>
      )}
    </div>
  );
};

export default ScannerVehicleDetails;
