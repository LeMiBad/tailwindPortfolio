import { useStore } from "effector-react"
import { useState } from "react"
import { $globalVars } from "../../store/globalVars"



const WelcomePage = () => {
    const {theme} = useStore($globalVars)
    const [animations, setAnimations] = useState({left: '', right: '', close: 'animate-spinCircle'})

    const clickHandler = () => setAnimations({left: 'animate-openLeft', right: 'animate-openRight', close: 'animate-closeCircle'})

    return (
        <>
            <div className={`flex justify-center items-start absolute ${animations.left} ${theme? 'bg-slate-900' : 'bg-slate-100'} h-full w-[50vw]`}>
                <h1 className={`text-5xl select-none mt-36 ${theme? 'text-slate-50' : ''}`}>Привет Меня зовут Леонид</h1>
            </div>
            <div className={`absolute flex justify-center items-end ${animations.right} ${theme? 'bg-slate-900' : 'bg-slate-100'} right-0 h-full w-[50vw]`}>
                <h1 className={`text-5xl select-none mb-36 ${theme? 'text-slate-50' : ''}`}>И я Frontend-Разработчик</h1>
            </div>
            <button onClick={clickHandler} className={`absolute ${animations.close} bg-gradient-to-r from-green-300 to-sky-500 cursor-pointer w-[100px] h-[100px] left-[calc(50%-50px)] top-[calc(50%-50px)]`}></button>
        </>
    )
}

export default WelcomePage