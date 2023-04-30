import Link from "next/link";
import {BiRightArrowAlt} from 'react-icons/bi'


export const NewsList = ({cast}) => {
    return(
        <div className="newsList">
            <ul>
             {
                cast.map(news => (
                    <li key={news.slug}>
                      <Link href="/news/[id]" as={`/news/${news.slug}`}>
                        {/* [{news.category}]&nbsp; */}
                      {news.title} &nbsp;<span><BiRightArrowAlt/></span>
                      </Link>
                    </li>
                ))
            }
            </ul>
        </div>
    )
}


  export default NewsList;