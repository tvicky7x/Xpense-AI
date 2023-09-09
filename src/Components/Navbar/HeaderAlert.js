import React, { useContext } from "react";
import Context from "../../Context/Context";
import { Link, useLocation } from "react-router-dom";

function HeaderAlert() {
  const ctx = useContext(Context);
  const location = useLocation();

  if (ctx.userInfo.name) {
    return null;
  }

  return (
    <>
      <div className=" bg-lime-500 p-2 flex justify-center space-x-1 items-center text-lime-950">
        <span className="material-symbols-outlined">info</span>
        <p>Your profile is incomplete.</p>
        {location.pathname !== "/profile" && (
          <Link
            to={"profile"}
            className=" font-medium text-lime-50 hover:underline"
          >
            Complete Now
          </Link>
        )}
      </div>
    </>
  );
}

export default HeaderAlert;
