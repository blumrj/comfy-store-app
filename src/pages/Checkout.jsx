import { redirect, useNavigate, Link } from "react-router-dom";
import CheckoutCard from "../components/CheckoutCard";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = (store) => () => {
  const { user } = store.getState();

  if (!user.user) {
    return redirect("/");
  }

  return null;
};

const Checkout = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const cartItems = useSelector((store) => store.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name !== "" && address !== "") {
      toast.success("Order confirmed!");
      setName("");
      setAddress("");

      dispatch(clearCart());
      navigate("/");
    } else {
      toast.error("Please enter all of the details.");
    }
  };

  return (
    <>
      {cartItems.length ? (
        <div className="flex flex-col lg:flex-row justify-center lg:justify-around items-center lg:items-start gap-8 mt-16 px-4 sm:px-6 lg:px-0">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md lg:max-w-lg"
          >
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
              <label className="label">Name</label>
              <input
                type="text"
                className="input w-full mb-4"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label className="label">Address</label>
              <input
                type="text"
                className="input w-full mb-4"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              <button type="submit" className="btn btn-accent w-full mt-2">
                Order
              </button>
            </fieldset>
          </form>

          <div className="w-full max-w-md lg:max-w-lg">
            <CheckoutCard showButton={false} />
          </div>
        </div>
      ) : (
        <div className="text-center mt-16 px-4">
          <h4 className="capitalize text-2xl">Your Cart Is Empty</h4>
          <Link to="/products">
            <button className="btn btn-sm btn-neutral mt-4">
              See All Products
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Checkout;
