import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import Image from "next/image";

const { Layout } = require("@/components/Layout")

export function formDate(value){
    const date1 = new Date(value);
    return(
      `
      ${date1.getFullYear()}.  
      ${date1.getMonth()+1}.  
      ${date1.getDate()}  
      `)
  }
  
const castNews = ({castNews}) => {
    console.log(castNews)
    return(
        <Layout>
            <Header/>
            <main className="newsListClick">
                {/* box01 */}
                <div className="box01">
                    <div className="box01Left">
                        <h3>{castNews.category}</h3>
                    </div>
                    <div className="box01Right">
                        <p>{castNews.title}</p>
                        <p>{castNews.name} 기자 | {formDate(castNews.date)}</p>
                    </div>
                </div>

                {/* box02 */}
                <div className="box02">
                    <p>{castNews.subContent}</p>
                </div>

                {/* box03 */}
                <div className="box03">
                    <Image src={castNews.photoUrl} alt={castNews.title}
                    width={1000}
                    height={500}/>
                </div>
                {/* box04 */}
                <div className="box04">
                    <p>{castNews.content}</p>
                </div>
                
            </main>
            <Footer/>
        </Layout>
    )
}


export const getServerSideProps = async(context) => {
    const res = await fetch('https://jisoo-game-dice.s3.ap-northeast-2.amazonaws.com/data-news.json');
    const data = await res.json();
    const castNews = data.filter(item => item.slug == context.params.slug);
    return{
        props:{
            castNews : castNews[0],
        }
    }
}

export default castNews;