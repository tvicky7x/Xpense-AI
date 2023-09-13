import React from "react";
import Container from "../Containers/Container";
import HeaderTitle from "../Containers/HeaderTitle";
import NormalCard from "../Containers/NormalCard";
import dummy from "../../Assets/Xpense AI.png";
import { useSelector } from "react-redux";

function ProfileInfo() {
  const userInfo = useSelector((states) => states.auth.userInfo);

  return (
    <>
      <Container>
        <NormalCard>
          <HeaderTitle title={"Profile Info"} icon={"badge"} />
          <div className=" flex space-x-3 sm:space-x-6">
            <img
              src={!userInfo.photoUrl ? dummy : userInfo.photoUrl}
              alt=""
              className=" w-20 h-20 sm:h-40 object-cover sm:w-40 rounded inline"
            />
            <div className=" font-medium text-slate-500 shrink">
              <p>
                Name -{" "}
                <span className="text-lime-500 capitalize">
                  {userInfo.name}
                </span>
              </p>
              <p>
                Email - <span className="text-lime-500">{userInfo.email}</span>
              </p>
            </div>
          </div>
        </NormalCard>
      </Container>
    </>
  );
}

export default ProfileInfo;
