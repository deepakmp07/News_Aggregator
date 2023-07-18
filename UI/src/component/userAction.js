// userActions.js

export const loginUser = (username) => {
    return {
      type: "LOGIN_USER",
      payload: username,
    };
  };
  