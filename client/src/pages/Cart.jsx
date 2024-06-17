import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Cart = ({ cartItems = [], toggleCart }) => {
  const navigate = useNavigate();
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handleCheckoutService = async () => {
    try {
      const stripeUrl = await axios.post(
        "http://localhost:8000/products/checkout",
        {
          productIds: cartItems.map((i) => i._id),
        }
      );
      window.location.href = stripeUrl.data.url;
    } catch (error) {
      console.log("An error occured ==> " + error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-700">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col space-y-4">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center bg-white shadow-lg rounded-lg p-4"
            >
              <img
                className="w-20 h-20 object-cover rounded"
                src={item.images[0]}
                alt={item.name}
              />
              <div className="ml-4 flex-grow">
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p className="text-gray-700">{item.description}</p>
                <p className="text-gray-900 text-lg font-semibold mt-2">
                  ${item.price.toFixed(2)}
                </p>
              </div>
              <button
                className="text-red-500 font-semibold hover:text-red-700 ml-4"
                onClick={() => toggleCart(item)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex justify-end">
            <div className="text-right">
              <p className="text-lg">Total: ${calculateTotal()}</p>
              <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={handleCheckoutService}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
