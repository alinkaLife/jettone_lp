import React from 'react'
import styles from '../input/input.module.css'

const Input = ({ placeholder, name, register, errors }) => {
    return (
        <div>
            <div className={styles.input__wrapper}>
                <input
                    placeholder=" "
                    autoComplete="new-password"
                    name={name}
                    id={placeholder}
                    className={styles.input}
                    {...register(name)}
                />
                <label className={styles.label} htmlFor={placeholder}>
                    {placeholder}
                </label>
            </div>
            {errors[name] && (
                <p style={{ color: 'red' }}>{errors[name].message}</p>
            )}
        </div>
    )
}

export default Input
