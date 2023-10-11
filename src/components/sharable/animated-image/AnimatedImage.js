import React from 'react'
import { useInView } from 'react-intersection-observer'

const AnimatedImage = ({ children }) => {
    const { ref, inView } = useInView({ triggerOnce: true })

    return (
        <div
            className={
                inView ? 'animated__shaking' : 'animated__shaking__start'
            }
            ref={ref}
        >
            {children}
        </div>
    )
}

export default AnimatedImage
