import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  adminEmail: { type: String, required: true, index: true },  // ✅ admin email
  name: { type: String, required: true },
  image: { type: String, default: "/img/default-product.png" },
  price: { type: Number, required: true },
  rating: { type: Number, default: 5 },
  description: { type: String, required: true },
  longDescription: { type: String },
  tags: [{ type: String }],
  category: { type: String, required: true },
  sku: { type: String, required: true, unique: true, index: true },
  additionalInformation: {
    weight: { type: String },
    dimensions: { type: String },
    size: { type: String }
  },
  colors: [
    { 
      name: { type: String }, 
      hex: { type: String } 
    }
  ],
  composition: { type: String },
  sizeFit: { type: String },
  brand: { type: String, required: true },
  model: { type: String },
  stockQuantity: { type: Number, default: 0 },
  warranty: { type: String },
  status: { type: String, enum: ["active", "inactive"], default: "active" },
}, { timestamps: true });

// ✅ Compound unique index for admin-specific SKU
productSchema.index({ adminEmail: 1, sku: 1 }, { unique: true });

export default mongoose.model("Product", productSchema);
