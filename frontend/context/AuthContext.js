import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext(null);

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload,
      };

    case "LOGOUT":
      return {
        user: null,
      };

    case "UPDATE":
      return {
        state,
        ...action.playload,
      };

    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user"));

    if (userInfo) {
      dispatch({ type: "LOGIN", payload: userInfo.user });
    }
  }, []);

  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
