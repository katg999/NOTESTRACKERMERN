import mongoose from "mongoose";

const DonationSchema = new mongoose.Schema({
  donorName: { type: String, required: false }, // optional (can be anonymous)
  donorEmail: { type: String, required: false },
  ngoId: { type: mongoose.Schema.Types.ObjectId, ref: "NGO", required: true },

  cryptoType: { type: String, enum: ["BTC", "ETH", "USDT"], required: true },
  walletAddress: { type: String, required: true }, // unique address generated
  amountExpected: { type: String, required: true }, // amount donor intends to send
  amountReceived: { type: String, default: "0" },
  impactArea: String,
  anonymous: { type: Boolean, default: false },
  txHash: { type: String, default: null }, // updated once payment detected
  status: {
    type: String,
    enum: ["pending", "confirmed", "expired"],
    default: "pending",
  },

  createdAt: { type: Date, default: Date.now },
  expiresAt: { type: Date }, // temporary address expiry
});

export default mongoose.model("Donation", DonationSchema);
