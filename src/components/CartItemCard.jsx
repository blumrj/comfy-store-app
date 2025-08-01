import { formatPrice } from "../utils";

const CartItemCard = ({
  id,
  image,
  company,
  price,
  title,
  selectedColor,
  amount,
  removeItem
}) => {
  return (
    <div key={id} className="card card-side bg-accent-content shadow-xl hover:shadow-2xl transition duration-300">
      <figure>
        <img
          src={image}
          alt={title}
          className="rounded-xl h-64 md:h-48 w-full object-cover hover:scale-120 transition duration-250 ease-in-out aspect-square"
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
          <button className="btn btn-sm btn-accent capitalize">
            modify item
          </button>
          <button className="btn btn-sm btn-accent capitalize" onClick={() => removeItem(id)}>
            remove item
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
