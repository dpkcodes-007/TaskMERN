import React, { useContext } from 'react'
import ThemePage from '../context/ThemePage'

const ThemePagessss = () => {

    const { theme } = useContext(ThemePage)

    return (
        <>
            <div>
                <h2>Header</h2>
                <div
                    style={{
                        backgroundColor: theme === "dark" ? "black" : "white",
                        color: theme === "dark" ? "white" : "black"
                    }}
                >
                    Dark Background <br />
                    White Text
                </div>
            </div>

            <br />

            <div>
                <h2>Sidebar</h2>
                <div
                    style={{
                        backgroundColor: theme === "dark" ? "black" : "white",
                        color: theme === "dark" ? "white" : "black"
                    }}
                >
                    Dark Background <br />
                    White Text
                </div>
            </div>

            <br />

            <div>
                <h2>Card</h2>
                <div
                    style={{
                        backgroundColor: theme === "dark" ? "black" : "white",
                        color: theme === "dark" ? "white" : "black"
                    }}
                >
                    Dark Background <br />
                    White Text
                </div>
            </div>
        </>
    )
}

export default ThemePagessss