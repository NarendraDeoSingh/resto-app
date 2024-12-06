const { default: mongoose } = require("mongoose");

const deliverypartnersModel = new mongoose.Schema({
  name: String,
  password: String,
  city: String,
  address: String,
  mobile: String,
});

export const deliveryPartnerSchema =
  mongoose.models.deliveryparners ||
  mongoose.model("deliverypartners", deliverypartnersModel);
