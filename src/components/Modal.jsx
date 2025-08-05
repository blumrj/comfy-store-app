import { useEffect, useRef } from "react";
import ModifyItemForm from "./ModifyItemForm";

const Modal = ({ item, closeModal }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (item && dialog) {
      dialog.showModal();

      dialog.addEventListener("close", closeModal);

      return () => {
        dialog.removeEventListener("close", closeModal);
      };
    }
  }, [item, closeModal]);

  if (!item) return null;

  return (
    <dialog
      id="custom-modal"
      className="modal modal-bottom sm:modal-middle"
      ref={dialogRef}
    >
      <div className="modal-box">
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={closeModal}
          >
            ✕
          </button>
        </form>
        <h3 className="text-lg font-bold">Edit Item</h3>
        <div>
          <ModifyItemForm item={item} closeModal={closeModal} />
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Modal;
