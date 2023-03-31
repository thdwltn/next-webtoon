import Link from "next/link"

export const Header = () => {
    return(
        <>
        <div id="head">
        <header>
            <h1><Link href="/"><img src="/img/logo.png"/></Link></h1>
            <ul>
                <li>로그인</li>
                <li>회원가입</li>
            </ul>
        </header>
        </div>
        <nav>
            <ul>
                <li><Link href="/sub">홍보</Link></li>
                <li><Link href="/news">커뮤니티</Link></li>
            </ul>
        </nav>
        </>
    )
}