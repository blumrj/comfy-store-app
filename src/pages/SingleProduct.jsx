import { useEffect, useState } from "react";
import customFetch, { formatPrice } from "../utils";
import { useLoaderData } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import { useDispatch } from "react-redux";
import { addToCart, clearItemStatus } from "../features/cart/cartSlice";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

//get a single product with react router loader function

// eslint-disable-next-line react-refresh/only-export-components
export const loader =
  //pass the query client manually since it can only be automatically accessed in react components or custom hooks


    (queryClient) =>
    //start of the loader func, we can access the params object
    async ({ params }) => {
      try {
        //get the data if it's already cached with react query, if not, fetch it
        const { data } = await queryClient.ensureQueryData({
          queryKey: ["singleProduct", params.id],
          queryFn: () => customFetch(`/products/${params.id}`),
        });

        return data.data;
      } catch (error) {
        console.log(error);
      }
    };

const SingleProduct = () => {
  const dispatch = useDispatch();
  const cartItemStatus = useSelector((store) => store.cart.cartItemStatus);

  //get the result of the loader function
  const { id, attributes } = useLoaderData();

  //object destructuring
  const { title, company, description, image, price, colors } = attributes;

  //define state to gather the chosen color and the amount of a product
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  //function to handle the amount
  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  const handleAddToCart = () => {
    const productObj = {
      ...attributes,
      id,
      amount,
      selectedColor: productColor,
    };
    dispatch(addToCart(productObj));
  };

  useEffect(() => {
    if (cartItemStatus === "added") {
      toast.success("Item Added To Cart!");
    }
    if (cartItemStatus === "exists") {
      toast.error("Item has already been added to the cart");
    }

    if (cartItemStatus) {
      dispatch(clearItemStatus());
    }
  }, [cartItemStatus, dispatch]);

  return (
    <>
      <Breadcrumbs />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
        <img
          src={image}
          alt={title}
          className="w-full h-128 object-cover rounded-2xl"
        />
        <div>
          <h1 className="capitalize font-bold text-3xl">{title}</h1>
          <h2 className="text-xl font-bold mt-2">{company}</h2>
          <p className="mt-3 text-xl">{formatPrice(price)}</p>
          <p className="mt-6 leading-8">{description}</p>
          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize mb-2">
              colors
            </h4>
            {colors.map((color) => {
              return (
                <button
                  key={color}
                  type="button"
                  //add a custom class to mark the chosen color
                  className={`badge badge-lg mr-2 ${
                    color === productColor && "border-2 border-primary"
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setProductColor(color)}
                ></button>
              );
            })}
          </div>
          <div className="mt-6 w-full max-w-xs">
            <label className="">
              <h4 className="text-md font-medium tracking-wider capitalize mb-2">
                amount
              </h4>
            </label>
            <select className="select" value={amount} onChange={handleAmount}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </div>
          <button
            className="btn btn-primary mt-6 capitalize hover:bg-accent border-0"
            onClick={handleAddToCart}
          >
            add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
