import { createEvent, createStore } from "effector";



export const themeChange = createEvent()
export const langChange = createEvent()
export const $globalVars = createStore({theme: true, lang: false})
    .on(themeChange, (init) => {
        return {...init, theme: init.theme? false : true}
    })
    .on(langChange, (init) => {
        return {...init, lang: init.lang? false : true}
    })