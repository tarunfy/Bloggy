import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { dispatch } = useAuthContext();

  const signup = async (email, password, username, fullname) => {
    setIsLoading(true);
    setError("");

    const res = await fetch("/api/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        username,
        fullname,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error);
      setIsLoading(false);
    }

    if (res.ok) {
      //save the user to localstorage:
      localStorage.setItem("user", JSON.stringify(data));

      //dispatch an action:
      dispatch({ type: "LOGIN", payload: data.user });

      setIsLoading(false);
    }
  };

  return { error, isLoading, signup };
};
