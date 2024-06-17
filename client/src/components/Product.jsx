const Product = ({ product = {}, toggleCart, isAddedInCart }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-[250px]"
        src={product.images[0]}
        alt={product.name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
        <p className="text-gray-900 text-lg font-semibold mt-2">
          ${product.price.toFixed(2)}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {product.category}
        </span>
      </div>
      <div className="py-2">
        <button
          className={`mr-2 ${isAddedInCart ? "bg-red-300" : "bg-green-300"}`}
          onClick={() => toggleCart(product)}
        >
          {!isAddedInCart ? "Add to Cart" : "Remove from Cart"}
        </button>
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default Product;
