import { createStore } from "effector"
import { useStore } from "effector-react"
import React from "react"
import { $globalVars } from "../../store/globalVars"

export const $pickedIcon = createStore<any>(null)

const TehnologyModal:React.FC<{children: React.ReactNode, openState: boolean, func: () => void, text: string}> = ({children, openState, func, text}) => {
    const {theme} = useStore($globalVars)
    

    return (
        <>
            {openState? 
                <div onClick={func} className="absolute cursor-pointer w-full h-[100vh] z-[30] flex justify-center items-center">
                    <div className="w-[50vw] h-[70vh] flex flex-col justify-start items-center gap-20">
                        <div>{children}</div>
                        <h1 className={`bg ${theme? 'text-cyan-50' : 'text-slate-800'} text-center text-xl select-none`}>{text}</h1>
                    </div>
                </div> 
            : 
                null
            }
            
        </>
    )
}

export default TehnologyModal