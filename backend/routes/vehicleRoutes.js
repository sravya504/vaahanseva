import express from "express";
import Vehicle from "../models/Vehicle.js";

const router = express.Router();

/**
 * GET vehicle details by ID (used when QR is scanned)
 */
router.get("/vehicle/:id", async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);

    if (!vehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    }

    res.status(200).json(vehicle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
