import React from "react";
import { Link, useSearchParams, createSearchParams, useLocation } from "umi";
import logoImg from "@/assets/logo.png";
import "./index.less";

// 需要开启 svgr 配置之后才可用
// import UmiLogo from '@/assets/umi.svg';

export default () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  console.log(location);
  const a = searchParams.get("a");
  const b = searchParams.get("b");
  return (
    <div className="main">
      Index Page
      <img src={logoImg} width={150} />
      {/* <UmiLogo/> */}
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
