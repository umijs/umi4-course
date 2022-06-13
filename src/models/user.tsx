import { useState, useCallback } from "react";

export default function useAuthModel() {
  const [user, setUser] = useState("umi");

  const fetchUser = useCallback(() => {
    setUser("umi@4 实战教学");
  }, []);

  return {
    user,
    fetchUser,
  };
}
