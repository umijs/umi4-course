import React from "react";
import { useModel } from "umi";

export default () => {
  const { user, fetchUser } = useModel("user", (model) => ({
    user: model.user,
    fetchUser: model.fetchUser,
  }));
  return <div onClick={() => fetchUser()}>hello {user}</div>;
};
