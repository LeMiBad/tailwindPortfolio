import { useStore } from "effector-react"
import React, { useState } from "react"
import GitIcon from "../../icons/GitIcon"
import JsIcon from "../../icons/JsIcon"
import NodeIcon from "../../icons/NodeIcon"
import NpmIcon from "../../icons/NpmIcon"
import ReactIcon from "../../icons/ReactIcon"
import ReduxIcon from "../../icons/ReduxIcon"
import { $globalVars } from "../../store/globalVars"
import TehnologyModal from "../TehnologyModal/TehnologyModal"

const iconsText = [
    'Не сильно полюбившийся мне стейт-менеджер во время моего первого знакомства с ним, но преобразившийся после прозрения о redux-toolkit',
    'Именно это я использую каждый раз, когда меня настигают подозрения о том, что я изобретаю велосипед',
    'Основной язык, который сильно помогает в моей работе',
    'ПО для контроля версий приложения, частенько спасало мою работу от не предвиденных ошибок',
    'Мой любимый JS фреймворк благодаря которому получается строить такие качественные и объёмные приложения',
    'Да, бывают ситуации в которых приходится прибегать к написанию бэка и именно на этот случай я вооружился этой технологией',
]

const ToolsPage = () => {
    const {theme} = useStore($globalVars)
    const [animations, setAnimations] = useState({left: '', right: '', close: 'animate-spinCircle', main: ''})
    const [openState, setOpenState] = useState(false)
    const [pickedIcon, setPickedIcon] = useState<null | React.ReactElement>(null)
    const [pickedIconText, setPickedIconText] = useState(0)

    const clickHandler = () => {
        setAnimations({left: '', right: '', close: 'animate-closeCircle', main: 'animate-rotateBlock'})
        setTimeout(() => {
            setAnimations({left: 'animate-openLeft', right: 'animate-openRight', close: 'animate-closeCircle', main: 'scale-[2] rotate-[-45deg]'})
        }, 1200)
    }

    const iconHandler = (icon: JSX.Element, index: number) => {
        setPickedIconText(index)
        setOpenState(true)
        setPickedIcon(icon)
    }

    return (
        <>
            {openState? <TehnologyModal text={iconsText[pickedIconText]} openState func={() => setOpenState(false)}>{pickedIcon}</TehnologyModal> : null}
            <div className={`${animations.main} w-full h-[100vh] ${openState? `blur-lg ${theme? 'brightness-150' : ''}` : ''} absolute left-0 top-0`}>
                <div className={`absolute ${animations.left} ${theme? 'bg-gray-900' : 'bg-slate-100'} h-full w-[50vw]`}>
                    <div className="flex flex-col justify-around items-center w-full h-full">
                        <div onClick={(() => iconHandler(<ReduxIcon size={150}></ReduxIcon>, 0))} className={`${animations.close} transition cursor-pointer`}>
                            <ReduxIcon size={150}></ReduxIcon>
                        </div>
                        <div onClick={(() => iconHandler(<NpmIcon size={150}></NpmIcon>, 1))} className={`${animations.close} cursor-pointer`}>
                            <NpmIcon size={150}></NpmIcon>
                        </div>
                        <div onClick={(() => iconHandler(<JsIcon size={150}></JsIcon>, 2))} className={`${animations.close} cursor-pointer`}>
                            <JsIcon size={150}></JsIcon>
                        </div>
                    </div>
                </div>
                <div className={`absolute ${animations.right} ${theme? 'bg-gray-900	' : 'bg-slate-100'} right-0 h-full w-[50vw]`}>
                    <div className="flex flex-col justify-around items-center w-full h-full">
                        <div onClick={(() => iconHandler(<GitIcon size={150}></GitIcon>, 3))} className={`${animations.close} cursor-pointer`}>
                            <GitIcon size={150}></GitIcon>
                        </div>
                        <div onClick={(() => iconHandler(<ReactIcon size={150}></ReactIcon>, 4))} className={`${animations.close} cursor-pointer`}>
                            <ReactIcon size={150}></ReactIcon>
                        </div>
                        <div onClick={(() => iconHandler(<NodeIcon size={150}></NodeIcon>, 5))} className={`${animations.close} cursor-pointer`}>
                            <NodeIcon size={150}></NodeIcon>
                        </div>
                    </div>
                </div>
                <button onClick={clickHandler} className={`absolute ${animations.close} bg-gradient-to-r from-green-300 to-sky-500 cursor-pointer w-[100px] h-[100px] left-[calc(50%-50px)] top-[calc(50%-50px)]`}></button>
            </div>
        </>
    )
}

export default ToolsPage