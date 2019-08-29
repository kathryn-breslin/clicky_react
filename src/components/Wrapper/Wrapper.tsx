import React from "react";
import "./Wrapper.css";
function Wrapper (props: { children: React.ReactNode; }) {
    return <div className="wrapper">{props.children}</div>;

}

export default Wrapper;