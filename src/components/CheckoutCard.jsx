import { formatPrice } from "../utils";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { calculateTotals } from "../utils";

const CheckoutCard = ({ showButton = true }) => {
  const user = useSelector((state) => state.user.user);
  const cartItems = useSelector((store) => store.cart.cartItems);

  const [totals, setTotals] = useState({ subtotal: 0, total: 0 });

  useEffect(() => {
    setTotals(calculateTotals(cartItems));
  }, [cartItems]);

  return (
    <div className="card w-full lg:w-96 bg-base-content text-base-300 shadow-sm">
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">Checkout</h2>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
          <li>
            <span className="text-lg">Subtotal: </span>
            <span className="text-sm">{formatPrice(totals.subtotal)}</span>
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
        {showButton && (
          <div className="mt-6">
            <Link
              className="btn btn-primary btn-block"
              to={user ? "/checkout" : "/login"}
            >
              {user ? "Proceed to checkout" : "Log In / Sign Up to Proceed"}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutCard;
