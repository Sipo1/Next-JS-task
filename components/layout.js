import Footer from "./footer"
import Header from "./header"

const Leyout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Leyout