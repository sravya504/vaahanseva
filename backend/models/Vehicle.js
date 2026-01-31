import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema(
  {
    vehicleNumber: String,
    vehicleType: String,
    ownerName: String,
    mobile: String,

    documents: {
      rc: String,
      license: String,
      aadhar: String,
      pollution: String,
      vehicleDoc: String,
      insurance: String,
    },

    qrCode: String, // Base64 OR image URL
  },
  { timestamps: true }
);

export default mongoose.model("vehicle", vehicleSchema);
