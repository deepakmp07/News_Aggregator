// userActions.js

export const loginUser = (email) => {
    return {
      type: "SET_USERNAME",
      payload: email,
    };
  };
   