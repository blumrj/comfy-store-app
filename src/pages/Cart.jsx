import SectionTitle from "../components/SectionTitle";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart, removeItemFromCart } from "../features/cart/cartSlice";
import CartItemCard from "../components/CartItemCard";
import { useState } from "react";
import Modal from "../components/Modal";

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
    // document.getElementById("custom-modal").showModal();
  };

  const closeModal = () => {
    setModalItem(null)
  }

  return (
    <div>
      <div className="flex justify-between">
        <SectionTitle title="shopping cart" />
        {cartItems.length ? (
          <button
            className="btn btn-sm btn-accent w-40"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        ) : (
          ""
        )}
      </div>
      {cartItems.length ? (
        <div className="flex flex-col mt-16 gap-8">
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
      ) : (
        <div>
          <h4 className="capitalize text-2xl">Your Cart Is Empty</h4>
          <Link to="/products">
            <button className="btn btn-sm btn-accent mt-4">
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
