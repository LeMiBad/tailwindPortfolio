import { useStore } from "effector-react"
import { useEffect, useState } from "react"
import { $globalVars } from "../../store/globalVars"
const rand = (min: number, max: number) => Math.round(min - 0.5 + Math.random() * (max - min + 1))





const MainPage = () => {
    const {theme} = useStore($globalVars)
    const [randomStar, setRandomStar] = useState([<></>])


    const newRandomStar = () => {
        const result = []

        for(let i = 0; i < 35; i++) {
            const size = rand(20, 50)

            result.push(<div style={{width: size, height: size, left:`${rand(0, 100)}%`, top:`${rand(0, 100)}%`}} className={`rounded-full bg-white blur-sm absolute`}></div>)
        }

        setRandomStar(result)
    }

    useEffect(() => {
        setInterval(() => {
            newRandomStar()
        }, 100)
    }, [])


    return (
        <div onClick={newRandomStar} className="w-full h-[100vh] bg-black absolute">
            {randomStar.map(star => star)}
        </div>
    )
}

export default MainPage