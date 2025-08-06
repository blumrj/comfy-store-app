import SectionTitle from "../components/SectionTitle";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart, removeItemFromCart } from "../features/cart/cartSlice";
import CartItemCard from "../components/CartItemCard";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import { calculateTotals, formatPrice } from "../utils";

const Cart = () => {
  const [modalItem, setModalItem] = useState(null);

  const cartItems = useSelector((store) => store.cart.cartItems);
  const user = useSelector((state) => state.user.user);
  const [totals, setTotals] = useState({ subtotal: 0, total: 0 });
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const removeItem = (id, selectedColor) => {
    dispatch(removeItemFromCart({ id, selectedColor }));
  };

  const handleModal = (item) => {
    setModalItem(item);
  };

  const closeModal = () => {
    setModalItem(null);
  };

  useEffect(() => {
    setTotals(calculateTotals(cartItems));
  }, [cartItems]);

  return (
    <div>
      <div className="flex justify-between">
        <SectionTitle title="shopping cart" />
        {cartItems.length ? (
          <button
            className="btn btn-sm btn-neutral w-40"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        ) : (
          ""
        )}
      </div>
      {cartItems.length ? (
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mt-16">
          <div className="flex flex-col gap-y-8 w-full">
            {cartItems.map((item) => {
              return (
                <CartItemCard
                  key={item.id + item.selectedColor}
                  {...item}
                  id={item.id}
                  removeItem={removeItem}
                  handleModal={() => handleModal(item)}
                />
              );
            })}
          </div>
          <div className="card w-full lg:w-96 bg-base-content text-base-300 shadow-sm">
            <div className="card-body">
              <div className="flex justify-between">
                <h2 className="text-3xl font-bold">Checkout</h2>
              </div>
              <ul className="mt-6 flex flex-col gap-2 text-xs">
                <li>
                  <span className="text-lg">Subtotal: </span>
                  <span className="text-sm">
                    {formatPrice(totals.subtotal)}
                  </span>
                </li>
                <li>
                  <span className="text-lg">Shipping: </span>
                  <span className="text-sm">{formatPrice(500)}</span>
                </li>
                <li>
                  <span className="text-lg">Total: </span>
                  <span className="text-sm">{formatPrice(totals.total)}</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link className="btn btn-primary btn-block" to={user ? '/checkout' : '/login'}>
                  {user ? 'Proceed to checkout' : 'Log In / Sign Up to Proceed'}
                  
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h4 className="capitalize text-2xl">Your Cart Is Empty</h4>
          <Link to="/products">
            <button className="btn btn-sm btn-neutral mt-4">
              See All Products
            </button>
          </Link>
        </div>
      )}

      {modalItem && <Modal closeModal={closeModal} item={modalItem}></Modal>}
    </div>
  );
};

export default Cart;
