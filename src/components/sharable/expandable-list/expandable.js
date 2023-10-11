import React, { useState } from 'react'
import styles from '../expandable-list/expandable.module.css'
import ArrowIcon from '../../../assets/icons/arrow.svg'
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
                <p className={styles.title}>{title}</p>
                <Image
                    className={iconClasses.join(' ')}
                    src={ArrowIcon}
                    width={16}
                    height={16}
                    alt="expandable icon"
                />
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
