import styles from '../hero/Hero.module.css'
import React from 'react'
import Button from '../../sharable/button/button'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import TelegramIcon from '@/assets/icons/telegram.svg'

const Hero = ({ handleModalOpen }) => {
    const { t } = useTranslation()

    return (
        <section className={styles.hero__section} id='hero'>
            <div className='container'>
                <div className={styles.hero}>
                    <h1 className={styles.title}>
                        <div className={styles.title__active}>JetTon</div>
                        <div>{t('hero.title')}</div>
                    </h1>
                    <h2 className={styles.description}>
                        <span>{t('hero.description.start')} </span>
                        <Image
                            width={28}
                            height={28}
                            className={styles.img}
                            src={TelegramIcon}
                            alt={'telegram icon'}
                        />
                        <span> {t('hero.description')}</span>
                    </h2>
                    <Button className={styles.btn} onClick={handleModalOpen}>
                        {t('hero.btn')}
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Hero
