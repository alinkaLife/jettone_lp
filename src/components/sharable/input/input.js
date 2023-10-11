import React from 'react'
import styles from '../input/input.module.css'

const Input = ({ placeholder, name, register, errors }) => {
    return (
        <div>
            <input
                name={name}
                id={placeholder}
                placeholder={placeholder}
                className={styles.input}
                {...register(name)}
            />
            {errors[name] && (
                <p style={{ color: 'red' }}>{errors[name].message}</p>
            )}
        </div>
    )
}

export default Input
