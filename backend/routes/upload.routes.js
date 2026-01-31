import express from "express";
import upload from "../middleware/upload.js";
import Vehicle from "../models/Vehicle.js";
import QRCode from "qrcode";


const router = express.Router();

router.post(
  "/upload-docs",
  upload.fields([
    { name: "rc" },
    { name: "license" },
    { name: "aadhar" },
    { name: "pollution" },
    { name: "vehicleDoc" },
    { name: "insurance" },
  ]),
  async (req, res) => {
    try {
      // 1️⃣ Extract text data
      const {
        vehicleNumber,
        vehicleType,
        ownerName,
        mobile,
      } = req.body;

      
      // 2️⃣ Extract Cloudinary URLs
      const documents = {
        rc: req.files.rc[0].path,
        license: req.files.license[0].path,
        aadhar: req.files.aadhar[0].path,
        pollution: req.files.pollution[0].path,
        vehicleDoc: req.files.vehicleDoc[0].path,
        insurance: req.files.insurance[0].path,
      };

      // 3️⃣ Save to MongoDB
      const vehicle = await Vehicle.create({
        vehicleNumber,
        vehicleType,
        ownerName,
        mobile,
        documents,
      });

      // 4️⃣ Generate QR Code (vehicle ID is enough)
      // const qrData = `https://yourdomain.com/vehicle/${vehicle._id}`;

const qrData = `http://localhost:5173/vehicle/${vehicle._id}`;


      const qrCode = await QRCode.toDataURL(qrData);

      // 5️⃣ Save QR to DB
      vehicle.qrCode = qrCode;
      await vehicle.save();

      // 6️⃣ Send response
      res.status(200).json({
        success: true,
        message: "Uploaded successfully",
        qrCode,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        error: err.message,
      });
    }
  }
);

export default router;
