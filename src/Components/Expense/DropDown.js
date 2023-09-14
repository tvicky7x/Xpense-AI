import React from "react";
import DropItem from "./DropItem";
import { useDispatch, useSelector } from "react-redux";
import { addModalAction } from "../../Store/addModalSlice";

function DropDown({ itemList }) {
  // Redux
  const dispatch = useDispatch();
  const category = useSelector((states) => states.addModal.modalData.category);
  const dropDown = useSelector((states) => states.addModal.dropDown);

  // function

  return (
    <button
      type="button"
      onClick={() => {
        dispatch(addModalAction.alternateDropDown());
      }}
      className=" relative w-full h-9 px-1  border rounded border-lime-300"
    >
      <div className=" flex items-center justify-start">
        <span className="material-symbols-outlined">{category.HTMLname}</span>
        <p className="font-medium ms-1">{category.name}</p>
        {!dropDown ? (
          <span className="material-symbols-outlined ms-auto">expand_more</span>
        ) : (
          <span className="material-symbols-outlined ms-auto">expand_less</span>
        )}
      </div>
      {dropDown && (
        <ul className="absolute top-full left-0 w-full rounded border divide-y-2 bg-slate-50 divide-slate-100 max-h-52 overflow-y-scroll">
          {itemList.map((item) => {
            return <DropItem key={item.id} category={item} />;
          })}
        </ul>
      )}
    </button>
  );
}

export default DropDown;
