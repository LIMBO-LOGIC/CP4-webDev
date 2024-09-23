import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import useContexts from "../hooks/useContext";
import HeaderMobile from "../components/HeaderMobile";
import Footer from "../components/Footer";

export default function RootLayout() {
    const { isMobileBig } = useContexts()

    return (
        <>
            {isMobileBig ? <HeaderMobile /> : <Header /> }
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}