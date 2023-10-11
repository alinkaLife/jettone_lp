import useOnScreen from '@/services/useOnScreen'
import React, { useRef } from 'react'

const AnimatedImage = ({ children }) => {
    const ref = useRef(null)
    const isVisible = useOnScreen(ref)

    return (
        <div className={isVisible ? 'animated__shaking' : ''} ref={ref}>
            {children}
        </div>
    )
}

export default AnimatedImage
