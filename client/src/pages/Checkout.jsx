import Product from "../components/Product";

export const Checkout = ({ products = [], error, toggleCart, cart }) => {
  if (error) return <div>Encountered some error</div>;
  return (
    <div className="grid grid-cols-3 grid-rows-3">
      {products.map((i) => (
        <div key={i._id} className="container mx-auto p-4">
          <Product
            product={i}
            toggleCart={toggleCart}
            isAddedInCart={cart.find((prod) => prod._id === i._id)}
          />
        </div>
      ))}
    </div>
  );
};
