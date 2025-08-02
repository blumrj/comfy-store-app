import { useEffect, useState } from "react";

const ModifyItemForm = ({ item }) => {
    
  const [selectedColor, setSelectedColor] = useState(item.selectedColor);

  useEffect(() => {
    setSelectedColor(item.selectedColor)
  }, [item])
  
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
      <button className="btn btn-accent">Save Changes</button>
    </div>
  );
};

export default ModifyItemForm;
