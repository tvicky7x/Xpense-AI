import axios from "axios";
import { fireBaseUrl } from "./generalData";
import { getExpenseList } from "./expenseAction";
import { authAction } from "./authSlice";

export function logInHandler(idToken) {
  return async (dispatch) => {
    localStorage.setItem("token", idToken);
    setTimeout(() => {
      localStorage.removeItem("token");
    }, 1000 * 60 * 10);

    const userInfo = await getUserInfo(idToken);
    dispatch(getExpenseList(userInfo.uniqueId, userInfo.networkEmail));
    dispatch(authAction.logIn({ userInfo, idToken }));
  };
}

export function logOutHandler() {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch(authAction.logOut());
  };
}

export function updateUserInfo(id) {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyALpXBSjeiujbqD3fRd705go3ToNOgfuyA",
        { idToken: id }
      );
      const data = response.data.users[0];
      let userInfo;
      if (data.displayName) {
        userInfo = await getUserUniqueId({
          emailVerified: data.emailVerified,
          email: data.email,
          networkEmail: data.email.replace(/[^a-z0-9A-Z]/g, ""),
          name: data.displayName,
          photoUrl: data.photoUrl,
        });
      } else {
        userInfo = await getUserUniqueId({
          emailVerified: data.emailVerified,
          email: data.email,
          networkEmail: data.email.replace(/[^a-z0-9A-Z]/g, ""),
        });
      }
      if (userInfo.emailVerified) {
        dispatch(authAction.updateUserInfo({ userInfo }));
      }
    } catch (error) {
      alert(error);
    }
  };
}

// getting userInformation
async function getUserInfo(id) {
  try {
    const response = await axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyALpXBSjeiujbqD3fRd705go3ToNOgfuyA",
      { idToken: id }
    );
    const data = response.data.users[0];

    if (data.displayName) {
      return getUserUniqueId({
        emailVerified: data.emailVerified,
        email: data.email,
        networkEmail: data.email.replace(/[^a-z0-9A-Z]/g, ""),
        name: data.displayName,
        photoUrl: data.photoUrl,
      });
    } else {
      return getUserUniqueId({
        emailVerified: data.emailVerified,
        email: data.email,
        networkEmail: data.email.replace(/[^a-z0-9A-Z]/g, ""),
      });
    }
  } catch (error) {
    alert(error);
  }
}

// getting User Unique Id
async function getUserUniqueId(data) {
  try {
    const response = await axios.get(
      `${fireBaseUrl}/${data.networkEmail}.json`
    );
    if (!response.data) {
      const recall = await axios.post(
        `${fireBaseUrl}/${data.networkEmail}.json`,
        { allExpenseList: "NIL" }
      );

      return { ...data, uniqueId: recall.data.name };
    } else {
      return { ...data, uniqueId: Object.keys(response.data)[0] };
    }
  } catch (error) {
    alert(error);
  }
}
