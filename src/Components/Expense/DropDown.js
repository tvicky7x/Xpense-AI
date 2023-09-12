import React, { useState } from "react";
import DropItem from "./DropItem";

function DropDown({ itemList, changeDefault, defaultCategory }) {
  const [isOpen, setOpen] = useState(false);

  // function
  function dropDownHandler() {
    setOpen(!isOpen);
  }

  return (
    <button
      type="button"
      onClick={dropDownHandler}
      className=" relative w-full h-9 px-1  border rounded border-lime-300"
    >
      <div className=" flex items-center justify-start">
        <span className="material-symbols-outlined">
          {defaultCategory.HTMLname}
        </span>
        <p className="font-medium ms-1">{defaultCategory.name}</p>
        {!isOpen ? (
          <span className="material-symbols-outlined ms-auto">expand_more</span>
        ) : (
          <span className="material-symbols-outlined ms-auto">expand_less</span>
        )}
      </div>
      {isOpen && (
        <ul
          className="absolute top-full left-0 w-full rounded border divide-y-2 bg-lime-50 divide-lime-200 max-h-52 overflow-y-scroll"
          
        >
          {itemList.map((item) => {
            return (
              <DropItem
                key={item.id}
                data={item}
                changeDefault={changeDefault}
              />
            );
          })}
        </ul>
      )}
    </button>
  );
}

export default DropDown;
