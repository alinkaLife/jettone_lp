import React from 'react'
import styles from './MobileLangSwitcher.module.css'
import { useRouter } from 'next/router'

const MobileLangSwitcher = ({ }) => {
    const router = useRouter();

    return (
        <ul className={styles.list}>
            {router.locales.map(el => {
                return (
                    <li
                        key={el}
                    >
                        <button
                            onClick={() => {
                                router.push('/', '/', { locale: el })
                            }}
                            className={router.locale === el ? styles.active : undefined}
                        >
                            {el.toUpperCase()}
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}

export default MobileLangSwitcher