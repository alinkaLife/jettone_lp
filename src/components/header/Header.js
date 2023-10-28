import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Logoicon from '../../assets/icons/logo.svg'
import styles from './Header.module.css'
import Nav from '../nav/Nav'
import Button from '../sharable/button/button'
import DesktopLangSwitcher from '../lang/DesktopLangSwitcher'

import { useTranslation } from 'next-i18next'
import Burger from './burger/Burger'
import MobileMenu from './mobile-menu/MobileMenu'
import Link from 'next/link'

const Header = ({ handleModalOpen }) => {
    const [isClient, setIsClient] = useState(false)
    const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false)

    const { t } = useTranslation()

    useEffect(() => {
        setIsClient(true)
    }, [])

    const navigation = isClient ? <Nav /> : <></>
    const handleNavToggle = () => setIsOpenMobileMenu((prev) => !prev)

    return (
        <header className={styles.header__top}>
            <div className="container">
                <div className={styles.header}>
                    <Link href={'/'}>
                        <Image
                            className={styles.logo}
                            priority={true}
                            src={Logoicon}
                            alt="logo"
                        />
                    </Link>
                    <div className={styles.isHidden}>{navigation}</div>
                    <div className={styles.action__block}>
                        <DesktopLangSwitcher />
                        <Button
                            className={styles.request}
                            onClick={handleModalOpen}
                        >
                            {t('request')}
                        </Button>
                        <Burger
                            isOpen={isOpenMobileMenu}
                            handleOpen={handleNavToggle}
                        />
                    </div>
                </div>
            </div>
            {
                <MobileMenu
                    isOpen={isOpenMobileMenu}
                    handleClose={handleNavToggle}
                />
            }
        </header>
    )
}

export default Header
