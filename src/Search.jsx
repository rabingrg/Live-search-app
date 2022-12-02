import  React,{ useState} from "react";
import Sresult from "./Sresult";

const Search=()=>{
    const [img,setImag] = useState("");
    
    const inputEvent=(event)=>{
        const data = event.target.value;
        setImag(data);
    };
    return (<>
        <div className="searchbox">
            <input type="text" placeholder="Search Here" value={img} onChange={inputEvent}/>
        </div>
        {(img==="")?null:<Sresult name={img}/>}  
    </>);                                  //search fill ma sth enter garda matra display hunxa
};
export default Search;