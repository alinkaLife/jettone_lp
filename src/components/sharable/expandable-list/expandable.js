import React, { useState } from 'react'
import styles from '../expandable-list/expandable.module.css'
import IconPlus from '../../../assets/icons/faq/plus.svg'
import IconMinus from '../../../assets/icons/faq/minus.svg'
import Image from 'next/image'

const Expandable = ({ title, description }) => {
    const [open, setOpen] = useState(false)

    const iconClasses = [styles.icon]
    if (open) {
        iconClasses.push(styles.icon__open)
    }
    return (
        <li className={styles.item}>
            <div
                onClick={() => {
                    setOpen((prev) => !prev)
                }}
                className={styles.item__top}
            >
                <Image
                    className={iconClasses.join(' ')}
                    src={open ? IconMinus : IconPlus}
                    width={16}
                    height={16}
                    alt="expandable icon"
                />
                <p className={styles.title}>{title}</p>
            </div>
            {open ? (
                <div className={styles.description}>{description}</div>
            ) : (
                <></>
            )}
        </li>
    )
}

export default Expandable
