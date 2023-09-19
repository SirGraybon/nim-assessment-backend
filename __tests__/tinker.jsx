
const orders = [
  {
    _id: "6509d8c796f6dad2e092232f",
    name: "Meep Morpington",
    address: "123 Main St",
    phone: "555-555-5555",
    items: [
      {
        item: {
          _id: "6509d8c796f6dad2e092231a",
          name: "Burger",
          price: 12,
          description:
            "A juicy burger with lettuce, tomato, and a side of fries",
          updatedAt: "2023-09-19T17:22:15.674Z",
          __v: 0,
          id: "6509d8c796f6dad2e092231a"
        },
        quantity: 1,
        _id: "6509d8c796f6dad2e0922330"
      },
      {
        item: {
          _id: "6509d8c796f6dad2e092231b",
          name: "Sandwich",
          price: 8,
          description: "A sandwich with ham, cheese, and a side of fries",
          updatedAt: "2023-09-19T17:22:15.675Z",
          __v: 0,
          id: "6509d8c796f6dad2e092231b"
        },
        quantity: 2,
        _id: "6509d8c796f6dad2e0922331"
      },
      {
        item: {
          _id: "6509d8c796f6dad2e092231c",
          name: "Ice Cream",
          price: 4,
          description: "A scoop of vanilla ice cream with chocolate sauce",
          updatedAt: "2023-09-19T17:22:15.675Z",
          __v: 0,
          id: "6509d8c796f6dad2e092231c"
        },
        quantity: 1,
        _id: "6509d8c796f6dad2e0922332"
      }
    ],
    status: "cancelled",
    createdAt: "2022-05-01T18:25:43.511Z",
    updatedAt: "2022-05-01T18:31:43.511Z",
    __v: 0,
    id: "6509d8c796f6dad2e092232f"
  },
  {
    _id: "6509d8c796f6dad2e0922333",
    name: "Fuang The Third",
    address: "123 Main St",
    phone: "555-555-5555",
    items: [
      {
        item: {
          _id: "6509d8c796f6dad2e092231d",
          name: "Cupcake",
          price: 3,
          description: "A delicious cupcake with chocolate frosting",
          updatedAt: "2023-09-19T17:22:15.676Z",
          __v: 0,
          id: "6509d8c796f6dad2e092231d"
        },
        quantity: 1,
        _id: "6509d8c796f6dad2e0922334"
      },
      {
        item: {
          _id: "6509d8c796f6dad2e092231e",
          name: "Coffee",
          price: 2,
          description: "A cup of coffee with milk and sugar",
          updatedAt: "2023-09-19T17:22:15.676Z",
          __v: 0,
          id: "6509d8c796f6dad2e092231e"
        },
        quantity: 2,
        _id: "6509d8c796f6dad2e0922335"
      },
      {
        item: {
          _id: "6509d8c796f6dad2e092231f",
          name: "Tea",
          price: 2,
          description: "A cup of tea with milk and sugar",
          updatedAt: "2023-09-19T17:22:15.677Z",
          __v: 0,
          id: "6509d8c796f6dad2e092231f"
        },
        quantity: 1,
        _id: "6509d8c796f6dad2e0922336"
      }
    ],
    status: "delivered",
    createdAt: "2022-06-01T18:25:43.511Z",
    updatedAt: "2022-06-01T19:31:43.511Z",
    __v: 0,
    id: "6509d8c796f6dad2e0922333"
  },
  {
    _id: "6509d8c796f6dad2e092232b",
    name: "Krang Floogleborg",
    address: "123 Main St",
    phone: "555-555-5555",
    items: [
      {
        item: {
          _id: "6509d8c796f6dad2e0922317",
          name: "Pizza",
          price: 10,
          description: "A pizza with cheese and tomato sauce",
          updatedAt: "2023-09-19T17:22:15.672Z",
          __v: 0,
          id: "6509d8c796f6dad2e0922317"
        },
        quantity: 1,
        _id: "6509d8c796f6dad2e092232c"
      },
      {
        item: {
          _id: "6509d8c796f6dad2e0922318",
          name: "Pasta",
          price: 8,
          description: "Spaghetti with tomato sauce and meatballs",
          updatedAt: "2023-09-19T17:22:15.673Z",
          __v: 0,
          id: "6509d8c796f6dad2e0922318"
        },
        quantity: 2,
        _id: "6509d8c796f6dad2e092232d"
      },
      {
        item: {
          _id: "6509d8c796f6dad2e0922319",
          name: "Salad",
          price: 6,
          description:
            "A delicious salad with lettuce and tomatoes, and a vinaigrette dressing",
          updatedAt: "2023-09-19T17:22:15.674Z",
          __v: 0,
          id: "6509d8c796f6dad2e0922319"
        },
        quantity: 1,
        _id: "6509d8c796f6dad2e092232e"
      }
    ],
    status: "delivered",
    createdAt: "2022-01-23T18:25:43.511Z",
    updatedAt: "2022-01-23T18:31:43.511Z",
    __v: 0,
    id: "6509d8c796f6dad2e092232b"
  },
  {
    _id: "6509d8c796f6dad2e092233b",
    name: "Bob Belcher",
    address: "123 Main St",
    phone: "555-555-5555",
    items: [
      {
        item: {
          _id: "6509d8c796f6dad2e0922319",
          name: "Salad",
          price: 6,
          description:
            "A delicious salad with lettuce and tomatoes, and a vinaigrette dressing",
          updatedAt: "2023-09-19T17:22:15.674Z",
          __v: 0,
          id: "6509d8c796f6dad2e0922319"
        },
        quantity: 1,
        _id: "6509d8c796f6dad2e092233c"
      },
      {
        item: {
          _id: "6509d8c796f6dad2e092231a",
          name: "Burger",
          price: 12,
          description:
            "A juicy burger with lettuce, tomato, and a side of fries",
          updatedAt: "2023-09-19T17:22:15.674Z",
          __v: 0,
          id: "6509d8c796f6dad2e092231a"
        },
        quantity: 2,
        _id: "6509d8c796f6dad2e092233d"
      },
      {
        item: {
          _id: "6509d8c796f6dad2e092231b",
          name: "Sandwich",
          price: 8,
          description: "A sandwich with ham, cheese, and a side of fries",
          updatedAt: "2023-09-19T17:22:15.675Z",
          __v: 0,
          id: "6509d8c796f6dad2e092231b"
        },
        quantity: 1,
        _id: "6509d8c796f6dad2e092233e"
      }
    ],
    status: "pending",
    createdAt: "2023-09-19T17:22:15.898Z",
    updatedAt: "2023-09-19T17:22:15.898Z",
    __v: 0,
    id: "6509d8c796f6dad2e092233b"
  },
  {
    _id: "6509d8c796f6dad2e0922337",
    name: "Ronald McDonald",
    address: "123 Main St",
    phone: "555-555-5555",
    items: [
      {
        item: {
          _id: "6509d8c796f6dad2e0922320",
          name: "Soda",
          price: 2,
          description: "A can of soda",
          updatedAt: "2023-09-19T17:22:15.677Z",
          __v: 0,
          id: "6509d8c796f6dad2e0922320"
        },
        quantity: 1,
        _id: "6509d8c796f6dad2e0922338"
      },
      {
        item: {
          _id: "6509d8c796f6dad2e0922317",
          name: "Pizza",
          price: 10,
          description: "A pizza with cheese and tomato sauce",
          updatedAt: "2023-09-19T17:22:15.672Z",
          __v: 0,
          id: "6509d8c796f6dad2e0922317"
        },
        quantity: 2,
        _id: "6509d8c796f6dad2e0922339"
      },
      {
        item: {
          _id: "6509d8c796f6dad2e0922318",
          name: "Pasta",
          price: 8,
          description: "Spaghetti with tomato sauce and meatballs",
          updatedAt: "2023-09-19T17:22:15.673Z",
          __v: 0,
          id: "6509d8c796f6dad2e0922318"
        },
        quantity: 1,
        _id: "6509d8c796f6dad2e092233a"
      }
    ],
    status: "delivered",
    createdAt: "2022-07-01T18:25:43.511Z",
    updatedAt: "2022-07-01T19:31:43.511Z",
    __v: 0,
    id: "6509d8c796f6dad2e0922337"
  }
];

const totalSales = orders.reduce((grandTotal, indiOrder) => {
  const orderTotal = indiOrder.items.reduce((total, instance) => {
    return total + instance.item.price;
  }, 0);
  console.log(orderTotal);
  return grandTotal + orderTotal;
}, 0);

console.log(totalSales);
