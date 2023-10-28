import React from 'react'
import styles from './DesktopLangSwitcher.module.css'
import { useRouter } from 'next/router'
import RuIcon from '@/assets/icons/geo/1.png'
import EngIcon from '@/assets/icons/en_icon.svg'
import Image from 'next/image'

const DesktopLangSwitcher = () => {
    const router = useRouter()
    const [isOpen, setIsOpen] = React.useState(false)

    const handleToggle = () => setIsOpen((prev) => !prev)

    const handleChange = (locale) => {
        router.push('/', '/', { locale })
        handleToggle()
    }

    const isRuLang = router.locale === 'ru'

    return (
        <div className={styles.switcher__wrapper}>
            <div onClick={handleToggle} className={styles.switcher}>
                <Image
                    width={24}
                    height={24}
                    src={!isRuLang ? EngIcon : RuIcon}
                    priority={true}
                    alt="arrow"
                />
            </div>

            <ul
                className={[
                    styles.list,
                    !isOpen ? styles.list__isHidden : undefined,
                ].join(' ')}
            >
                <li
                    onClick={() => {
                        handleChange(!isRuLang ? 'ru' : 'en')
                    }}
                    className={[
                        styles.list__item,
                        isRuLang ? styles.isSelected : undefined,
                    ].join(' ')}
                >
                    <Image width={14} height={14} src={RuIcon} alt="ru" />
                    <span>RU</span>
                </li>
                <li
                    onClick={() => {
                        handleChange(!isRuLang ? 'ru' : 'en')
                    }}
                    className={[
                        styles.list__item,
                        !isRuLang ? styles.isSelected : undefined,
                    ].join(' ')}
                >
                    <Image width={14} height={14} src={EngIcon} alt="en" />
                    <span>EN</span>
                </li>
            </ul>
        </div>
    )
}

export default DesktopLangSwitcher
