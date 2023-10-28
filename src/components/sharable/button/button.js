import React from 'react'
import styles from './button.module.css'

const Button = ({
    type = 'base',
    children,
    onClick,
    isLoading,
    className,
    ...props
}) => {
    const classes = [styles.btn, styles.btn__base]

    if (className) {
        classes.push(className)
    }
    
    return (
        <button
            style={isLoading ? { opacity: '0.5' } : {}}
            disabled={isLoading}
            onClick={onClick}
            className={classes.join(' ')}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button
