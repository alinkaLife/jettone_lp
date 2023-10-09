import React, { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Logoicon from '../../assets/icons/logo.svg'
import styles from './Header.module.css'
import Nav from '../nav/Nav'
import Button from '../sharable/button/button'
import MobileLangSwitcher from '../lang/mobile/MobileLangSwitcher'
import DesktopLangSwitcher from '../lang/desktop/DesktopLangSwitcher'
import Open from '../../assets/icons/burger_menu_open.svg'
import Close from '../../assets/icons/burger_menu_close.svg'


const Header = ({ handleModalOpen }) => {
    const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false)
    const [isClient, setIsClient] = useState(false);


    const handleOpen = () => {
        setisMobileMenuOpen(prev => !prev)
        document.body.style.overflow = 'hidden'
    }

    const handleClose = () => {
        setisMobileMenuOpen(false)
        document.body.style.overflow = 'auto'
    }


    useEffect(() => {
        setIsClient(true)
    }, [])


    const navigation = isClient ? <Nav
        onNavClick={handleClose}
    /> : <></>

    return (
        <header
            className={isMobileMenuOpen ? styles.header__fixed : undefined}
        >
            <div className='container'>
                <div className={styles.header}>
                    <Image priority={true} src={Logoicon} alt='logo' />
                    <div className={styles.nav__wrapper}>
                        <Image
                            priority={true}
                            onClick={handleOpen}
                            className={styles.burger}
                            src={isMobileMenuOpen ? Close : Open}
                            alt='burger menu closed'
                        />
                        <div className={styles.isHidden}>
                            {navigation}
                        </div>
                        <Button onClick={handleModalOpen} type='secondary'>Подать заявку</Button>
                        <DesktopLangSwitcher />
                    </div>
                </div>

            </div>
            {
                isMobileMenuOpen && (
                    <div className={styles.mobile__menu}>
                        <div style={{ minHeight: '100%', display: 'flex' }} className='container'>
                            <div className={styles.mobile__wrapper}>
                                <div>
                                    {navigation}
                                    <div className={styles.btn} >
                                        <Button>Подать заявку</Button>
                                    </div>
                                </div>
                                < MobileLangSwitcher />
                            </div>
                        </div>
                    </div>
                )
            }
        </header>
    )
}

export default Header