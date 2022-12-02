import React from "react";

const Sresult=(props)=>{
    const imglink=`https://source.unsplash.com/800x600/?${props.name}`;
    return (<>
        <div className="sresultbox">
            <img src={imglink} alt="search" />
        </div>
    </>);
}
export default Sresult;