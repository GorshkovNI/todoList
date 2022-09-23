import { useEffect } from 'react'
import React from 'react'


export const useKeyPress = (key, f) => {
    useEffect((key, f) => {
        document.addEventListener('keydown', detectedDown, true);
    })

    const detectedDown = (e) =>{
        if(e.key === key)
            f()
    }
}


   

