import React, { useContext } from "react";
import Container from "../Containers/Container";
import HeaderTitle from "../Containers/HeaderTitle";
import NormalCard from "../Containers/NormalCard";
import dummy from "../../Assets/Xpense AI.png";
import Context from "../../Context/Context";

function ProfileInfo() {
  const ctx = useContext(Context);
  return (
    <>
      <Container>
        <NormalCard>
          <HeaderTitle title={"Profile Info"} icon={"badge"} />
          <div className=" flex space-x-3 sm:space-x-6">
            <img
              src={!ctx.userInfo.photoUrl ? dummy : ctx.userInfo.photoUrl}
              alt=""
              className=" w-20 h-20 sm:h-40 object-cover sm:w-40 rounded inline"
            />
            <div className=" font-medium text-slate-500 shrink">
              <p>
                Name -{" "}
                <span className="text-lime-500 capitalize">
                  {ctx.userInfo.name}
                </span>
              </p>
              <p>
                Email -{" "}
                <span className="text-lime-500">{ctx.userInfo.email}</span>
              </p>
            </div>
          </div>
        </NormalCard>
      </Container>
    </>
  );
}

export default ProfileInfo;
