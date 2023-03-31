import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Link from "next/link";

export default function Sub01(){
    return(
        <>
        <Header/>
        <h1>홍보페이지</h1>
        <Link href="/">Home</Link>
        <Footer/>
        </>
    )
}