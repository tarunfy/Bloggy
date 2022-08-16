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
        user: action.payload,
      };

    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });
  useEffect(() => {
    //get current user:
    async function getCurrentUser() {
      const res = await fetch("/api/user/currentUser");

      const data = await res.json();

      if (res.ok) {
        dispatch({ type: "LOGIN", payload: data.user });
      } else {
        dispatch({ type: "LOGOUT" });
      }
    }
    getCurrentUser();
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
