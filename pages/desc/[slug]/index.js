const { Layout } = require("@/components/Layout")
const { default: Image } = require("next/image")
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Link from 'next/link'

const castDesc = ({castDesc}) => {
    console.log(castDesc)
    return(
        <Layout>
            <Header/>
            <main className="descListClick">
            <Image src={castDesc.imgUrl} alt={castDesc.title} width={600} height={600}/>
                <div className='castListClickRight'>
                <h1>{castDesc.title}({castDesc.Genre})</h1>
                <p>작가명 : {castDesc.author}</p>
                <p>총 {castDesc.episode}화</p>
                <p><Image src="/img/star.png" width={20} height={20}/><Image src="/img/star.png" width={20} height={20}/><Image src="/img/star.png" width={20} height={20}/><Image src="/img/star.png" width={20} height={20}/><Image src="/img/star.png" width={20} height={20}/>{castDesc.rank}점</p>
                <p>좋아요 {castDesc.like}</p>
                <p className='view'>조회수 {castDesc.view}</p>
                <p className='first'><Link href={`https://view.ridibooks.com/books/${castDesc.page}`} target="_blank">첫화보기</Link></p>
                <p className='home'><Link href="/">Home으로 이동</Link></p>
                </div>
            </main>
            <Footer/>
        </Layout>
    )
}

export const getServerSideProps = async(context) => {
    const res = await fetch('https://jisoo-game-dice.s3.ap-northeast-2.amazonaws.com/data-webtoon.json');
    const data = await res.json();
    const castDesc = data.filter(item => item.slug == context.params.slug);
    return{
        props:{
            castDesc : castDesc[0]
        }
    }
}

export default castDesc;