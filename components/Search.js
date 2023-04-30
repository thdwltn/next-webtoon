import { useState } from "react";
import { BiSearch } from "react-icons/bi";

function Search({query,onQueryChange}){
    const [query2,setQuery2] = useState('');
    return(
        <div id="search">
            <input
                    type="text" value={query2} onChange={(e)=>{setQuery2(e.target.value)}}
            />
            <button type="button" onClick={()=>{onQueryChange(query2)}}><BiSearch/></button>
        </div>
    )
}

export default Search;