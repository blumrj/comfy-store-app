import { Form, useNavigate } from "react-router-dom";
import FormInput from "./FormInput";
import FilterInput from "./FilterInput";
import ToggleInput from "./ToggleInput";

const Filters = () => {
  // useNavigate() is used to programmatically navigate to a route.
  const navigate = useNavigate();
  const categories = ["tables", "chairs", "kids", "sofas", "beds"];
  const companies = ["modenza", "luxora", "artifex", "comfora", "homestead"];
  const order = ["a-z", "z-a", "high", "low"];

  // a function that will handle the reset button by navigating the user to a route, hence retriggering custom fetch for products
  const handleReset = () => {
    navigate("/products");
  };

  return (
    <div className="collapse collapse-arrow bg-base-300 border-base-300 border rounded-2xl p-4 my-8">
      <input type="checkbox" />
      <div className="collapse-title font-semibold">Filters</div>
      <div className="collapse-content text-sm">
        <Form method="get">
          <div className="grid  sm:grid-cols-2">
            {/* categories */}
            <FilterInput label="category" name="category" items={categories} />
            {/* company */}
            <FilterInput label="company" name="company" items={companies} />
            {/* sort */}
            <FilterInput label="sort by" name="order" items={order} />
            {/* search */}
            <div className="my-4">
              <FormInput label="search" type="text" name="search" size="sm" />
            </div>

            <ToggleInput label="free shipping" name="shipping" />
          </div>

          <div className="my-4">
            <button
              type="submit"
              className="btn btn-primary capitalize mr-4 w-1/8"
            >
              submit
            </button>
            <button
              type="reset"
              className="btn btn-neutral capitalize w-1/8"
              onClick={handleReset}
            >
              reset
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Filters;
