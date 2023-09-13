import React, { useRef } from "react";
import Container from "../Containers/Container";
import NormalCard from "../Containers/NormalCard";
import HeaderTitle from "../Containers/HeaderTitle";
import ButtonPrimary from "../Containers/ButtonPrimary";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateUserInfo } from "../../Store/authAction";

function ProfileUpdate() {
  // Redux
  const dispatch = useDispatch();
  const userInfo = useSelector((states) => states.auth.userInfo);
  const token = useSelector((states) => states.auth.token);
  // Ref
  const nameRef = useRef();
  const photoRef = useRef();

  // updateUserInfo
  async function updateUserInfoForm(e) {
    e.preventDefault();
    const name = nameRef.current.value;
    let photoUrl = photoRef.current.value;
    if (userInfo.photoUrl && !photoUrl) {
      photoUrl = userInfo.photoUrl;
    }
    try {
      await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyALpXBSjeiujbqD3fRd705go3ToNOgfuyA",
        {
          idToken: token,
          displayName: name,
          photoUrl: photoUrl,
          returnSecureToken: false,
        }
      );
      dispatch(updateUserInfo(token));

      e.target.reset();
    } catch (error) {
      alert(error.massage);
    }
  }
  return (
    <>
      <Container>
        <NormalCard>
          <HeaderTitle title={"Profile Update"} icon="manage_accounts" />
          <form action="" onSubmit={updateUserInfoForm}>
            <div className=" grid sm:grid-cols-3 gap-3 text-slate-600">
              <div className=" space-y-1">
                <label htmlFor="" className=" font-medium">
                  Name
                </label>
                <input
                  type="text"
                  style={{ outline: "none" }}
                  required
                  ref={nameRef}
                  className=" w-full text-slate-800 border rounded border-lime-300 h-9 p-2 focus:ring-2 focus:ring-lime-400 focus:border-0"
                />
              </div>
              <div className=" space-y-1">
                <label htmlFor="" className=" font-medium">
                  Photo URL
                </label>
                <input
                  type="text"
                  style={{ outline: "none" }}
                  ref={photoRef}
                  className=" w-full text-slate-800 border rounded border-lime-300 h-9 p-2 focus:ring-2 focus:ring-lime-400 focus:border-0"
                />
              </div>
              <ButtonPrimary type="submit" className="self-end sm:mt-0 mt-2">
                Update
              </ButtonPrimary>
            </div>
          </form>
        </NormalCard>
      </Container>
    </>
  );
}

export default ProfileUpdate;
