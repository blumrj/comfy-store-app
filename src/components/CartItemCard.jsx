import { formatPrice } from "../utils";

const CartItemCard = ({
  id,
  image,
  company,
  price,
  title,
  selectedColor,
  amount,
  removeItem,
  handleModal,
}) => {
  return (
    <div
      key={id}
      className="card card-side bg-base-300 shadow-xl hover:shadow-2xl transition duration-300"
    >
      <figure>
        <img
          src={image}
          alt={title}
          className="rounded-xl h-64 md:h-48 w-full object-cover aspect-square"
        />
      </figure>
      <div className="card-body flex flex-row justify-between">
        <div>
          <h2 className="card-title capitalize">{title}</h2>
          <h4 className="italic mb-3">{company}</h4>
          {selectedColor && (
            <div>
              <div
                //add a custom class to mark the chosen color
                className="badge badge-lg mr-2 "
                style={{ backgroundColor: selectedColor }}
              ></div>
            </div>
          )}
          {amount && <div>amount: {amount}</div>}
          <p>{formatPrice(price)}</p>
        </div>
        <div className="flex gap-2 justify-end">
          <button
            className="btn btn-sm btn-neutral capitalize"
            onClick={handleModal}
          >
            modify item
          </button>
          <button
            className="btn btn-sm btn-neutral capitalize"
            onClick={() => removeItem(id, selectedColor)}
          >
            remove item
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
