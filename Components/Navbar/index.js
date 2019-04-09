import Link from "next/link";
const Navbar = () => (
    <div>
        <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/about"><a>About</a></Link></li>
            <li><Link href="/contact"><a>Contact</a></Link></li>
        </ul>
        <style jsx>{`
            ul {
                margin: 0;
                padding: 0;
                background: #333;
                color:#FFF;
                display: flex;
                list-style: none;
            }
            ul li {
                font-size: 18px;
                margin-right: 20px;
            }
            ul li a {
                color: #DDD;
                text-decoration: none;
            }
            ul li a:hover {
                color: #FFF;
            }
        `}</style>
    </div>
)
export default Navbar;