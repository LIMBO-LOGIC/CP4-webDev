import { createContext, useEffect, useState } from "react";
import { PropTypes } from 'prop-types';

export const DataContext = createContext({})

DataProvider.propTypes = {
    children: PropTypes.node
}

export default function DataProvider({ children }) {
    const [isMobileBig, setIsMobileBig] = useState(window.innerWidth <= 768)
    const [isMobileSmall, setIsMobileSmall] = useState(window.innerWidth <= 640)

    useEffect(() => {
        const handleResize = () => {
            setIsMobileBig(window.innerWidth <= 768)
            setIsMobileSmall(window.innerWidth <= 640)
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    const dados = {
        isMobileBig, isMobileSmall
    }

    return (
        <DataContext.Provider value={dados}>
            {children}
        </DataContext.Provider>
    )
}