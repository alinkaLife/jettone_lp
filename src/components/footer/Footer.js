import styles from '../footer/Footer.module.css'
import Image from 'next/image'
import logo from '../../assets/icons/logo.svg'
import telegram from '../../assets/icons/telegram.svg'
import mail from '../../assets/icons/mail.svg'
import React from 'react'
import { useTranslation } from 'next-i18next'

const Footer = () => {
    const { t } = useTranslation()
    return (
        <footer>
            <div className="container">
                <div className={styles.footer}>
                    <div>
                        <h3 className={styles.name}>{t('footer.title')}</h3>
                        <ul className={styles.list}>
                            <li>
                                <a
                                    className={styles.item}
                                    target="_blank"
                                    href="https://t.me/JetTonPartners"
                                >
                                    <Image src={telegram} alt="telegram" />
                                    <span>@support</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className={styles.item}
                                    target="_blank"
                                    href="mailto:support.jetton@gmail.com"
                                >
                                    <Image src={mail} alt="mail" />
                                    <span>support.jetton@gmail.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.company}>
                        <Image src={logo} alt="logotip" />
                        <p>© JetTON Partners 2023, All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
