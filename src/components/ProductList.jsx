import ProductCard from "./ProductCard";
import { FaBars } from "react-icons/fa6";
import { BsFillGridFill } from "react-icons/bs";
import { useState } from "react";

const ProductList = ({
  products,
  layout = "grid",
  showLayoutOptions = true,
}) => {
  const [activeLayout, setActiveLayout] = useState(layout);
  const isGrid = activeLayout === "grid";

  const layoutClasses = isGrid
    ? "grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
    : "flex flex-col mt-16 gap-8";

  const baseBtnClasses = "rounded-4xl p-2 mr-2 cursor-pointer";
  const activeBtnClasses = "bg-accent text-accent-content";

  const handleStructureChange = () => {
    const newStructure = activeLayout === "grid" ? "list" : "grid";
    setActiveLayout(newStructure);
  };

  return (
    <>
      {showLayoutOptions && (
        <div className="flex justify-between border-b pb-2">
          <p>{products.length} results </p>
          <div className="hidden md:inline-block">
            <button
              className={`${baseBtnClasses} ${isGrid ? activeBtnClasses : ""}`}
              onClick={handleStructureChange}
            >
              <BsFillGridFill />
            </button>
            <button
              className={`${baseBtnClasses} ${!isGrid ? activeBtnClasses : ""}`}
              onClick={handleStructureChange}
            >
              <FaBars />
            </button>
          </div>
        </div>
      )}

      <div className={layoutClasses}>
        {products.map((product) => {
          const { id, attributes } = product;

          return <ProductCard key={id} {...attributes} id={id} layout={activeLayout} />;
        })}
      </div>
    </>
  );
};

export default ProductList;
