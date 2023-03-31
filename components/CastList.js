import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
// import {useSearchParams} from "react-router-dom"

export const CastList = ({cast}) => {
    // const [searchParams,setSearchParams] = useSearchParams();
    // const initKeyword = searchParams.get('keyword');
    // const [keyword,setKeyword] = useState(initKeyword || "");
    // const cast = getCast(initKeyword);


    // const handleKeywordChange = (e) => setKeyword(e.target.value);
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setSearchParams(keyword?{keyword} : {})
    // }
    return(
        <>
        <div className="castListForm"> 
            {/* <form onSubmit={handleSubmit}>
                <input  name="keyword"
                        value={keyword}
                        placeholder="검색어를 입력해 주세요. "
                        onChange={handleKeywordChange}/>
                <button type="submit"><Image src="/img/find.gif" width={20} height={20} /></button>
            </form> */}
        </div>
        <div className="castList">
          
            {
                cast.map(webtoon => (
                    <p key={webtoon.id}>
                        <Link href="/webtoon/[id]" as={`webtoon/${webtoon.id}`}>
                            <Image src={webtoon.imgUrl} alt={webtoon.title} width={200} height={200}/>
                        {webtoon.title}
                        </Link>
                    </p>
                ))
            }
        </div>
        </>
    )
} 