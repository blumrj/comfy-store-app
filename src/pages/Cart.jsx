import SectionTitle from "../components/SectionTitle";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart, removeItemFromCart } from "../features/cart/cartSlice";
import CartItemCard from "../components/CartItemCard";
import { useState } from "react";
import Modal from "../components/Modal";
import CheckoutCard from "../components/CheckoutCard";

const Cart = () => {
  const [modalItem, setModalItem] = useState(null);

  const cartItems = useSelector((store) => store.cart.cartItems);
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



  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between ">
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
          <CheckoutCard />
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
