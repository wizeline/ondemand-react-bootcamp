import { useState, useEffect } from 'react'

export default function UserWindow() {
    const [screenSize, getDimension] = useState({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
    });
    const setDimension = () => {
        getDimension({
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        })
    }

    useEffect(() => {
        window.addEventListener('resize', setDimension);

        return (() => {
            window.removeEventListener('resize', setDimension);
        })
    }, [screenSize])
    return (screenSize)
}