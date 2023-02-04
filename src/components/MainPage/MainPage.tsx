import { useStore } from "effector-react"
import { useEffect, useState } from "react"
import { $globalVars } from "../../store/globalVars"
const rand = (min: number, max: number) => Math.round(min - 0.5 + Math.random() * (max - min + 1))





const MainPage = () => {
    const {theme} = useStore($globalVars)
    const [randomStar, setRandomStar] = useState([{size: 0, left: '', top: ''}])


    const newRandomStar = () => {
        const result = []

        for(let i = 0; i < 35; i++) {
            const size = rand(5, 10)
            
            result.push({size, left: `${rand(0, 98)}%`, top: `${rand(0, 98)}%`})
        }
        
        setRandomStar(result)
    }
    
    useEffect(() => {
        const interval = setInterval(() => {
            const size = rand(5, 15)
            setRandomStar([...randomStar.slice(1, randomStar.length), {size, left: `${rand(0, 98)}%`, top: `${rand(0, 98)}%`}])
        }, 300)

        return () => clearInterval(interval)
    }, [randomStar])

    useEffect(() => {
        newRandomStar()
    }, [])
// 00FFFF	

    return (
        <div onClick={newRandomStar} className={`w-full h-[100vh] brightness-200 ${theme? 'bg-black' : 'bg-[#193d7f]'} absolute`}>
            {randomStar.map(({left, top, size}) => <div key={`${left}${top}${size}`} style={{width: size, height: size, left, top}} className={
                `rounded-full ${theme? 'bg-white' : 'bg-[#30a7e2]'} ${theme? 'blur-[3.5px]' : ''} absolute animate-star
            `}></div>)}
        </div>
    )
}

export default MainPage