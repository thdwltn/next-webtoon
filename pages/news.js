import NewsList from "@/components/NewsList";
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Link from "next/link"
export default function News({cast}){
  console.log(cast)
  return(
      <>
      <Header/>
      <NewsList cast={cast}/>
      <Link href="/">Home</Link>
      <Footer/>
      </>
  )
}





export async function getStaticProps(){
  const res = await fetch('https://jisoo-game-dice.s3.ap-northeast-2.amazonaws.com/data-news.json');
  const data = await res.json();
  return{
    props:{
      cast: data
    }
    
  }
}

