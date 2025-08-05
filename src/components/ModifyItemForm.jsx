import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editItem } from "../features/cart/cartSlice";
import { toast } from "react-toastify";
import { isEmpty } from "../utils";

const ModifyItemForm = ({ item, closeModal }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cartItems);
  const [newColor, setNewColor] = useState(item.selectedColor);
  const [newAmount, setNewAmount] = useState(item.amount);

  const handleChange = () => {
    const modifiedItems = {};

    const currentCartItem = cartItems.find(
      (cartItem) =>
        cartItem.id === item.id && cartItem.selectedColor === item.selectedColor
    );

    const colorChanged = newColor !== currentCartItem.selectedColor;
    const amountChanged = newAmount !== currentCartItem.amount;

    const duplicateColorItem = cartItems.find(
      (cartItem) =>
        cartItem.id === item.id &&
        cartItem.selectedColor === newColor &&
        cartItem.selectedColor !== item.selectedColor
    );

    if (colorChanged && !duplicateColorItem) {
      modifiedItems.newColor = newColor;
    }

    if (amountChanged) {
      modifiedItems.newAmount = newAmount;
    }

    if (!isEmpty(modifiedItems)) {
      dispatch(editItem({ ...item, ...modifiedItems }));
      toast.success("Item Modified Successfully");
    } else {
      if (!colorChanged && !amountChanged) {
        toast.error("No changes were made.");
      } else if (colorChanged && duplicateColorItem) {
        toast.error("An item with this color already exists in your cart.");
      } else {
        toast.error("An item with these options already exists in your cart.");
      }
    }

    closeModal();
  };

  //to make sure that we get the new color after the modal is opened
  useEffect(() => {
    setNewColor(item.selectedColor);
  }, [item]);

  return (
    <div>
      {/* colors */}
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Colors</legend>
        <div className="flex">
          {item.colors.map((color) => {
            return (
              <button
                key={color}
                type="button"
                //add a custom class to mark the chosen color
                className={`badge badge-lg mr-2 ${
                  newColor === color && "border-2 border-primary"
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setNewColor(color)}
              ></button>
            );
          })}
        </div>
      </fieldset>
      {/* amount */}
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Amount</legend>
        <select
          defaultValue={item.amount}
          className="select"
          onChange={(e) => setNewAmount(parseInt(e.target.value))}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
      </fieldset>
      <button className="btn btn-neutral mt-4" onClick={handleChange}>
        Save Changes
      </button>
    </div>
  );
};

export default ModifyItemForm;
