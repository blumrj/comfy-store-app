import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editItemColor } from "../features/cart/cartSlice";
import { toast } from "react-toastify";

const ModifyItemForm = ({ item, closeModal }) => {
  const [selectedColor, setSelectedColor] = useState(item.selectedColor);
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cartItems);

  const handleColorChange = () => {
    const ifItemWithNewColorExist = cartItems.find(
      (cartItem) =>
        cartItem.id === item.id &&
        cartItem.selectedColor === selectedColor &&
        cartItem.selectedColor !== item.selectedColor
    );

    if (ifItemWithNewColorExist) {
      toast.error("An item with this color is already in your cart.");
      closeModal();
      return;
    }

    dispatch(editItemColor({ ...item, newColor: selectedColor }));

    toast.success("Item Modified Successfully");
    closeModal();
  };

  useEffect(() => {
    setSelectedColor(item.selectedColor);
  }, [item]);

  //   const [amount, setAmount] = useState(item.amount);

  return (
    <div>
      {item.colors.map((color) => {
        return (
          <button
            key={color}
            type="button"
            //add a custom class to mark the chosen color
            className={`badge badge-lg mr-2 ${
              selectedColor === color && "border-2 border-primary"
            }`}
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
          ></button>
        );
      })}
      <button className="btn btn-neutral" onClick={handleColorChange}>
        Save Changes
      </button>
    </div>
  );
};

export default ModifyItemForm;
