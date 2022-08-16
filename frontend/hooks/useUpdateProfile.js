import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useUpdateProfile = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { user, dispatch } = useAuthContext();

  const updateProfile = async (profileData) => {
    setIsLoading(true);
    setError("");
    const res = await fetch(`/api/user/${user._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profileData),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error);
      setIsLoading(false);
    }

    if (res.ok) {
      dispatch({ type: "UPDATE", payload: data.user });

      setIsLoading(false);
    }
  };

  return { error, isLoading, updateProfile };
};
