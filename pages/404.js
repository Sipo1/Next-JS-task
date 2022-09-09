import Heading from "../components/heading"
import { useRouter } from 'next/router';
import { useEffect } from "react";
import styles from "../styles/Error.module.css"

const Error = () => {

    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 5000)

    }, [router])

    return (
        <div className={styles.wrapper}>
            <p className={styles.ErorDigit} > 404 | </p>
            <Heading teg="h2" text="Something go wrong" />
        </div>

    )
}

export default Error