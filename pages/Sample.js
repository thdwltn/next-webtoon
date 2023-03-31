import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Head from "next/head";
import Link from "next/link";

function Sample () {
    return(
        <>
        <Head>
            <title>홍보</title>
        </Head>
        <Header/>
        <h1>샘플</h1>
        <Link href="/"></Link>
        <Footer/>
        </>
    )
}

export default Sample;