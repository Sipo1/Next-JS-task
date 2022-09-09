import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.css";
import Image from 'next/image';

const Navbar = () => {

    const { pathname } = useRouter()

    const navigation = [
        { id: 1, title: "Home", path: "/" },
        { id: 2, title: "Posts", path: "/posts" },
        { id: 3, title: "Contacts", path: "/contacts" },
    ]

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Image src="/logo02.png" width={60} height={60} alt="Next JS" />
            </div>

            <div className={styles.links}>
                {navigation.map(({ id, title, path }) => {
                    return <Link key={id} href={path}>
                        <a className={pathname === path ? styles.active : null}>{title}</a>
                    </Link>
                })}

            </div>
        </nav >
    );
};

export default Navbar;
