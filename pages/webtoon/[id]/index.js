const { Layout } = require("@/components/Layout")
const { default: Image } = require("next/image")
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Link from 'next/link'

const castWebtoon = ({castWebtoon}) => {
    console.log(castWebtoon)
    return(
        <Layout>
            <Header/>
            <main className='castListClick'>
                <Image src={castWebtoon.imgUrl} alt={castWebtoon.title} width={600} height={600}/>
                <div className='castListClickRight'>
                <h1>{castWebtoon.title}({castWebtoon.Genre})</h1>
                <p>작가명 : {castWebtoon.author}</p>
                <p>총 {castWebtoon.episode}화</p>
                <p><Image src="/img/star.png" width={20} height={20}/><Image src="/img/star.png" width={20} height={20}/><Image src="/img/star.png" width={20} height={20}/><Image src="/img/star.png" width={20} height={20}/><Image src="/img/star.png" width={20} height={20}/>{castWebtoon.rank}점</p>
                <p>좋아요 {castWebtoon.like}</p>
                <p className='view'>조회수 {castWebtoon.view}</p>
                <p className='first'><Link href={`https://view.ridibooks.com/books/${castWebtoon.page}`} target="_blank">첫화보기</Link></p>
                <p className='home'><Link href="/">Home으로 이동</Link></p>
                </div>
            </main>
            <div className='bottom'>
                <p>출간정보 : {castWebtoon.date}</p>
                <p>최근 업데이트 : {castWebtoon.date}</p>
            </div>

            
            <Footer/>
        </Layout>
    )
}

export const getServerSideProps = async(context) => {
    const res = await fetch('https://jisoo-game-dice.s3.ap-northeast-2.amazonaws.com/data-webtoon.json');
    const data = await res.json();
    const castWebtoon = data.filter(item => item.id == context.params.id);
    return{
        props:{
            castWebtoon : castWebtoon[0]
        }
    }
}

export default castWebtoon;