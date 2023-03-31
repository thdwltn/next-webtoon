import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Head from 'next/head'
import { Layout } from '@/components/Layout'
import { CastList } from '@/components/CastList'


export default function Home({cast}) {
  
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link href="https://fonts.googleapis.com/css2?family=Grape+Nuts&family=Hahmlet&display=swap" rel="stylesheet"></link>
      </Head>
      <Header/>
      <main id='home'>
        <h3>기다리면 무료로 시작해!</h3>
      
        <CastList cast={cast}/>
        <h3>오늘, 웹툰가이드의 발견</h3>
       
        <CastList cast={cast.slice(3,7)}/>
        <h3>오직 웹툰가이드 에서만!</h3>
       
        <CastList cast={cast.slice(5,9)}/>
        <h3>새로 나온 작품</h3>
       
        <CastList cast={cast.slice(7,11)}/>
        {/* {console.log(cast)} */}
      </main>
      <Footer/>
      </Layout>
      
  )
}


export async function getStaticProps(){
  const res = await fetch('https://jisoo-game-dice.s3.ap-northeast-2.amazonaws.com/data-webtoon.json');
  const data = await res.json();
  return{
    props:{
      cast: data
    }
    
  }
}


