const mongoose = require("../db.js");

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  items: [
    {
      item: {
        type: mongoose.Schema.ObjectId,
        ref: "MenuItems"
      },

      quantity: {
        type: Number,
        required: true
      }
    }
  ],
  status: {
    type: String,
    required: true,
    enum: ["pending", "confirmed", "delivered", "cancelled"],
    default: "pending"
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});
orderSchema.set("toJSON", {
  virtuals: true
});
orderSchema.statics.calcTotal = (items) =>
  items.reduce((total, item) => total + item.price * item.quantity, 0);

// order model
const Order = mongoose.model("Order", orderSchema);

const getAll = async () => {
  // populate each item
  const orders = await Order.find().populate("items.item");
  console.log(orders);
  return orders;
};
const getTotalSales = async () => {
  // populate each item
  const orders = await Order.find().populate("items.item");
  const totalSales = orders.reduce((grandTotal, indiOrder) => {
    const orderTotal = indiOrder.items.reduce(
      (total, instance) => total + instance.item.price,
      0
    );
    return grandTotal + orderTotal;
  }, 0);

  return { total: totalSales };
};

const getOne = async (id) => {
  const order = await Order.findById(id).populate("items.item");
  return order;
};

const create = async (body) => {
  const order = await Order.create(body);
  return order;
};

const update = async (id, body) => {
  const order = await Order.findByIdAndUpdate(id, body, { new: true });
  return order;
};

const remove = async (id) => {
  const order = await Order.findByIdAndDelete(id);
  return order.id;
};

const getByStatus = async (status) => {
  const orders = await Order.find({ status }).populate("items");
  return orders;
};
const getByOrderStatus = async (status) => {
  const orders = await Order.find({
    $or: [{ status }]
  });
  return orders;
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove,
  getByStatus,
  getByOrderStatus,
  getTotalSales,
  Order
};
