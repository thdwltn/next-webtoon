import Link from "next/link"
import {BiMenu} from "react-icons/bi"
import {BiSearch} from "react-icons/bi"

export const Header = () => {
    return(
        <>
        <div id="head">

        <header>
            <BiMenu size="50" color="black"/>
            <h1><Link href="/"><img src="/img/logo.png"/></Link></h1>
            <ul>
                <li><BiSearch size="40" color="black"/></li>
                <li>ENG</li>
            </ul>
        </header>
        </div>
        <nav>
            <ul>
                <li><Link href="/desc">추천</Link></li>
                <li><Link href="/news">커뮤니티</Link></li>
            </ul>
        </nav>
        </>
    )
}