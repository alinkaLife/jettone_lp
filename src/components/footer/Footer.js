import styles from '../footer/Footer.module.css'

import React from 'react'
import { useTranslation } from 'next-i18next'

const Footer = () => {
    const { t } = useTranslation()
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.company}>
                    {/* <Image src={logo} alt="logotip" /> */}
                    <p>© JetTON Partners 2023, All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
