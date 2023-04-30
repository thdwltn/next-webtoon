import { formDate } from "@/pages/news/[slug]";
import Link from "next/link";
import {BiRightArrowAlt} from 'react-icons/bi'


export const DescList = ({cast}) => {
    return(
        <div id="descWrap">
        <div className="descList">
           
             {
                cast.map(webtoon => (
                    <div key={webtoon.slug} className="descListFlex">
                      <Link href="/desc/[slug]" as={`/desc/${webtoon.slug}`}>
                      <div><img src={webtoon.imgUrl} alt={webtoon.title}/></div>
                      <div>
                        <p>{webtoon.desc}</p>
                        <p>{webtoon.author} | {formDate(webtoon.date)}</p>
                      </div>
                      <span><BiRightArrowAlt/></span>
                      </Link>
                    </div>
                ))
            }
            
        </div>
        </div>
    )
}


  export default DescList;