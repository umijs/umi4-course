import React from "react";
import { Link, useSearchParams, createSearchParams, useLocation, } from "umi";

export default () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  console.log(location);
  const a = searchParams.get("a");
  const b = searchParams.get("b");
  return (
    <div>
      Index Page
      <p>
        <Link to="/user">Go to user page</Link>
      </p>
      <p>
        SearchParams ---- a:{a};b:{b}
      </p>
      <p>State ---- {JSON.stringify(location?.state)}</p>
      <button
        onClick={() => {
          setSearchParams(createSearchParams({ a: "123", b: "456" }));
        }}
      >
        Change SearchParams
      </button>
    </div>
  );
};
