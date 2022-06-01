import React, { FC } from "react";
import { history, useNavigate, createSearchParams } from "umi";
import styles from "./index.less";

export default function User() {
  const navigate = useNavigate();
  return (
    <div className={styles.main}>
      <h1>User Page</h1>
      <button onClick={() => history.back()}>go back by history!</button>
      <button onClick={() => history.push("/")}>go to index by history!</button>
      <button onClick={() => navigate(-1)}>go back by navigate!</button>
      <button onClick={() => navigate("/")}>go to index by navigate!</button>
      <button
        onClick={() => {
          navigate(`/?${createSearchParams({ a: "1", b: "2" })}`);
        }}
      >
        go to index has SearchParams!
      </button>
      <button
        onClick={() => {
          navigate("/", {
            state: {
              c: 987,
            },
          });
        }}
      >
        go to index has State!
      </button>
    </div>
  );
}
