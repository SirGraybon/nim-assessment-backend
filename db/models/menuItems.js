const mongoose = require("../db.js");

const menuItemsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});
menuItemsSchema.set("toJSON", {
  virtuals: true
});
// menu model
const MenuItems = mongoose.model("MenuItems", menuItemsSchema);

const getAll = async () => {
  try {
    const menuItems = await MenuItems.find();
    return menuItems;
  } catch (error) {
    return error;
  }
};
const find = async (query) => {
  try {
    const menuItems = await MenuItems.find({
      $or: [
        { description: { $regex: new RegExp(query, "i") } },
        { name: { $regex: new RegExp(query, "i") } }
      ]
    });
    console.log(menuItems);
    return menuItems;
  } catch (error) {
    return error;
  }
};

const getOne = async (id) => {
  try {
    const menuItem = await MenuItems.findById(id);
    return menuItem;
  } catch (error) {
    return error;
  }
};

const create = async (body) => {
  try {
    const menuItem = await MenuItems.create(body);
    return menuItem;
  } catch (error) {
    return error;
  }
};
const update = async (id, body) => {
  const menuItem = await MenuItems.findByIdAndUpdate(id, body, { new: true });
  return menuItem;
};
const remove = async (id) => {
  const order = await MenuItems.findByIdAndDelete(id);
  return order.id;
};

module.exports = { getAll, getOne, create, update, remove, find, MenuItems };
