import loaderImg from "../../../assets/images/icons/loader.gif";
import React from "react";

const Loader = () => {
    return <div className="loader">
            <img className="loader-img" src={loaderImg}/>
        </div>
};

export default Loader;
