import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  userInfo: {
    email: null,
    networkEmail: null,
    name: null,
    emailVerified: null,
    photoUrl: null,
    uniqueId: null,
  },
  isVerifying: true,
  isLogging: true,
  isForgot:false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    logIn(states, actions) {
      states.token = actions.payload.idToken;
      states.userInfo = { ...states.userInfo, ...actions.payload.userInfo };
    },
    logOut(states) {
      states.token = null;
      states.userInfo = {
        email: null,
        networkEmail: null,
        name: null,
        emailVerified: null,
        photoUrl: null,
        uniqueId: null,
      };
    },
    updateUserInfo(states, actions) {
      states.userInfo = actions.payload.userInfo;
    },
    doneVerifying(states) {
      states.isVerifying = false;
    },
    alternateLogging(states){
      states.isLogging = !states.isLogging
    },
    alternateForgot(states){
      states.isForgot = !states.isForgot
    }
  },
});

export const authAction = authSlice.actions;
export default authSlice.reducer;
