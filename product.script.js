const Product = require("./server/models/product.model");

const saveProducts = async () => {
  const data = [
    {
      name: "Wireless Mouse",
      description: "A smooth and responsive wireless mouse",
      price: 19.99,
      category: "Electronics",
      images: [
        "https://m.media-amazon.com/images/I/71gY9WiOPDL._AC_SL1500_.jpg",
      ],
    },
    {
      name: "Mechanical Keyboard",
      description: "A high-quality mechanical keyboard with backlighting",
      price: 89.99,
      category: "Electronics",
      images: [
        "https://m.media-amazon.com/images/I/71SXGehqZtL._AC_SL1500_.jpg",
      ],
    },
    {
      name: "Bluetooth Speaker",
      description: "A portable Bluetooth speaker with excellent sound quality",
      price: 49.99,
      category: "Electronics",
      images: [
        "https://m.media-amazon.com/images/I/81vTxFs5zDL._AC_SL1500_.jpg",
      ],
    },
    {
      name: "Gaming Headset",
      description: "A comfortable gaming headset with surround sound",
      price: 59.99,
      category: "Electronics",
      images: [
        "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1500_.jpg",
      ],
    },
    {
      name: "Smartphone Stand",
      description: "An adjustable stand for your smartphone",
      price: 14.99,
      category: "Accessories",
      images: [
        "https://m.media-amazon.com/images/I/61kJiKjiKuL._AC_SL1500_.jpg",
      ],
    },
    {
      name: "USB-C Hub",
      description: "A multi-port USB-C hub for your laptop",
      price: 34.99,
      category: "Electronics",
      images: [
        "https://m.media-amazon.com/images/I/61Y3b2L8LLL._AC_SL1500_.jpg",
      ],
    },
    {
      name: "Portable Charger",
      description: "A high-capacity portable charger for all your devices",
      price: 39.99,
      category: "Electronics",
      images: [
        "https://m.media-amazon.com/images/I/61Ns2K1q4oL._AC_SL1500_.jpg",
      ],
    },
    {
      name: "Smartwatch",
      description: "A sleek smartwatch with various health tracking features",
      price: 129.99,
      category: "Electronics",
      images: [
        "https://m.media-amazon.com/images/I/61clJcP8CJL._AC_SL1500_.jpg",
      ],
    },
    {
      name: "Noise Cancelling Headphones",
      description: "Comfortable headphones with active noise cancellation",
      price: 199.99,
      category: "Electronics",
      images: [
        "https://m.media-amazon.com/images/I/71D9ImsvEtL._AC_SL1500_.jpg",
      ],
    },
    {
      name: "Wireless Earbuds",
      description: "Compact wireless earbuds with great sound quality",
      price: 59.99,
      category: "Electronics",
      images: [
        "https://m.media-amazon.com/images/I/71znJ5M9GdL._AC_SL1500_.jpg",
      ],
    },
    {
      name: "Fitness Tracker",
      description: "A fitness tracker with heart rate monitoring",
      price: 49.99,
      category: "Electronics",
      images: [
        "https://m.media-amazon.com/images/I/61xCuL5jV3L._AC_SL1500_.jpg",
      ],
    },
    {
      name: "Digital Camera",
      description: "A compact digital camera with high resolution",
      price: 299.99,
      category: "Electronics",
      images: [
        "https://m.media-amazon.com/images/I/81AzKmg35LL._AC_SL1500_.jpg",
      ],
    },
    {
      name: "4K Monitor",
      description: "A 27-inch 4K monitor with stunning picture quality",
      price: 399.99,
      category: "Electronics",
      images: [
        "https://m.media-amazon.com/images/I/81rLFryUuUL._AC_SL1500_.jpg",
      ],
    },
    {
      name: "Laptop Sleeve",
      description: "A protective sleeve for your laptop",
      price: 24.99,
      category: "Accessories",
      images: [
        "https://m.media-amazon.com/images/I/61oHfL-NmKL._AC_SL1500_.jpg",
      ],
    },
    {
      name: "Ergonomic Chair",
      description: "An ergonomic chair designed for comfort and support",
      price: 199.99,
      category: "Furniture",
      images: [
        "https://m.media-amazon.com/images/I/61+Q6Rh3OQL._AC_SL1500_.jpg",
      ],
    },
    {
      name: "Desk Lamp",
      description: "A stylish desk lamp with adjustable brightness",
      price: 29.99,
      category: "Furniture",
      images: [
        "https://m.media-amazon.com/images/I/61BaFl9a1-L._AC_SL1500_.jpg",
      ],
    },
    {
      name: "Water Bottle",
      description: "A reusable water bottle with a built-in filter",
      price: 19.99,
      category: "Accessories",
      images: [
        "https://m.media-amazon.com/images/I/61i5FtYr5UL._AC_SL1500_.jpg",
      ],
    },
    {
      name: "Backpack",
      description: "A durable backpack with multiple compartments",
      price: 49.99,
      category: "Accessories",
      images: [
        "https://m.media-amazon.com/images/I/81+gFfA3+KL._AC_SL1500_.jpg",
      ],
    },
    {
      name: "Yoga Mat",
      description: "A non-slip yoga mat for your workouts",
      price: 29.99,
      category: "Fitness",
      images: [
        "https://m.media-amazon.com/images/I/81z9Ae3HbGL._AC_SL1500_.jpg",
      ],
    },
    {
      name: "Electric Toothbrush",
      description: "An electric toothbrush with multiple cleaning modes",
      price: 39.99,
      category: "Personal Care",
      images: [
        "https://m.media-amazon.com/images/I/71fA93kBJIL._AC_SL1500_.jpg",
      ],
    },
  ];
  try {
    await Product.insertMany(data);
    console.log("prodcts saved");
  } catch (error) {
    console.log(error);
  }
};

module.exports = saveProducts;
