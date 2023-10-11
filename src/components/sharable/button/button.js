import React from 'react'
import styles from './button.module.css'

const Button = ({ type = 'base', children, onClick, isLoading }) => {
    const classes = [styles.btn]

    if (type === 'base') {
        classes.push(styles.btn__base)
    } else if (type === 'secondary') {
        classes.push(styles.btn__secondary)
    }

    return (
        <button
            style={isLoading ? { opacity: '0.5' } : {}}
            disabled={isLoading}
            onClick={onClick}
            className={classes.join(' ')}
        >
            {children}
        </button>
    )
}

export default Button
