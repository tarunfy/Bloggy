import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { dispatch } = useAuthContext();

  const login = async (username, password) => {
    setIsLoading(true);
    setError("");

    const res = await fetch("/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error);
      setIsLoading(false);
    }

    if (res.ok) {
      //dispatch an action:
      dispatch({ type: "LOGIN", payload: data.user });

      setIsLoading(false);
    }
  };
  return { login, error, isLoading };
};
