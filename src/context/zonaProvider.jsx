import { createContext, useState } from 'react'


export const zonaContext = createContext([])

const ZonaProvider=({children})=>{

    const [ zona, setZona ] = useState('')
    const [ bool, setBool ] = useState('true')
    
    return (
        <zonaContext.Provider value={{zona,setZona,bool,setBool}} >
            {children}
        </zonaContext.Provider>
    )
}

export default ZonaProvider

